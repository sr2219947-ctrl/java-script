// ==============================
//  TAX CALCULATOR — FIRST.JS
//  India FY 2024-25
// ==============================

// Show/hide deductions field based on regime
document.getElementById('regime').addEventListener('change', function () {
  const deductionGroup = document.getElementById('deductionGroup');
  deductionGroup.style.display = this.value === 'old' ? 'block' : 'none';
});

// Format number as Indian currency string
function formatINR(amount) {
  if (amount === 0) return '₹0';
  return '₹' + amount.toLocaleString('en-IN');
}

// ---- NEW REGIME SLABS (FY 2024-25) ----
// Standard deduction ₹75,000 applicable
// Rebate u/s 87A: full tax rebate if taxable income ≤ ₹7,00,000
const NEW_SLABS = [
  { min: 0,        max: 300000,  rate: 0   },
  { min: 300000,   max: 600000,  rate: 5   },
  { min: 600000,   max: 900000,  rate: 10  },
  { min: 900000,   max: 1200000, rate: 15  },
  { min: 1200000,  max: 1500000, rate: 20  },
  { min: 1500000,  max: Infinity, rate: 30 },
];

// ---- OLD REGIME SLABS ----
// Standard deduction ₹50,000 + user-provided deductions
// Rebate u/s 87A: full tax rebate if taxable income ≤ ₹5,00,000
const OLD_SLABS = [
  { min: 0,        max: 250000,  rate: 0   },
  { min: 250000,   max: 500000,  rate: 5   },
  { min: 500000,   max: 1000000, rate: 20  },
  { min: 1000000,  max: Infinity, rate: 30 },
];

/**
 * Calculate tax from income using given slabs.
 * Returns { tax, breakdown: [{range, rate, taxable, taxOnSlab}] }
 */
function computeSlabTax(taxableIncome, slabs) {
  let tax = 0;
  const breakdown = [];

  for (const slab of slabs) {
    if (taxableIncome <= slab.min) break;

    const slabMax    = Math.min(taxableIncome, slab.max);
    const slabIncome = slabMax - slab.min;
    const taxOnSlab  = (slabIncome * slab.rate) / 100;

    tax += taxOnSlab;
    breakdown.push({
      range:      `₹${(slab.min / 100000).toFixed(slab.min % 100000 === 0 ? 0 : 1)}L – ${slab.max === Infinity ? 'Above' : '₹' + (slab.max / 100000).toFixed(slab.max % 100000 === 0 ? 0 : 1) + 'L'}`,
      rate:       slab.rate,
      taxable:    slabIncome,
      taxOnSlab:  taxOnSlab
    });
  }

  return { tax, breakdown };
}

/**
 * Surcharge applicable on income tax (for very high incomes).
 */
function getSurcharge(tax, income, regime) {
  if (income > 50000000)       return tax * 0.25; // 25% surcharge
  if (income > 20000000)       return tax * 0.25;
  if (income > 10000000)       return tax * 0.15;
  if (income > 5000000 && regime === 'old') return tax * 0.10;
  return 0;
}

// ---- MAIN CALCULATE FUNCTION ----
function calculateTax() {
  const incomeRaw     = parseFloat(document.getElementById('income').value) || 0;
  const regime        = document.getElementById('regime').value;
  const deductionsRaw = parseFloat(document.getElementById('deductions').value) || 0;

  if (incomeRaw <= 0) {
    alert('Please enter a valid annual income.');
    return;
  }

  let taxableIncome = incomeRaw;
  let slabs;

  if (regime === 'new') {
    // Standard deduction ₹75,000 for salaried (New Regime)
    taxableIncome = Math.max(0, incomeRaw - 75000);
    slabs = NEW_SLABS;
  } else {
    // Standard deduction ₹50,000 + additional deductions (Old Regime)
    const totalDeductions = 50000 + deductionsRaw;
    taxableIncome = Math.max(0, incomeRaw - totalDeductions);
    slabs = OLD_SLABS;
  }

  const { tax, breakdown } = computeSlabTax(taxableIncome, slabs);

  // Rebate u/s 87A
  let taxAfterRebate = tax;
  if (regime === 'new' && taxableIncome <= 700000) {
    taxAfterRebate = 0; // Full rebate
  } else if (regime === 'old' && taxableIncome <= 500000) {
    taxAfterRebate = 0;
  }

  // Surcharge
  const surcharge = getSurcharge(taxAfterRebate, incomeRaw, regime);
  const taxWithSurcharge = taxAfterRebate + surcharge;

  // Health & Education Cess @ 4%
  const cess  = taxWithSurcharge * 0.04;
  const total = taxWithSurcharge + cess;

  // Effective rate
  const effectiveRate = incomeRaw > 0 ? ((total / incomeRaw) * 100).toFixed(2) : '0.00';

  // ---- Render Results ----
  document.getElementById('resIncome').textContent  = formatINR(incomeRaw);
  document.getElementById('resTaxable').textContent = formatINR(taxableIncome);
  document.getElementById('resTax').textContent     = formatINR(Math.round(taxAfterRebate));
  document.getElementById('resCess').textContent    = formatINR(Math.round(cess));
  document.getElementById('resTotal').textContent   = formatINR(Math.round(total));
  document.getElementById('resRate').textContent    = effectiveRate + '%';

  // ---- Slab Breakdown ----
  const slabContainer = document.getElementById('slabBreakdown');
  slabContainer.innerHTML = '';

  breakdown.forEach(row => {
    const div = document.createElement('div');
    div.className = 'slab-row';
    div.innerHTML = `
      <span class="slab-range">${row.range}</span>
      <span class="slab-rate">${row.rate}%</span>
      <span class="slab-amount ${row.taxOnSlab === 0 ? 'zero' : ''}">
        ${row.taxOnSlab === 0 ? 'Nil' : formatINR(Math.round(row.taxOnSlab))}
      </span>
    `;
    slabContainer.appendChild(div);
  });

  // Add rebate note if applicable
  if (taxAfterRebate === 0 && tax > 0) {
    const rebateNote = document.createElement('div');
    rebateNote.className = 'slab-row';
    rebateNote.innerHTML = `
      <span class="slab-range" style="color:var(--accent)">Rebate u/s 87A</span>
      <span class="slab-rate" style="color:var(--accent)">—</span>
      <span class="slab-amount" style="color:var(--accent)">−${formatINR(Math.round(tax))}</span>
    `;
    slabContainer.appendChild(rebateNote);
  }

  // Show result card
  const resultCard = document.getElementById('resultCard');
  resultCard.classList.add('visible');
  resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
