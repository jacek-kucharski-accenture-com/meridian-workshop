# Timeline — Phased Delivery Plan

**RFP reference:** §4.4

Total engagement: **8 weeks** from contract start.

---

## Phase 0 — Orientation (Week 1)

**Goal:** Running system, architecture understood, no guessing about scope.

| Task | Deliverable |
|---|---|
| Stand up local environment | Both servers running, team confirmed |
| Architecture review | `proposal/architecture.html` — current-state diagram |
| Reports module audit | Written defect log (input to Phase 1) |
| Baseline Playwright setup | Test harness configured, smoke test passing |

**Meridian checkpoint:** Architecture doc reviewed by IT. Defect log reviewed by operations team before Phase 1 begins.

---

## Phase 1 — Remediation + Test Foundation (Weeks 2–3)

**Goal:** Reports module is fixed and tested. IT has a safe baseline to work from.

| Task | Deliverable |
|---|---|
| R1: Fix all Reports defects | Working Reports page — all filters functional, i18n gaps closed, console clean |
| R3: Test coverage for Reports | Playwright tests covering all Reports filter flows |
| R3: Test coverage for existing views | Dashboard, Inventory, Orders browser tests passing |

**Meridian checkpoint:** End of Week 3 demo. Operations team validates Reports behavior. IT reviews test suite.

---

## Phase 2 — Restocking Build (Weeks 4–6)

**Goal:** The feature R. Tanaka's team has been waiting for is live and tested.

| Task | Deliverable |
|---|---|
| R2: `/api/restocking` backend endpoint | Server-side recommendation logic, budget-constrained |
| R2: Restocking Vue view | New page in navigation — filters, budget input, recommendations list |
| R3: Restocking test coverage | Playwright tests for the new view |
| R4: Architecture doc updated | Reflects new endpoint and view |

**Meridian checkpoint:** End of Week 6 demo. Operations team validates Restocking behavior against real stock and demand data.

---

## Phase 3 — Desired Items + Handoff (Weeks 7–8)

**Goal:** Desired items delivered (budget permitting); system ready for Meridian IT to own.

| Task | Deliverable |
|---|---|
| D1: UI modernization | Refreshed visual design across updated views |
| D2: i18n extension | Japanese translations for Tokyo-priority views |
| D3: Dark mode | Operator-selectable theme, persisted to localStorage |
| Final test run | Full Playwright suite passing against production-equivalent build |
| Handoff session | Walk Meridian IT through architecture doc, test suite, and deployment |

**Note:** D1–D3 are add-ons within the $100K envelope. If Phase 2 runs over, we will agree with Meridian which desired items to include vs. defer before Phase 3 begins.

---

## Summary

| Phase | Weeks | Key deliverable |
|---|---|---|
| 0 — Orientation | 1 | Architecture doc, defect log |
| 1 — Remediation | 2–3 | Fixed Reports + test foundation |
| 2 — Restocking | 4–6 | New Restocking view + tests |
| 3 — Desired + Handoff | 7–8 | D1–D3 + final handoff |

Meridian sees working software at the end of every phase — not a single delivery at week 8.
