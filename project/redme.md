# 🧾 Tax Calculator — FY 2024–25 (India)

A clean, interactive income tax calculator for Indian taxpayers supporting both the **New Tax Regime** and the **Old Tax Regime** for Financial Year 2024–25.

---

## 📁 Project Structure

```
project/
├── index.html    → Main HTML page (structure & layout)
├── style.css     → Styling (dark theme, grid, responsive)
├── first.js      → Tax logic, slab computation, DOM rendering
└── readme.md     → This file
```

---

## 🚀 How to Run

1. Open the `project/` folder in VS Code.
2. Right-click `index.html` → **Open with Live Server** (or open directly in a browser).
3. No build step or dependencies needed — pure HTML, CSS, JS.

---

## ✨ Features

| Feature | Details |
|---|---|
| **New Regime** | FY 2024–25 slabs with ₹75,000 standard deduction |
| **Old Regime** | Classic slabs with ₹50,000 std. deduction + custom deductions |
| **Rebate u/s 87A** | Auto-applied (₹7L for New, ₹5L for Old) |
| **Cess** | 4% Health & Education Cess auto-calculated |
| **Surcharge** | Applied for incomes above ₹50L |
| **Slab Breakdown** | Per-slab tax amount displayed clearly |
| **Effective Rate** | Shows what % of income goes to tax |
| **Responsive** | Works on mobile and desktop |

---

## 🏦 Tax Slabs Used

### New Regime (FY 2024–25)
| Income Range | Rate |
|---|---|
| Up to ₹3,00,000 | Nil |
| ₹3,00,001 – ₹6,00,000 | 5% |
| ₹6,00,001 – ₹9,00,000 | 10% |
| ₹9,00,001 – ₹12,00,000 | 15% |
| ₹12,00,001 – ₹15,00,000 | 20% |
| Above ₹15,00,000 | 30% |

> Standard Deduction: ₹75,000 | Rebate 87A: Income ≤ ₹7,00,000 → Zero tax

### Old Regime
| Income Range | Rate |
|---|---|
| Up to ₹2,50,000 | Nil |
| ₹2,50,001 – ₹5,00,000 | 5% |
| ₹5,00,001 – ₹10,00,000 | 20% |
| Above ₹10,00,000 | 30% |

> Standard Deduction: ₹50,000 | Rebate 87A: Taxable income ≤ ₹5,00,000 → Zero tax

---

## 🛠 Technologies Used

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, grid, animations, dark theme
- **Vanilla JavaScript** — Tax logic, DOM manipulation
- **Google Fonts** — Syne (display) + DM Mono (numbers)

---

## 📌 Notes

- This calculator is for **salaried individuals** (basic income tax computation).
- Capital gains, business income, and special rate incomes are not covered.
- Always consult a Chartered Accountant (CA) for professional tax filing advice.

---

## 👨‍💻 Author

Built as part of the JavaScript Projects series.
