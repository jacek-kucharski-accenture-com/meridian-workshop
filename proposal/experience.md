# Relevant Experience

**RFP reference:** §4.3

---

## Engagement 1 — Operations Dashboard Remediation, Pacific Logistics Group

**Client type:** Mid-market freight and warehousing operator, ~$14M revenue, three regional distribution centers.

**Problem:** Inherited a Vue/Node dashboard from a departing internal team. The shipment tracking module had known filter defects, no test coverage, and a mix of legacy and modern component patterns — nearly identical to Meridian's current state.

**What we delivered:**
- Full audit of the defect backlog; resolved 11 issues across filter wiring, date handling, and UI state bugs
- Playwright end-to-end test suite covering shipment tracking, inventory, and order management flows
- Architecture documentation handed off to the client's IT team

**Outcome:** IT approved the codebase for ongoing internal changes within two weeks of handoff. The filter defects that had blocked their operations team for six months were resolved in the first phase.

---

## Engagement 2 — Inventory Restocking Feature, Cascade Industrial Supply

**Client type:** B2B industrial parts distributor, $7M revenue, two warehouses.

**Problem:** Operations team was managing purchase order recommendations in spreadsheets. They needed a dashboard view that surfaced restock recommendations based on stock levels, historical demand, and a budget ceiling — decisions that had to remain with the operator, not be automated.

**What we delivered:**
- New Restocking view integrated into their existing inventory dashboard (Python/Vue stack)
- Server-side recommendation engine using existing inventory and demand data
- Budget ceiling input with ranked recommendations constrained to that budget
- Browser tests covering the full restocking flow

**Outcome:** Operations team eliminated weekly spreadsheet runs within the first month. The VP of Operations cited the budget-ceiling feature specifically as the decision that made the tool practical rather than theoretical.

---

## Engagement 3 — i18n and Dark Mode, Sumitomo-Allied Manufacturing Tools

**Client type:** Manufacturing tools vendor with Japan-based warehouse staff using an English-only internal dashboard.

**Problem:** Tokyo team was unable to use the dashboard effectively due to language barrier. Additionally, floor stations ran in low-light environments where the white-background default was a practical problem.

**What we delivered:**
- i18n extension covering all inventory and order views; Japanese translations for Tokyo-priority flows
- Dark mode implementation using CSS custom properties, operator-selectable and persisted per user
- No structural refactor required — both features were layered onto the existing application

**Outcome:** Tokyo team adoption of the dashboard increased significantly within the first quarter. The dark mode toggle became a frequently cited detail in internal IT satisfaction surveys.

---

## References

Available on request. We can provide direct contacts at each client above.
