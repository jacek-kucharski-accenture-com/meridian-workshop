# Technical Approach

**RFP reference:** §4.2 — How we will address each item in §3, including assumptions.

---

## R1 — Reports Module Remediation

We will begin the engagement with a full audit of the Reports module before writing a single line of fix code. Our approach:

1. **Audit** — Read the existing Vue components and FastAPI endpoints that serve the Reports page. Map every filter (Time Period, Warehouse, Category, Order Status) against the data flow documented in the handoff notes, and identify where query parameters are missing, mismatched, or ignored.
2. **Reproduce** — Run the application locally and manually trigger each known failure mode. Document each defect with the exact user action, expected behavior, and actual behavior.
3. **Remediate** — Fix defects in order of user impact. Wiring up broken filters is the first priority; i18n gaps and console errors follow.
4. **Verify** — Each fix is covered by a Playwright browser test before the PR is merged (see R3).

The previous vendor's handoff noted that "not all filters [are] wired up" — we treat that as a minimum floor, not a complete list. Our audit may surface additional issues; we will log and address everything we find within the fixed-fee scope.

**Assumption:** Meridian does not have a formal issue log for R1 defects. We will perform our own audit and treat our findings as the authoritative list.

---

## R2 — Restocking Recommendations View

We will build a new Restocking view accessible from the main navigation. The feature will:

- **Show stock levels** for each SKU across all three warehouses (San Francisco, London, Tokyo), drawn from the existing `/api/inventory` endpoint
- **Incorporate demand forecasts** from the existing `/api/demand` endpoint to project how long current stock will last
- **Accept a budget ceiling** as operator input — a numeric field the user sets before generating recommendations
- **Generate purchase order recommendations** — a ranked list of SKUs to reorder, with suggested quantity and estimated cost, constrained to the supplied budget
- **Allow filtering** by warehouse and category, consistent with the existing filter system

The data layer is JSON files served via FastAPI (no database). Restocking logic will run server-side in a new `/api/restocking` endpoint that computes recommendations from the existing data. No schema migrations or database changes are required.

We will build this feature in Plan Mode (outlining the component structure before writing code) and offer the option of a dedicated Vue subagent for the frontend work if the component surface becomes substantial.

**Assumption:** Restocking recommendations are advisory — the view suggests orders, operators act on them outside the system. No purchase order submission or external system integration is in scope.

---

## R3 — Automated Browser Testing

We will use **Playwright** to establish end-to-end browser test coverage. Tests run against the live local application (localhost:3000) and cover the flows Meridian IT needs to approve changes safely.

**Flows in scope (vendor's judgement per Meridian's response):**

| Flow | What it verifies |
|---|---|
| Dashboard loads | Summary cards display, no console errors |
| Inventory filter | Warehouse and category filters return correct results |
| Orders filter | All four filters (time, warehouse, category, status) apply correctly |
| Reports page | All filters wire up and return data; no broken states |
| Restocking view | Budget input accepted; recommendations list renders |

Tests will be written as we build — not retrofitted at the end. Each R1 fix and the R2 build will ship with corresponding test coverage. This is the precondition IT requires to approve future changes, so we treat it as load-bearing, not optional.

**Assumption:** Critical flows are the main dashboard, inventory, orders, and reports views. Restocking tests are added as part of R2 delivery.

---

## R4 — Architecture Documentation

We will perform a current-state architecture review during Phase 0 (Week 1) and produce a visual overview suitable for handoff to Meridian IT. Deliverable: an HTML diagram at `proposal/architecture.html`, openable in any browser with no dependencies.

The document will cover:

- **Component map** — frontend views, API client, backend routes, data layer
- **Data flow** — how filters propagate from the Vue UI through `api.js` to FastAPI and back
- **Known gaps** — Options API components not yet migrated to Composition API, modules with incomplete i18n, areas with no test coverage at baseline
- **Port and runtime reference** — frontend (3000), backend (8001), startup commands

This gives Meridian IT a handoff artifact they don't currently have, and it grounds the rest of our delivery work in a shared understanding of the system.

---

## D1 — UI Modernization

We will refresh the visual design using **Tailwind UI conventions** as the reference system — clean utility-class composition, consistent spacing scale, accessible color contrast. This is an evolutionary refresh, not a redesign: the layout and navigation structure stay the same; typography, spacing, and component styling are updated.

Scope covers the components touched during R1 and R2 delivery. A full-application restyle is available as an expanded add-on (see Pricing).

---

## D2 — Internationalization

The application already has partial i18n infrastructure. We will extend it to the remaining modules, with priority on views used by the Tokyo warehouse team. All user-facing strings will be externalized to locale files; Japanese translations will be provided for the Tokyo-priority views. Other languages are available on request.

---

## D3 — Dark Mode

We will implement an operator-selectable theme using CSS custom properties. A toggle in the application header persists the user's preference to `localStorage`. Dark mode targets the warehouse floor use case: high-contrast, reduced-glare palette that remains readable in low-light environments.

We recommend prototyping this on a separate branch to avoid any risk to the main codebase during development.

---

## Assumptions Summary

| # | Assumption |
|---|---|
| A1 | No formal issue log exists for R1 defects — we audit ourselves |
| A2 | UI modernization (D1) uses Tailwind UI conventions as the reference design system |
| A3 | Budget not-to-exceed is $100K; desired items (D1–D3) are included as add-ons within that envelope |
| A4 | R3 critical flows are: dashboard, inventory, orders, reports, and restocking (added at R2 delivery) |
| A5 | Restocking (R2) is advisory only — no external system integration or PO submission in scope |
| A6 | No database migration required — data layer remains JSON files served by FastAPI |
| A7 | Deployment process is out of scope — we deliver to the development environment |
