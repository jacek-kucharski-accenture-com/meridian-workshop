"""
Tests for /api/reports/quarterly and /api/reports/monthly-trends endpoints.
"""


def test_quarterly_returns_list(client):
    response = client.get("/api/reports/quarterly")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    assert len(data) > 0


def test_quarterly_item_structure(client):
    response = client.get("/api/reports/quarterly")
    q = response.json()[0]
    assert "quarter" in q
    assert "total_orders" in q
    assert "total_revenue" in q
    assert "avg_order_value" in q
    assert "fulfillment_rate" in q


def test_quarterly_sorted_by_quarter(client):
    response = client.get("/api/reports/quarterly")
    quarters = [q["quarter"] for q in response.json()]
    assert quarters == sorted(quarters)


def test_quarterly_fulfillment_rate_range(client):
    response = client.get("/api/reports/quarterly")
    for q in response.json():
        assert 0 <= q["fulfillment_rate"] <= 100


def test_quarterly_filter_by_warehouse(client):
    all_response = client.get("/api/reports/quarterly")
    filtered_response = client.get("/api/reports/quarterly?warehouse=Tokyo")
    all_revenue = sum(q["total_revenue"] for q in all_response.json())
    filtered_revenue = sum(q["total_revenue"] for q in filtered_response.json())
    assert filtered_revenue <= all_revenue


def test_quarterly_filter_by_category(client):
    response = client.get("/api/reports/quarterly?category=Sensors")
    assert response.status_code == 200
    assert isinstance(response.json(), list)


def test_quarterly_filter_by_month(client):
    response = client.get("/api/reports/quarterly?month=Q1-2025")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    if data:
        assert all(q["quarter"] == "Q1-2025" for q in data)


def test_quarterly_all_filters_combined(client):
    response = client.get("/api/reports/quarterly?warehouse=London&category=Sensors&month=Q2-2025")
    assert response.status_code == 200
    assert isinstance(response.json(), list)


def test_monthly_trends_returns_list(client):
    response = client.get("/api/reports/monthly-trends")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    assert len(data) > 0


def test_monthly_trends_item_structure(client):
    response = client.get("/api/reports/monthly-trends")
    m = response.json()[0]
    assert "month" in m
    assert "order_count" in m
    assert "revenue" in m
    assert "delivered_count" in m


def test_monthly_trends_sorted_by_month(client):
    response = client.get("/api/reports/monthly-trends")
    months = [m["month"] for m in response.json()]
    assert months == sorted(months)


def test_monthly_trends_month_format(client):
    response = client.get("/api/reports/monthly-trends")
    for m in response.json():
        assert len(m["month"]) == 7
        assert m["month"][4] == "-"


def test_monthly_trends_non_negative_values(client):
    response = client.get("/api/reports/monthly-trends")
    for m in response.json():
        assert m["order_count"] >= 0
        assert m["revenue"] >= 0
        assert m["delivered_count"] >= 0


def test_monthly_trends_filter_by_warehouse(client):
    all_response = client.get("/api/reports/monthly-trends")
    filtered_response = client.get("/api/reports/monthly-trends?warehouse=San Francisco")
    all_orders = sum(m["order_count"] for m in all_response.json())
    filtered_orders = sum(m["order_count"] for m in filtered_response.json())
    assert filtered_orders <= all_orders


def test_monthly_trends_filter_by_category(client):
    response = client.get("/api/reports/monthly-trends?category=Controllers")
    assert response.status_code == 200
    assert isinstance(response.json(), list)


def test_monthly_trends_all_filters_combined(client):
    response = client.get("/api/reports/monthly-trends?warehouse=Tokyo&category=Sensors")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
