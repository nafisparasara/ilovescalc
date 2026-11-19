(function() {
  'use strict';

  const ICONS = {
    finance: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M3 10h18"/><path d="M5 6l7-3 7 3"/><path d="M4 10v11"/><path d="M20 10v11"/></svg>`,
    health: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    math: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="12" y1="10" x2="12" y2="18"/><line x1="8" y1="14" x2="16" y2="14"/></svg>`,
    conv: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
    util: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    sun: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    moon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`
  };

  const fmtCurr = (num) => {
    if (!isFinite(num) || isNaN(num)) return '₹0';
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Math.round(num));
  };
  const fmtDec = (num, digits = 2) => {
    if (!isFinite(num) || isNaN(num)) return '0.00';
    return new Intl.NumberFormat('en-IN', { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(num);
  };

  /* ==========================================================================
     37 PRODUCTION-READY CALCULATORS WITH RICH SEO CONTENT
     ========================================================================== */
  const CALCULATORS = [
    /* --- FINANCE (12) --- */
    {
      id: 'emi-calc', title: 'Loan EMI Calculator', shortTitle: 'Loan EMI', category: 'Finance', icon: ICONS.finance,
      keywords: ['emi', 'loan', 'mortgage', 'home loan', 'bank', 'interest'],
      subtitle: 'Calculate monthly loan installments, total interest payable, and total repayment.',
      inputs: [
        { id: 'principal', label: 'Loan Amount', type: 'number', prefix: '₹', default: 2000000, min: 1000, max: 100000000, step: 10000 },
        { id: 'rate', label: 'Interest Rate (p.a.)', type: 'number', suffix: '%', default: 8.5, min: 0.1, max: 35, step: 0.1 },
        { id: 'tenureUnit', label: 'Tenure Unit', type: 'segment', default: 'years', options: [{ value: 'years', label: 'Years' }, { value: 'months', label: 'Months' }] },
        { id: 'tenure', label: 'Tenure Length', type: 'number', default: 20, min: 1, max: 480, step: 1 }
      ],
      compute: (v) => {
        const P = Math.max(0, Number(v.principal) || 0);
        const rAnn = Math.max(0, Number(v.rate) || 0);
        const rawT = Math.max(1, Number(v.tenure) || 1);
        const N = v.tenureUnit === 'years' ? rawT * 12 : rawT;
        const R = rAnn / 12 / 100;
        let emi = R === 0 ? P / N : (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        const totalPay = emi * N;
        const totalInt = Math.max(0, totalPay - P);
        return {
          primaryLabel: 'Monthly EMI', primaryValue: fmtCurr(emi),
          copy: `Monthly EMI: ${fmtCurr(emi)} | Total Interest: ${fmtCurr(totalInt)} | Total Payment: ${fmtCurr(totalPay)}`,
          summary: `${fmtCurr(P)} @ ${rAnn}% for ${rawT} ${v.tenureUnit}`,
          breakdown: [{ label: 'Principal Amount', value: fmtCurr(P) }, { label: 'Total Interest', value: fmtCurr(totalInt) }, { label: 'Total Payment', value: fmtCurr(totalPay) }]
        };
      },
      seo: {
        heading: 'How Loan EMI is Calculated on iLoveCalc',
        desc: 'An Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both interest and principal each month so that over a specified number of years, the loan is paid off in full.',
        formula: 'EMI = [P × R × (1 + R)^N] / [(1 + R)^N - 1]',
        tips: ['Making partial prepayments early in your loan tenure drastically cuts total interest outgo.', 'A higher down payment lowers your principal P and reduces monthly EMI burden.']
      }
    },
    {
      id: 'sip-calc', title: 'SIP Mutual Fund Calculator', shortTitle: 'SIP Growth', category: 'Finance', icon: ICONS.finance,
      keywords: ['sip', 'mutual fund', 'investment', 'wealth', 'compounding'],
      subtitle: 'Estimate future wealth creation through systematic monthly mutual fund investments.',
      inputs: [
        { id: 'monthly', label: 'Monthly Investment', type: 'number', prefix: '₹', default: 10000, min: 500, max: 1000000, step: 500 },
        { id: 'rate', label: 'Expected Annual Return', type: 'number', suffix: '%', default: 12, min: 1, max: 30, step: 0.5 },
        { id: 'years', label: 'Investment Period', type: 'number', suffix: 'Years', default: 15, min: 1, max: 40, step: 1 }
      ],
      compute: (v) => {
        const P = Math.max(0, Number(v.monthly) || 0);
        const i = Math.max(0, Number(v.rate) || 0) / 100 / 12;
        const n = Math.max(1, Number(v.years) || 1) * 12;
        const maturity = i === 0 ? P * n : P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
        const invested = P * n;
        const gains = Math.max(0, maturity - invested);
        return {
          primaryLabel: 'Estimated Maturity Value', primaryValue: fmtCurr(maturity),
          copy: `Invested: ${fmtCurr(invested)} | Wealth Gain: ${fmtCurr(gains)} | Total: ${fmtCurr(maturity)}`,
          summary: `${fmtCurr(P)}/mo for ${v.years} yrs @ ${v.rate}%`,
          breakdown: [{ label: 'Total Invested', value: fmtCurr(invested) }, { label: 'Wealth Gain', value: fmtCurr(gains) }, { label: 'Corpus', value: fmtCurr(maturity) }]
        };
      },
      seo: {
        heading: 'Systematic Investment Plan (SIP) Compounding',
        desc: 'A Systematic Investment Plan allows you to invest a fixed amount regularly in mutual funds, benefiting from rupee-cost averaging and long-term exponential compounding.',
        formula: 'FV = P × [({1 + i}^n - 1) / i] × (1 + i)',
        tips: ['Starting 5 years earlier can nearly double your final retirement corpus.', 'SIP returns are market-linked and compound monthly.']
      }
    },
    {
      id: 'ci-calc', title: 'Compound Interest Calculator', shortTitle: 'Compound Interest', category: 'Finance', icon: ICONS.finance,
      keywords: ['compound interest', 'ci', 'growth', 'deposit'],
      subtitle: 'Calculate lump sum compounding growth over time.',
      inputs: [
        { id: 'principal', label: 'Initial Principal', type: 'number', prefix: '₹', default: 100000, min: 1000, max: 10000000, step: 5000 },
        { id: 'rate', label: 'Annual Interest Rate', type: 'number', suffix: '%', default: 7.5, min: 0.1, max: 30, step: 0.1 },
        { id: 'years', label: 'Time Period', type: 'number', suffix: 'Years', default: 10, min: 1, max: 50, step: 1 }
      ],
      compute: (v) => {
        const P = Math.max(0, Number(v.principal) || 0);
        const r = Math.max(0, Number(v.rate) || 0) / 100;
        const t = Math.max(1, Number(v.years) || 1);
        const A = P * Math.pow(1 + r, t);
        const interest = Math.max(0, A - P);
        return {
          primaryLabel: 'Maturity Amount', primaryValue: fmtCurr(A),
          copy: `Principal: ${fmtCurr(P)} | Interest: ${fmtCurr(interest)} | Total: ${fmtCurr(A)}`,
          summary: `${fmtCurr(P)} @ ${v.rate}% for ${t} yrs`,
          breakdown: [{ label: 'Principal', value: fmtCurr(P) }, { label: 'Interest', value: fmtCurr(interest) }, { label: 'Total', value: fmtCurr(A) }]
        };
      },
      seo: { heading: 'Compound Interest Formula', desc: 'Calculates interest earned on both initial principal and previously accumulated interest.', formula: 'A = P × (1 + r)^t' }
    },
    {
      id: 'simple-interest-calc', title: 'Simple Interest Calculator', shortTitle: 'Simple Interest', category: 'Finance', icon: ICONS.finance,
      keywords: ['simple interest', 'si', 'loan', 'interest'],
      subtitle: 'Calculate straightforward simple interest on principal without compounding.',
      inputs: [
        { id: 'principal', label: 'Principal Amount', type: 'number', prefix: '₹', default: 50000, min: 100, max: 10000000, step: 1000 },
        { id: 'rate', label: 'Annual Rate', type: 'number', suffix: '%', default: 8, min: 0.1, max: 50, step: 0.1 },
        { id: 'years', label: 'Time Period', type: 'number', suffix: 'Years', default: 3, min: 0.1, max: 50, step: 0.5 }
      ],
      compute: (v) => {
        const P = Math.max(0, Number(v.principal) || 0);
        const R = Math.max(0, Number(v.rate) || 0);
        const T = Math.max(0, Number(v.years) || 0);
        const si = (P * R * T) / 100;
        const total = P + si;
        return {
          primaryLabel: 'Total Simple Interest', primaryValue: fmtCurr(si),
          copy: `Principal: ${fmtCurr(P)} | Simple Interest: ${fmtCurr(si)} | Total Amount: ${fmtCurr(total)}`,
          summary: `${fmtCurr(P)} @ ${R}% for ${T} yrs`,
          breakdown: [{ label: 'Principal', value: fmtCurr(P) }, { label: 'Simple Interest', value: fmtCurr(si) }, { label: 'Total Payable', value: fmtCurr(total) }]
        };
      },
      seo: { heading: 'Simple Interest Formula', desc: 'Simple interest is calculated solely on the original principal amount.', formula: 'SI = (P × R × T) / 100' }
    },
    {
      id: 'gst-calc', title: 'GST & Tax Calculator', shortTitle: 'GST & Tax', category: 'Finance', icon: ICONS.finance,
      keywords: ['gst', 'tax', 'vat', 'cgst', 'sgst', 'invoice'],
      subtitle: 'Compute GST inclusive/exclusive values and split CGST/SGST.',
      inputs: [
        { id: 'mode', label: 'Mode', type: 'segment', default: 'exclusive', options: [{ value: 'exclusive', label: '+ Add GST' }, { value: 'inclusive', label: '- Remove GST' }] },
        { id: 'amount', label: 'Base Amount', type: 'number', prefix: '₹', default: 15000, min: 0, max: 10000000, step: 100 },
        { id: 'rate', label: 'GST Rate', type: 'segment', default: '18', options: [{ value: '5', label: '5%' }, { value: '12', label: '12%' }, { value: '18', label: '18%' }, { value: '28', label: '28%' }] }
      ],
      compute: (v) => {
        const raw = Math.max(0, Number(v.amount) || 0);
        const rate = Math.max(0, Number(v.rate) || 0);
        let net = 0, gst = 0, gross = 0;
        if (v.mode === 'exclusive') {
          net = raw; gst = net * (rate / 100); gross = net + gst;
        } else {
          gross = raw; net = gross / (1 + rate / 100); gst = gross - net;
        }
        return {
          primaryLabel: v.mode === 'exclusive' ? 'Gross Total' : 'Net Amount',
          primaryValue: fmtCurr(v.mode === 'exclusive' ? gross : net),
          copy: `Net: ${fmtCurr(net)} | GST (${rate}%): ${fmtCurr(gst)} | Gross: ${fmtCurr(gross)}`,
          summary: `${fmtCurr(raw)} @ ${rate}% GST`,
          breakdown: [{ label: 'Net Amount', value: fmtCurr(net) }, { label: `CGST (${rate/2}%)`, value: fmtCurr(gst/2) }, { label: `SGST (${rate/2}%)`, value: fmtCurr(gst/2) }, { label: 'Gross Total', value: fmtCurr(gross) }]
        };
      },
      seo: { heading: 'Goods & Services Tax (GST) Calculation', desc: 'Instantly calculate GST inclusive or exclusive invoice amounts along with equal CGST and SGST splits.', formula: 'Gross = Net × (1 + Rate/100)' }
    },
    {
      id: 'fd-calc', title: 'Fixed Deposit (FD) Calculator', shortTitle: 'Fixed Deposit', category: 'Finance', icon: ICONS.finance,
      keywords: ['fd', 'fixed deposit', 'bank'],
      subtitle: 'Calculate FD maturity value with quarterly compounding.',
      inputs: [
        { id: 'principal', label: 'Deposit Amount', type: 'number', prefix: '₹', default: 200000, min: 1000, max: 10000000, step: 5000 },
        { id: 'rate', label: 'Interest Rate (p.a.)', type: 'number', suffix: '%', default: 6.8, min: 0.1, max: 20, step: 0.1 },
        { id: 'years', label: 'Duration', type: 'number', suffix: 'Years', default: 5, min: 0.1, max: 30, step: 0.5 }
      ],
      compute: (v) => {
        const P = Math.max(0, Number(v.principal) || 0);
        const r = Math.max(0, Number(v.rate) || 0) / 100;
        const t = Math.max(0, Number(v.years) || 0);
        const A = P * Math.pow(1 + r / 4, 4 * t);
        const interest = Math.max(0, A - P);
        return {
          primaryLabel: 'Maturity Amount', primaryValue: fmtCurr(A),
          copy: `Principal: ${fmtCurr(P)} | Interest: ${fmtCurr(interest)} | Maturity: ${fmtCurr(A)}`,
          summary: `${fmtCurr(P)} @ ${v.rate}% for ${t} yrs`,
          breakdown: [{ label: 'Principal', value: fmtCurr(P) }, { label: 'Interest Earned', value: fmtCurr(interest) }, { label: 'Total Maturity', value: fmtCurr(A) }]
        };
      },
      seo: { heading: 'FD Quarterly Compounding', desc: 'Bank fixed deposits typically compound interest every quarter.', formula: 'A = P × (1 + r/4)^(4t)' }
    },
    {
      id: 'rd-calc', title: 'Recurring Deposit (RD) Calculator', shortTitle: 'Recurring Deposit', category: 'Finance', icon: ICONS.finance,
      keywords: ['rd', 'recurring deposit', 'monthly savings'],
      subtitle: 'Calculate maturity returns on monthly Recurring Deposits.',
      inputs: [
        { id: 'monthly', label: 'Monthly Deposit', type: 'number', prefix: '₹', default: 5000, min: 500, max: 500000, step: 500 },
        { id: 'rate', label: 'Interest Rate (p.a.)', type: 'number', suffix: '%', default: 6.5, min: 1, max: 15, step: 0.1 },
        { id: 'months', label: 'Tenure', type: 'number', suffix: 'Months', default: 36, min: 6, max: 120, step: 6 }
      ],
      compute: (v) => {
        const P = Math.max(0, Number(v.monthly) || 0);
        const r = Math.max(0, Number(v.rate) || 0) / 100;
        const n = Math.max(1, Number(v.months) || 12);
        let maturity = 0;
        for (let m = 0; m < n; m++) {
          const remMonths = n - m;
          maturity += P * Math.pow(1 + r / 4, 4 * (remMonths / 12));
        }
        const invested = P * n;
        const interest = Math.max(0, maturity - invested);
        return {
          primaryLabel: 'RD Maturity Value', primaryValue: fmtCurr(maturity),
          copy: `Deposited: ${fmtCurr(invested)} | Interest: ${fmtCurr(interest)} | Maturity: ${fmtCurr(maturity)}`,
          summary: `${fmtCurr(P)}/mo for ${n} mos`,
          breakdown: [{ label: 'Total Deposited', value: fmtCurr(invested) }, { label: 'Interest Earned', value: fmtCurr(interest) }, { label: 'Maturity Amount', value: fmtCurr(maturity) }]
        };
      },
      seo: { heading: 'Recurring Deposit Formula', desc: 'Each monthly installment compounds quarterly for the remaining duration.', formula: 'Quarterly compounding per installment' }
    },
    {
      id: 'ppf-calc', title: 'PPF Calculator', shortTitle: 'PPF Returns', category: 'Finance', icon: ICONS.finance,
      keywords: ['ppf', 'provident fund', 'tax saving'],
      subtitle: 'Estimate 15-year tax-free PPF corpus and interest earnings.',
      inputs: [
        { id: 'yearly', label: 'Annual Deposit', type: 'number', prefix: '₹', default: 150000, min: 500, max: 150000, step: 1000 },
        { id: 'rate', label: 'Interest Rate', type: 'number', suffix: '%', default: 7.1, min: 5, max: 12, step: 0.1 },
        { id: 'years', label: 'Time Period', type: 'number', suffix: 'Years', default: 15, min: 15, max: 40, step: 1 }
      ],
      compute: (v) => {
        const P = Math.max(0, Number(v.yearly) || 0);
        const r = Math.max(0, Number(v.rate) || 0) / 100;
        const t = Math.max(15, Number(v.years) || 15);
        let balance = 0, invested = 0;
        for (let y = 1; y <= t; y++) {
          balance += P; balance += balance * r; invested += P;
        }
        const interest = Math.max(0, balance - invested);
        return {
          primaryLabel: 'PPF Maturity Corpus', primaryValue: fmtCurr(balance),
          copy: `Invested: ${fmtCurr(invested)} | Interest: ${fmtCurr(interest)} | Total: ${fmtCurr(balance)}`,
          summary: `${fmtCurr(P)}/yr for ${t} yrs`,
          breakdown: [{ label: 'Invested', value: fmtCurr(invested) }, { label: 'Interest', value: fmtCurr(interest) }, { label: 'Total', value: fmtCurr(balance) }]
        };
      },
      seo: { heading: 'Public Provident Fund (PPF)', desc: '15-year government savings scheme compounded annually.', formula: 'A = P × [{(1+r)^n - 1} / r]' }
    },
    {
      id: 'salary-calc', title: 'Salary Take-Home Calculator', shortTitle: 'Salary Take-Home', category: 'Finance', icon: ICONS.finance,
      keywords: ['salary', 'take home', 'net pay', 'tax', 'ctc'],
      subtitle: 'Estimate net take-home salary after taxes & deductions.',
      inputs: [
        { id: 'ctc', label: 'Annual CTC', type: 'number', prefix: '₹', default: 1200000, min: 100000, max: 100000000, step: 25000 },
        { id: 'taxRate', label: 'Estimated Tax & Deductions', type: 'number', suffix: '%', default: 15, min: 0, max: 40, step: 1 }
      ],
      compute: (v) => {
        const ctc = Math.max(0, Number(v.ctc) || 0);
        const taxPct = Math.max(0, Number(v.taxRate) || 0) / 100;
        const tax = ctc * taxPct;
        const netAnn = ctc - tax;
        const netMo = netAnn / 12;
        return {
          primaryLabel: 'Monthly Take-Home', primaryValue: fmtCurr(netMo),
          copy: `CTC: ${fmtCurr(ctc)} | Deductions: ${fmtCurr(tax)} | Monthly Net: ${fmtCurr(netMo)}`,
          summary: `${fmtCurr(ctc)} CTC @ ${v.taxRate}% deduction`,
          breakdown: [{ label: 'Annual CTC', value: fmtCurr(ctc) }, { label: 'Annual Deductions', value: fmtCurr(tax) }, { label: 'Annual Net', value: fmtCurr(netAnn) }, { label: 'Monthly Take-Home', value: fmtCurr(netMo) }]
        };
      },
      seo: { heading: 'Net Salary Formula', desc: 'Calculates monthly take-home pay after income tax and statutory deductions.', formula: 'Monthly Net = (CTC - Deductions) / 12' }
    },
    {
      id: 'inflation-calc', title: 'Inflation Calculator', shortTitle: 'Inflation', category: 'Finance', icon: ICONS.finance,
      keywords: ['inflation', 'cost', 'purchasing power'],
      subtitle: 'Estimate how inflation increases future costs of goods & lifestyle.',
      inputs: [
        { id: 'amount', label: 'Current Cost', type: 'number', prefix: '₹', default: 500000, min: 1000, max: 100000000, step: 5000 },
        { id: 'rate', label: 'Inflation Rate', type: 'number', suffix: '%', default: 6, min: 1, max: 20, step: 0.1 },
        { id: 'years', label: 'Years', type: 'number', suffix: 'Years', default: 10, min: 1, max: 50, step: 1 }
      ],
      compute: (v) => {
        const P = Math.max(0, Number(v.amount) || 0);
        const r = Math.max(0, Number(v.rate) || 0) / 100;
        const t = Math.max(1, Number(v.years) || 1);
        const future = P * Math.pow(1 + r, t);
        return {
          primaryLabel: 'Future Cost', primaryValue: fmtCurr(future),
          copy: `Present: ${fmtCurr(P)} | Future Cost: ${fmtCurr(future)}`,
          summary: `${fmtCurr(P)} @ ${v.rate}% for ${t} yrs`,
          breakdown: [{ label: 'Present Cost', value: fmtCurr(P) }, { label: 'Future Cost', value: fmtCurr(future) }]
        };
      },
      seo: { heading: 'Inflation Impact', desc: 'Shows how inflation erodes purchasing power over time.', formula: 'Future = Present × (1 + Rate)^Years' }
    },
    {
      id: 'roi-calc', title: 'Return on Investment (ROI)', shortTitle: 'ROI', category: 'Finance', icon: ICONS.finance,
      keywords: ['roi', 'return', 'profit', 'gain'],
      subtitle: 'Measure the net profitability or percentage gain of an investment.',
      inputs: [
        { id: 'initial', label: 'Initial Investment', type: 'number', prefix: '₹', default: 100000, min: 100, max: 100000000, step: 1000 },
        { id: 'final', label: 'Final Return Value', type: 'number', prefix: '₹', default: 145000, min: 0, max: 100000000, step: 1000 }
      ],
      compute: (v) => {
        const init = Math.max(0, Number(v.initial) || 1);
        const fin = Math.max(0, Number(v.final) || 0);
        const profit = fin - init;
        const roi = (profit / init) * 100;
        return {
          primaryLabel: 'ROI Percentage', primaryValue: `${fmtDec(roi, 2)}%`,
          copy: `Initial: ${fmtCurr(init)} | Final: ${fmtCurr(fin)} | Profit: ${fmtCurr(profit)} | ROI: ${fmtDec(roi, 2)}%`,
          summary: `ROI ${fmtDec(roi, 2)}%`,
          breakdown: [{ label: 'Initial', value: fmtCurr(init) }, { label: 'Net Profit', value: fmtCurr(profit) }, { label: 'ROI %', value: `${fmtDec(roi, 2)}%` }]
        };
      },
      seo: { heading: 'ROI Formula', desc: 'Measures overall efficiency and profitability of an investment.', formula: 'ROI (%) = [(Final - Initial) / Initial] × 100' }
    },
    {
      id: 'car-loan-calc', title: 'Car Loan Calculator', shortTitle: 'Car Loan', category: 'Finance', icon: ICONS.finance,
      keywords: ['car loan', 'auto loan', 'vehicle'],
      subtitle: 'Calculate auto loan monthly repayment and interest.',
      inputs: [
        { id: 'price', label: 'Car Price', type: 'number', prefix: '₹', default: 1000000, min: 100000, max: 10000000, step: 10000 },
        { id: 'down', label: 'Down Payment', type: 'number', prefix: '₹', default: 200000, min: 0, max: 5000000, step: 10000 },
        { id: 'rate', label: 'Interest Rate', type: 'number', suffix: '%', default: 9.0, min: 1, max: 25, step: 0.1 },
        { id: 'years', label: 'Tenure', type: 'number', suffix: 'Years', default: 5, min: 1, max: 8, step: 1 }
      ],
      compute: (v) => {
        const price = Math.max(0, Number(v.price) || 0);
        const down = Math.min(price, Math.max(0, Number(v.down) || 0));
        const P = price - down;
        const R = Math.max(0, Number(v.rate) || 0) / 12 / 100;
        const N = Math.max(1, Number(v.years) || 1) * 12;
        const emi = R === 0 ? P / N : (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        const total = emi * N;
        return {
          primaryLabel: 'Monthly EMI', primaryValue: fmtCurr(emi),
          copy: `Loan: ${fmtCurr(P)} | EMI: ${fmtCurr(emi)} | Total: ${fmtCurr(total)}`,
          summary: `${fmtCurr(P)} loan @ ${v.rate}%`,
          breakdown: [{ label: 'Loan Financed', value: fmtCurr(P) }, { label: 'Monthly EMI', value: fmtCurr(emi) }, { label: 'Total Repayment', value: fmtCurr(total) }]
        };
      },
      seo: { heading: 'Car Loan EMI', desc: 'Computes auto loan monthly installments after down payment.', formula: 'Standard Loan Amortization' }
    },

    /* --- HEALTH & FITNESS (8) --- */
    {
      id: 'bmi-calc', title: 'BMI (Body Mass Index)', shortTitle: 'BMI Calculator', category: 'Health', icon: ICONS.health,
      keywords: ['bmi', 'body mass', 'weight', 'health', 'fitness'],
      subtitle: 'Check your Body Mass Index and WHO healthy weight category.',
      inputs: [
        { id: 'weight', label: 'Weight', type: 'number', suffix: 'kg', default: 70, min: 20, max: 300, step: 1 },
        { id: 'height', label: 'Height', type: 'number', suffix: 'cm', default: 175, min: 50, max: 250, step: 1 }
      ],
      compute: (v) => {
        const w = Math.max(1, Number(v.weight) || 0);
        const h = Math.max(1, Number(v.height) || 0) / 100;
        const bmi = w / (h * h);
        let cat = 'Normal weight';
        if (bmi < 18.5) cat = 'Underweight';
        else if (bmi >= 25 && bmi < 30) cat = 'Overweight';
        else if (bmi >= 30) cat = 'Obese';
        const healthyMin = 18.5 * h * h;
        const healthyMax = 24.9 * h * h;
        return {
          primaryLabel: 'Your BMI Score', primaryValue: fmtDec(bmi, 1),
          copy: `BMI: ${fmtDec(bmi, 1)} (${cat})`,
          summary: `BMI ${fmtDec(bmi, 1)} - ${cat}`,
          breakdown: [{ label: 'BMI Value', value: fmtDec(bmi, 1) }, { label: 'WHO Category', value: cat }, { label: 'Healthy Weight Range', value: `${fmtDec(healthyMin, 1)} - ${fmtDec(healthyMax, 1)} kg` }]
        };
      },
      seo: { heading: 'Body Mass Index (BMI) Formula', desc: 'Evaluates body mass relative to height using standard World Health Organization (WHO) classifications.', formula: 'BMI = Weight (kg) / [Height (m)]^2' }
    },
    {
      id: 'calorie-calc', title: 'Daily Calorie Calculator (BMR)', shortTitle: 'Calorie Intake', category: 'Health', icon: ICONS.health,
      keywords: ['calorie', 'bmr', 'tdee', 'diet', 'weight loss'],
      subtitle: 'Calculate daily maintenance calories and weight goal targets.',
      inputs: [
        { id: 'gender', label: 'Gender', type: 'segment', default: 'male', options: [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }] },
        { id: 'weight', label: 'Weight', type: 'number', suffix: 'kg', default: 70, min: 30, max: 250, step: 1 },
        { id: 'height', label: 'Height', type: 'number', suffix: 'cm', default: 172, min: 100, max: 230, step: 1 },
        { id: 'age', label: 'Age', type: 'number', suffix: 'Yrs', default: 28, min: 15, max: 100, step: 1 }
      ],
      compute: (v) => {
        const w = Number(v.weight) || 70;
        const h = Number(v.height) || 172;
        const a = Number(v.age) || 28;
        let bmr = (10 * w) + (6.25 * h) - (5 * a);
        bmr += v.gender === 'male' ? 5 : -161;
        const tdee = bmr * 1.375;
        return {
          primaryLabel: 'Daily Maintenance (TDEE)', primaryValue: `${Math.round(tdee)} kcal`,
          copy: `BMR: ${Math.round(bmr)} kcal | TDEE: ${Math.round(tdee)} kcal`,
          summary: `${Math.round(tdee)} kcal/day`,
          breakdown: [{ label: 'BMR (Resting)', value: `${Math.round(bmr)} kcal` }, { label: 'Maintenance (TDEE)', value: `${Math.round(tdee)} kcal` }, { label: 'Fat Loss Target', value: `${Math.round(tdee - 500)} kcal` }]
        };
      },
      seo: { heading: 'Mifflin-St Jeor Equation', desc: 'Estimates basal metabolic rate and daily calorie expenditure.', formula: 'BMR = 10W + 6.25H - 5A + (5 or -161)' }
    },
    {
      id: 'body-fat-calc', title: 'Body Fat Percentage (US Navy)', shortTitle: 'Body Fat', category: 'Health', icon: ICONS.health,
      keywords: ['body fat', 'fitness', 'composition'],
      subtitle: 'Estimate body fat percentage using circumference measurements.',
      inputs: [
        { id: 'gender', label: 'Gender', type: 'segment', default: 'male', options: [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }] },
        { id: 'height', label: 'Height', type: 'number', suffix: 'cm', default: 175, min: 100, max: 220, step: 1 },
        { id: 'neck', label: 'Neck', type: 'number', suffix: 'cm', default: 38, min: 20, max: 60, step: 1 },
        { id: 'waist', label: 'Waist', type: 'number', suffix: 'cm', default: 85, min: 50, max: 150, step: 1 }
      ],
      compute: (v) => {
        const h = Number(v.height) || 175, n = Number(v.neck) || 38, w = Number(v.waist) || 85;
        let bf = v.gender === 'male' ? 495 / (1.0334 - 0.19069 * Math.log10(Math.max(1, w - n)) + 0.15456 * Math.log10(h)) - 450 : 495 / (1.29579 - 0.35004 * Math.log10(Math.max(1, w - n)) + 0.22100 * Math.log10(h)) - 450;
        if (!isFinite(bf) || bf < 3) bf = 15;
        return {
          primaryLabel: 'Est. Body Fat', primaryValue: `${fmtDec(bf, 1)}%`,
          copy: `Body Fat: ${fmtDec(bf, 1)}%`,
          summary: `${fmtDec(bf, 1)}% body fat`,
          breakdown: [{ label: 'Body Fat %', value: `${fmtDec(bf, 1)}%` }]
        };
      },
      seo: { heading: 'US Navy Body Fat Formula', desc: 'Uses body circumference measurements to estimate adipose tissue.', formula: 'Logarithmic anthropometric formula' }
    },
    {
      id: 'water-calc', title: 'Daily Water Intake', shortTitle: 'Water Intake', category: 'Health', icon: ICONS.health,
      keywords: ['water', 'hydration', 'health'],
      subtitle: 'Calculate optimal daily water consumption based on weight and activity.',
      inputs: [
        { id: 'weight', label: 'Weight', type: 'number', suffix: 'kg', default: 70, min: 20, max: 250, step: 1 },
        { id: 'activity', label: 'Workout Duration', type: 'number', suffix: 'Mins', default: 30, min: 0, max: 180, step: 5 }
      ],
      compute: (v) => {
        const w = Number(v.weight) || 70;
        const act = Number(v.activity) || 30;
        const liters = (w * 0.033) + (act / 30 * 0.35);
        return {
          primaryLabel: 'Recommended Water', primaryValue: `${fmtDec(liters, 2)} Liters`,
          copy: `Daily Water Target: ${fmtDec(liters, 2)} L (${Math.round(liters * 1000)} ml)`,
          summary: `${fmtDec(liters, 2)} Liters / day`,
          breakdown: [{ label: 'Target Liters', value: `${fmtDec(liters, 2)} L` }, { label: 'Milliliters', value: `${Math.round(liters * 1000)} ml` }]
        };
      },
      seo: { heading: 'Hydration Guidelines', desc: 'Ensures optimal daily fluid balance.', formula: 'Weight (kg) × 33ml + Activity adjustment' }
    },
    {
      id: 'ideal-weight-calc', title: 'Ideal Body Weight (IBW)', shortTitle: 'Ideal Weight', category: 'Health', icon: ICONS.health,
      keywords: ['ideal weight', 'ibw', 'health'],
      subtitle: 'Calculate your healthy ideal weight range by height.',
      inputs: [
        { id: 'gender', label: 'Gender', type: 'segment', default: 'male', options: [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }] },
        { id: 'height', label: 'Height', type: 'number', suffix: 'cm', default: 175, min: 120, max: 220, step: 1 }
      ],
      compute: (v) => {
        const hInches = (Number(v.height) || 175) / 2.54;
        const inchesOver60 = Math.max(0, hInches - 60);
        let ibw = v.gender === 'male' ? 50 + (2.3 * inchesOver60) : 45.5 + (2.3 * inchesOver60);
        return {
          primaryLabel: 'Ideal Body Weight', primaryValue: `${fmtDec(ibw, 1)} kg`,
          copy: `Ideal Weight: ${fmtDec(ibw, 1)} kg`,
          summary: `${fmtDec(ibw, 1)} kg`,
          breakdown: [{ label: 'Ideal Weight', value: `${fmtDec(ibw, 1)} kg` }]
        };
      },
      seo: { heading: 'Devine Formula', desc: 'Standard clinical formula for ideal body weight.', formula: 'Devine formula based on height over 5 feet' }
    },
    {
      id: 'macro-calc', title: 'Macro Nutrient Calculator', shortTitle: 'Macros', category: 'Health', icon: ICONS.health,
      keywords: ['macros', 'protein', 'carbs', 'fat', 'diet'],
      subtitle: 'Calculate daily Protein, Carbohydrate, and Fat gram splits.',
      inputs: [
        { id: 'calories', label: 'Daily Calories', type: 'number', suffix: 'kcal', default: 2200, min: 1000, max: 5000, step: 50 },
        { id: 'goal', label: 'Diet Goal', type: 'segment', default: 'balanced', options: [{ value: 'balanced', label: 'Balanced' }, { value: 'keto', label: 'Keto' }, { value: 'highprotein', label: 'High Protein' }] }
      ],
      compute: (v) => {
        const cal = Number(v.calories) || 2200;
        let pPct = 0.3, cPct = 0.4, fPct = 0.3;
        if (v.goal === 'keto') { pPct = 0.25; cPct = 0.05; fPct = 0.70; }
        else if (v.goal === 'highprotein') { pPct = 0.40; cPct = 0.35; fPct = 0.25; }
        const pGrams = (cal * pPct) / 4;
        const cGrams = (cal * cPct) / 4;
        const fGrams = (cal * fPct) / 9;
        return {
          primaryLabel: 'Daily Macros Breakdown', primaryValue: `${Math.round(pGrams)}g P / ${Math.round(cGrams)}g C / ${Math.round(fGrams)}g F`,
          copy: `Protein: ${Math.round(pGrams)}g | Carbs: ${Math.round(cGrams)}g | Fat: ${Math.round(fGrams)}g`,
          summary: `${Math.round(pGrams)}g P / ${Math.round(cGrams)}g C / ${Math.round(fGrams)}g F`,
          breakdown: [{ label: 'Protein (4 kcal/g)', value: `${Math.round(pGrams)}g` }, { label: 'Carbs (4 kcal/g)', value: `${Math.round(cGrams)}g` }, { label: 'Fat (9 kcal/g)', value: `${Math.round(fGrams)}g` }]
        };
      },
      seo: { heading: 'Macronutrient Split', desc: 'Allocates daily calories into protein, carbohydrates, and healthy fats.', formula: 'Calories × Percentage / Caloric density' }
    },
    {
      id: 'pace-calc', title: 'Running Pace Calculator', shortTitle: 'Running Pace', category: 'Health', icon: ICONS.health,
      keywords: ['pace', 'running', 'marathon', 'speed'],
      subtitle: 'Calculate your average running pace per kilometer and speed.',
      inputs: [
        { id: 'distance', label: 'Distance', type: 'number', suffix: 'km', default: 10, min: 0.5, max: 100, step: 0.5 },
        { id: 'minutes', label: 'Total Time', type: 'number', suffix: 'Mins', default: 50, min: 1, max: 1440, step: 1 }
      ],
      compute: (v) => {
        const dist = Math.max(0.1, Number(v.distance) || 10);
        const mins = Math.max(1, Number(v.minutes) || 50);
        const paceMinPerKm = mins / dist;
        const pMin = Math.floor(paceMinPerKm);
        const pSec = Math.round((paceMinPerKm - pMin) * 60);
        const speedKmh = (dist / (mins / 60));
        return {
          primaryLabel: 'Average Pace', primaryValue: `${pMin}:${pSec < 10 ? '0' : ''}${pSec} min/km`,
          copy: `Pace: ${pMin}:${pSec < 10 ? '0' : ''}${pSec} min/km | Speed: ${fmtDec(speedKmh, 1)} km/h`,
          summary: `${pMin}:${pSec < 10 ? '0' : ''}${pSec} min/km`,
          breakdown: [{ label: 'Pace per km', value: `${pMin}:${pSec < 10 ? '0' : ''}${pSec} /km` }, { label: 'Average Speed', value: `${fmtDec(speedKmh, 1)} km/h` }]
        };
      },
      seo: { heading: 'Running Pace Formula', desc: 'Computes time required per kilometer.', formula: 'Pace = Total Time / Distance' }
    },
    {
      id: 'sleep-calc', title: 'Sleep Cycle Calculator', shortTitle: 'Sleep Cycles', category: 'Health', icon: ICONS.health,
      keywords: ['sleep', 'circadian', 'rest', 'cycles'],
      subtitle: 'Calculate optimal rest cycles based on 90-minute REM/NREM sleep cycles.',
      inputs: [
        { id: 'hours', label: 'Sleep Duration Target', type: 'number', suffix: 'Hours', default: 7.5, min: 3, max: 12, step: 0.5 }
      ],
      compute: (v) => {
        const hrs = Number(v.hours) || 7.5;
        const cycles = Math.round(hrs / 1.5);
        return {
          primaryLabel: 'Optimal Sleep Cycles', primaryValue: `${cycles} Cycles (${hrs} hrs)`,
          copy: `Target Sleep: ${hrs} hours (${cycles} cycles of 90 mins)`,
          summary: `${cycles} cycles (${hrs} hrs)`,
          breakdown: [{ label: 'Sleep Cycles', value: `${cycles} cycles` }, { label: 'Total Rest', value: `${hrs} Hours` }]
        };
      },
      seo: { heading: 'Circadian Sleep Cycles', desc: 'Human sleep alternates in ~90 minute REM/NREM phases.', formula: 'Cycles = Total Hours / 1.5' }
    },

    /* --- MATH & STATISTICS (6) --- */
    {
      id: 'percentage-calc', title: 'Percentage Calculator', shortTitle: 'Percentage', category: 'Math', icon: ICONS.math,
      keywords: ['percentage', 'math', 'calc', 'ratio'],
      subtitle: 'Calculate percentage of a value and percentage increase/decrease.',
      inputs: [
        { id: 'val1', label: 'Base Value (A)', type: 'number', default: 250, min: -10000000, max: 10000000, step: 1 },
        { id: 'val2', label: 'Percentage or Target (B)', type: 'number', default: 20, min: -10000000, max: 10000000, step: 1 }
      ],
      compute: (v) => {
        const a = Number(v.val1) || 0;
        const b = Number(v.val2) || 0;
        const pctOf = (b / 100) * a;
        const pctDiff = a !== 0 ? ((b - a) / Math.abs(a)) * 100 : 0;
        return {
          primaryLabel: `${b}% of ${a}`, primaryValue: fmtDec(pctOf, 2),
          copy: `${b}% of ${a} = ${fmtDec(pctOf, 2)} | Pct Change: ${fmtDec(pctDiff, 2)}%`,
          summary: `${b}% of ${a} = ${fmtDec(pctOf, 2)}`,
          breakdown: [{ label: `${b}% of ${a}`, value: fmtDec(pctOf, 2) }, { label: `Change (${a} → ${b})`, value: `${fmtDec(pctDiff, 2)}%` }]
        };
      },
      seo: { heading: 'Percentage Formulas', desc: 'Core mathematical proportions and percentage variations.', formula: 'Percentage = (Part / Whole) × 100' }
    },
    {
      id: 'average-calc', title: 'Average, Median & Sum', shortTitle: 'Stats Average', category: 'Math', icon: ICONS.math,
      keywords: ['average', 'mean', 'median', 'statistics', 'sum'],
      subtitle: 'Calculate statistical mean, median, and sum for a dataset.',
      inputs: [
        { id: 'numbers', label: 'Enter Numbers (comma separated)', type: 'text', default: '12, 45, 67, 23, 89, 34, 56' }
      ],
      compute: (v) => {
        const raw = String(v.numbers || '');
        const arr = raw.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
        if (arr.length === 0) return { primaryLabel: 'Average (Mean)', primaryValue: '0', copy: 'No valid numbers', summary: '0', breakdown: [] };
        const sum = arr.reduce((acc, cur) => acc + cur, 0);
        const mean = sum / arr.length;
        const sorted = [...arr].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        const median = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
        return {
          primaryLabel: 'Average (Mean)', primaryValue: fmtDec(mean, 2),
          copy: `Count: ${arr.length} | Sum: ${sum} | Mean: ${fmtDec(mean, 2)} | Median: ${median}`,
          summary: `Mean: ${fmtDec(mean, 2)}, Sum: ${sum}`,
          breakdown: [{ label: 'Count', value: arr.length }, { label: 'Sum', value: sum }, { label: 'Mean', value: fmtDec(mean, 2) }, { label: 'Median', value: median }]
        };
      },
      seo: { heading: 'Statistical Mean & Median', desc: 'Descriptive statistics metrics for numeric sets.', formula: 'Mean = Sum / Count' }
    },
    {
      id: 'quadratic-calc', title: 'Quadratic Equation Solver', shortTitle: 'Quadratic Roots', category: 'Math', icon: ICONS.math,
      keywords: ['quadratic', 'algebra', 'roots', 'equation'],
      subtitle: 'Solve quadratic equations of form ax² + bx + c = 0.',
      inputs: [
        { id: 'a', label: 'Coefficient a', type: 'number', default: 1, min: -1000, max: 1000, step: 1 },
        { id: 'b', label: 'Coefficient b', type: 'number', default: -5, min: -1000, max: 1000, step: 1 },
        { id: 'c', label: 'Coefficient c', type: 'number', default: 6, min: -1000, max: 1000, step: 1 }
      ],
      compute: (v) => {
        const a = Number(v.a) || 1, b = Number(v.b) || 0, c = Number(v.c) || 0;
        const disc = (b * b) - (4 * a * c);
        let root1 = 'N/A', root2 = 'N/A';
        if (disc >= 0 && a !== 0) {
          root1 = fmtDec((-b + Math.sqrt(disc)) / (2 * a), 4);
          root2 = fmtDec((-b - Math.sqrt(disc)) / (2 * a), 4);
        } else if (a !== 0) {
          const real = fmtDec(-b / (2 * a), 2);
          const imag = fmtDec(Math.sqrt(-disc) / (2 * a), 2);
          root1 = `${real} + ${imag}i`;
          root2 = `${real} - ${imag}i`;
        }
        return {
          primaryLabel: 'Roots (x₁, x₂)', primaryValue: `x₁ = ${root1}, x₂ = ${root2}`,
          copy: `Discriminant: ${disc} | Roots: x₁ = ${root1}, x₂ = ${root2}`,
          summary: `Roots: ${root1}, ${root2}`,
          breakdown: [{ label: 'Discriminant (Δ)', value: disc }, { label: 'Root 1', value: root1 }, { label: 'Root 2', value: root2 }]
        };
      },
      seo: { heading: 'Quadratic Formula', desc: 'Finds real or complex roots of second-order polynomials.', formula: 'x = [-b ± √(b² - 4ac)] / 2a' }
    },
    {
      id: 'ratio-calc', title: 'Ratio & Proportion Solver', shortTitle: 'Ratio Solver', category: 'Math', icon: ICONS.math,
      keywords: ['ratio', 'proportion', 'math'],
      subtitle: 'Solve missing values in proportions (A : B = C : X).',
      inputs: [
        { id: 'a', label: 'Value A', type: 'number', default: 2, min: 0.001, max: 1000000, step: 1 },
        { id: 'b', label: 'Value B', type: 'number', default: 5, min: 0.001, max: 1000000, step: 1 },
        { id: 'c', label: 'Value C', type: 'number', default: 10, min: 0.001, max: 1000000, step: 1 }
      ],
      compute: (v) => {
        const a = Number(v.a) || 1, b = Number(v.b) || 1, c = Number(v.c) || 1;
        const x = (b * c) / a;
        return {
          primaryLabel: 'Solved Proportion (X)', primaryValue: fmtDec(x, 4),
          copy: `${a} : ${b} = ${c} : ${fmtDec(x, 4)}`,
          summary: `X = ${fmtDec(x, 4)}`,
          breakdown: [{ label: 'Missing Value X', value: fmtDec(x, 4) }]
        };
      },
      seo: { heading: 'Proportion Cross-Multiplication', desc: 'Solves equivalent ratios.', formula: 'X = (B × C) / A' }
    },
    {
      id: 'gcd-lcm-calc', title: 'GCD and LCM Calculator', shortTitle: 'GCD & LCM', category: 'Math', icon: ICONS.math,
      keywords: ['gcd', 'lcm', 'factors', 'math'],
      subtitle: 'Calculate Greatest Common Divisor and Least Common Multiple.',
      inputs: [
        { id: 'num1', label: 'Number 1', type: 'number', default: 24, min: 1, max: 1000000, step: 1 },
        { id: 'num2', label: 'Number 2', type: 'number', default: 36, min: 1, max: 1000000, step: 1 }
      ],
      compute: (v) => {
        let x = Math.abs(Number(v.num1) || 24), y = Math.abs(Number(v.num2) || 36);
        const gcd = (a, b) => (!b ? a : gcd(b, a % b));
        const g = gcd(x, y);
        const l = (x * y) / g;
        return {
          primaryLabel: 'GCD (HCF)', primaryValue: `${g} (LCM: ${l})`,
          copy: `GCD: ${g} | LCM: ${l}`,
          summary: `GCD: ${g}, LCM: ${l}`,
          breakdown: [{ label: 'GCD / HCF', value: g }, { label: 'LCM', value: l }]
        };
      },
      seo: { heading: 'Euclidean Algorithm', desc: 'Computes common divisors and multiples.', formula: 'LCM(a,b) = |a × b| / GCD(a,b)' }
    },
    {
      id: 'exponent-calc', title: 'Exponent & Power Calculator', shortTitle: 'Exponents', category: 'Math', icon: ICONS.math,
      keywords: ['exponent', 'power', 'root', 'math'],
      subtitle: 'Calculate base raised to a power (x^y).',
      inputs: [
        { id: 'base', label: 'Base (x)', type: 'number', default: 2, min: -1000, max: 1000, step: 1 },
        { id: 'exp', label: 'Exponent / Power (y)', type: 'number', default: 8, min: -100, max: 100, step: 1 }
      ],
      compute: (v) => {
        const b = Number(v.base) || 2, e = Number(v.exp) || 8;
        const res = Math.pow(b, e);
        return {
          primaryLabel: `${b} ^ ${e}`, primaryValue: fmtDec(res, 4),
          copy: `${b} ^ ${e} = ${fmtDec(res, 4)}`,
          summary: `${b}^${e} = ${fmtDec(res, 4)}`,
          breakdown: [{ label: 'Result', value: fmtDec(res, 4) }]
        };
      },
      seo: { heading: 'Exponentiation', desc: 'Repeated multiplication of a base value.', formula: 'Base^Exponent' }
    },

    /* --- CONVERSION & UNITS (6) --- */
    {
      id: 'temp-conv', title: 'Temperature Converter', shortTitle: 'Temperature', category: 'Conversion', icon: ICONS.conv,
      keywords: ['temperature', 'celsius', 'fahrenheit', 'kelvin'],
      subtitle: 'Convert instantly between Celsius, Fahrenheit, and Kelvin.',
      inputs: [
        { id: 'val', label: 'Temperature Value', type: 'number', default: 37, min: -500, max: 5000, step: 0.1 },
        { id: 'unit', label: 'Input Unit', type: 'segment', default: 'C', options: [{ value: 'C', label: 'Celsius' }, { value: 'F', label: 'Fahrenheit' }, { value: 'K', label: 'Kelvin' }] }
      ],
      compute: (v) => {
        const val = Number(v.val) || 0;
        let c = val, f = val, k = val;
        if (v.unit === 'C') { f = (val * 9/5) + 32; k = val + 273.15; }
        else if (v.unit === 'F') { c = (val - 32) * 5/9; k = c + 273.15; }
        else if (v.unit === 'K') { c = val - 273.15; f = (c * 9/5) + 32; }
        return {
          primaryLabel: 'Converted Temperatures', primaryValue: `${fmtDec(c, 1)}°C / ${fmtDec(f, 1)}°F`,
          copy: `Celsius: ${fmtDec(c, 1)}°C | Fahrenheit: ${fmtDec(f, 1)}°F | Kelvin: ${fmtDec(k, 1)}K`,
          summary: `${val}°${v.unit}`,
          breakdown: [{ label: 'Celsius (°C)', value: `${fmtDec(c, 2)}°C` }, { label: 'Fahrenheit (°F)', value: `${fmtDec(f, 2)}°F` }, { label: 'Kelvin (K)', value: `${fmtDec(k, 2)}K` }]
        };
      },
      seo: { heading: 'Temperature Scales', desc: 'Standard thermodynamic conversions.', formula: 'F = (C × 9/5) + 32' }
    },
    {
      id: 'length-conv', title: 'Length & Distance Converter', shortTitle: 'Length', category: 'Conversion', icon: ICONS.conv,
      keywords: ['length', 'meters', 'feet', 'inches', 'km', 'miles'],
      subtitle: 'Convert between meters, feet, kilometers, and miles.',
      inputs: [
        { id: 'val', label: 'Length Value', type: 'number', default: 100, min: 0, max: 10000000, step: 1 },
        { id: 'unit', label: 'Unit', type: 'segment', default: 'm', options: [{ value: 'm', label: 'Meters' }, { value: 'ft', label: 'Feet' }, { value: 'km', label: 'Km' }, { value: 'mi', label: 'Miles' }] }
      ],
      compute: (v) => {
        const val = Math.max(0, Number(v.val) || 0);
        let meters = val;
        if (v.unit === 'ft') meters = val / 3.28084;
        else if (v.unit === 'km') meters = val * 1000;
        else if (v.unit === 'mi') meters = val * 1609.34;
        const ft = meters * 3.28084, km = meters / 1000, mi = meters / 1609.34;
        return {
          primaryLabel: 'Converted Length', primaryValue: `${fmtDec(meters, 2)} Meters`,
          copy: `${val} ${v.unit} = ${fmtDec(meters, 2)}m (${fmtDec(ft, 2)} ft)`,
          summary: `${val} ${v.unit}`,
          breakdown: [{ label: 'Meters', value: `${fmtDec(meters, 2)} m` }, { label: 'Feet', value: `${fmtDec(ft, 2)} ft` }, { label: 'Kilometers', value: `${fmtDec(km, 3)} km` }, { label: 'Miles', value: `${fmtDec(mi, 3)} mi` }]
        };
      },
      seo: { heading: 'Unit Conversion Factors', desc: 'Standard metric and imperial length ratios.', formula: '1 meter = 3.28084 feet' }
    },
    {
      id: 'weight-conv', title: 'Weight & Mass Converter', shortTitle: 'Weight', category: 'Conversion', icon: ICONS.conv,
      keywords: ['weight', 'kg', 'lbs', 'grams', 'ounces'],
      subtitle: 'Convert between kilograms, pounds, grams, and ounces.',
      inputs: [
        { id: 'val', label: 'Weight Value', type: 'number', default: 75, min: 0, max: 1000000, step: 0.5 },
        { id: 'unit', label: 'Unit', type: 'segment', default: 'kg', options: [{ value: 'kg', label: 'Kg' }, { value: 'lb', label: 'Pounds' }, { value: 'g', label: 'Grams' }] }
      ],
      compute: (v) => {
        const val = Math.max(0, Number(v.val) || 0);
        let grams = val * 1000;
        if (v.unit === 'lb') grams = val * 453.592;
        else if (v.unit === 'g') grams = val;
        const kg = grams / 1000, lb = grams / 453.592, oz = grams / 28.3495;
        return {
          primaryLabel: 'Converted Weight', primaryValue: `${fmtDec(kg, 2)} Kg / ${fmtDec(lb, 2)} lbs`,
          copy: `Kilograms: ${fmtDec(kg, 2)} kg | Pounds: ${fmtDec(lb, 2)} lbs`,
          summary: `${val} ${v.unit}`,
          breakdown: [{ label: 'Kilograms', value: `${fmtDec(kg, 2)} kg` }, { label: 'Pounds', value: `${fmtDec(lb, 2)} lbs` }, { label: 'Ounces', value: `${fmtDec(oz, 2)} oz` }]
        };
      },
      seo: { heading: 'Mass Conversions', desc: 'Converts metric to imperial weight units.', formula: '1 kg = 2.20462 lbs' }
    },
    {
      id: 'speed-conv', title: 'Speed Converter', shortTitle: 'Speed', category: 'Conversion', icon: ICONS.conv,
      keywords: ['speed', 'kmh', 'mph', 'knots'],
      subtitle: 'Convert between km/h, mph, knots, and m/s.',
      inputs: [
        { id: 'val', label: 'Speed Value', type: 'number', default: 100, min: 0, max: 10000, step: 1 },
        { id: 'unit', label: 'Unit', type: 'segment', default: 'kmh', options: [{ value: 'kmh', label: 'km/h' }, { value: 'mph', label: 'mph' }, { value: 'ms', label: 'm/s' }] }
      ],
      compute: (v) => {
        const val = Math.max(0, Number(v.val) || 0);
        let kmh = val;
        if (v.unit === 'mph') kmh = val * 1.60934;
        else if (v.unit === 'ms') kmh = val * 3.6;
        const mph = kmh / 1.60934, knots = kmh / 1.852;
        return {
          primaryLabel: 'Converted Speed', primaryValue: `${fmtDec(kmh, 1)} km/h (${fmtDec(mph, 1)} mph)`,
          copy: `km/h: ${fmtDec(kmh, 1)} | mph: ${fmtDec(mph, 1)} | Knots: ${fmtDec(knots, 1)}`,
          summary: `${val} ${v.unit}`,
          breakdown: [{ label: 'km/h', value: `${fmtDec(kmh, 1)}` }, { label: 'mph', value: `${fmtDec(mph, 1)}` }, { label: 'Knots', value: `${fmtDec(knots, 1)}` }]
        };
      },
      seo: { heading: 'Velocity Ratios', desc: 'Speed unit equivalencies.', formula: '1 mph = 1.60934 km/h' }
    },
    {
      id: 'data-conv', title: 'Data Storage Converter', shortTitle: 'Data Storage', category: 'Conversion', icon: ICONS.conv,
      keywords: ['data', 'bytes', 'mb', 'gb', 'tb'],
      subtitle: 'Convert between Megabytes, Gigabytes, and Terabytes.',
      inputs: [
        { id: 'val', label: 'Size Value', type: 'number', default: 512, min: 0, max: 10000000, step: 1 },
        { id: 'unit', label: 'Unit', type: 'segment', default: 'GB', options: [{ value: 'MB', label: 'MB' }, { value: 'GB', label: 'GB' }, { value: 'TB', label: 'TB' }] }
      ],
      compute: (v) => {
        const val = Math.max(0, Number(v.val) || 0);
        let mb = val;
        if (v.unit === 'GB') mb = val * 1024;
        else if (v.unit === 'TB') mb = val * 1024 * 1024;
        const gb = mb / 1024, tb = gb / 1024;
        return {
          primaryLabel: 'Converted Storage', primaryValue: gb >= 1 ? `${fmtDec(gb, 2)} GB` : `${fmtDec(mb, 2)} MB`,
          copy: `MB: ${fmtDec(mb, 2)} | GB: ${fmtDec(gb, 2)} | TB: ${fmtDec(tb, 4)}`,
          summary: `${val} ${v.unit}`,
          breakdown: [{ label: 'Megabytes (MB)', value: `${fmtDec(mb, 2)} MB` }, { label: 'Gigabytes (GB)', value: `${fmtDec(gb, 2)} GB` }, { label: 'Terabytes (TB)', value: `${fmtDec(tb, 4)} TB` }]
        };
      },
      seo: { heading: 'Digital Storage Units', desc: 'Binary storage multiples (1024 base).', formula: '1 GB = 1024 MB' }
    },
    {
      id: 'time-conv', title: 'Time Unit Converter', shortTitle: 'Time Converter', category: 'Conversion', icon: ICONS.conv,
      keywords: ['time', 'hours', 'minutes', 'seconds', 'days'],
      subtitle: 'Convert between minutes, hours, days, and weeks.',
      inputs: [
        { id: 'val', label: 'Time Value', type: 'number', default: 72, min: 0, max: 10000000, step: 1 },
        { id: 'unit', label: 'Unit', type: 'segment', default: 'hours', options: [{ value: 'mins', label: 'Mins' }, { value: 'hours', label: 'Hours' }, { value: 'days', label: 'Days' }] }
      ],
      compute: (v) => {
        const val = Math.max(0, Number(v.val) || 0);
        let mins = val;
        if (v.unit === 'hours') mins = val * 60;
        else if (v.unit === 'days') mins = val * 1440;
        const hours = mins / 60, days = hours / 24, weeks = days / 7;
        return {
          primaryLabel: 'Converted Time', primaryValue: `${fmtDec(hours, 1)} Hours (${fmtDec(days, 1)} Days)`,
          copy: `Minutes: ${mins} | Hours: ${fmtDec(hours, 1)} | Days: ${fmtDec(days, 2)}`,
          summary: `${val} ${v.unit}`,
          breakdown: [{ label: 'Minutes', value: mins }, { label: 'Hours', value: fmtDec(hours, 2) }, { label: 'Days', value: fmtDec(days, 2) }, { label: 'Weeks', value: fmtDec(weeks, 2) }]
        };
      },
      seo: { heading: 'Chronological Ratios', desc: 'Time conversion multiples.', formula: '1 day = 24 hours = 1440 minutes' }
    },

    /* --- EVERYDAY UTILITY (5) --- */
    {
      id: 'discount-calc', title: 'Shopping Discount Calculator', shortTitle: 'Discount', category: 'Utility', icon: ICONS.util,
      keywords: ['discount', 'sale', 'shopping', 'price'],
      subtitle: 'Calculate final discounted price and total money saved.',
      inputs: [
        { id: 'price', label: 'Original Price', type: 'number', prefix: '₹', default: 2499, min: 0, max: 10000000, step: 50 },
        { id: 'discount', label: 'Discount Percentage', type: 'number', suffix: '%', default: 35, min: 0, max: 99, step: 1 }
      ],
      compute: (v) => {
        const p = Math.max(0, Number(v.price) || 0);
        const d = Math.min(99, Math.max(0, Number(v.discount) || 0));
        const saved = p * (d / 100);
        const final = p - saved;
        return {
          primaryLabel: 'Final Discounted Price', primaryValue: fmtCurr(final),
          copy: `Original: ${fmtCurr(p)} | Saved: ${fmtCurr(saved)} | Final: ${fmtCurr(final)}`,
          summary: `${fmtCurr(p)} at ${d}% off`,
          breakdown: [{ label: 'Original Price', value: fmtCurr(p) }, { label: 'You Save', value: fmtCurr(saved) }, { label: 'Final Payable', value: fmtCurr(final) }]
        };
      },
      seo: { heading: 'Discount Formula', desc: 'Computes retail sale markdown savings.', formula: 'Final = Original × (1 - Discount%/100)' }
    },
    {
      id: 'tip-calc', title: 'Tip & Bill Splitter', shortTitle: 'Tip Splitter', category: 'Utility', icon: ICONS.util,
      keywords: ['tip', 'bill splitter', 'restaurant', 'dining'],
      subtitle: 'Calculate gratuity tip and split restaurant bills among friends.',
      inputs: [
        { id: 'bill', label: 'Total Bill Amount', type: 'number', prefix: '₹', default: 2500, min: 0, max: 1000000, step: 50 },
        { id: 'tip', label: 'Tip Percentage', type: 'number', suffix: '%', default: 10, min: 0, max: 50, step: 1 },
        { id: 'people', label: 'Number of People', type: 'number', suffix: 'Persons', default: 4, min: 1, max: 100, step: 1 }
      ],
      compute: (v) => {
        const bill = Math.max(0, Number(v.bill) || 0);
        const tipPct = Math.max(0, Number(v.tip) || 0) / 100;
        const people = Math.max(1, Number(v.people) || 1);
        const tipAmt = bill * tipPct;
        const total = bill + tipAmt;
        const perPerson = total / people;
        return {
          primaryLabel: 'Per Person Share', primaryValue: fmtCurr(perPerson),
          copy: `Bill: ${fmtCurr(bill)} | Tip: ${fmtCurr(tipAmt)} | Total: ${fmtCurr(total)} | Per Person: ${fmtCurr(perPerson)}`,
          summary: `${fmtCurr(perPerson)}/person (${people} people)`,
          breakdown: [{ label: 'Tip Amount', value: fmtCurr(tipAmt) }, { label: 'Total Bill', value: fmtCurr(total) }, { label: 'Per Person Share', value: fmtCurr(perPerson) }]
        };
      },
      seo: { heading: 'Bill Splitting Formula', desc: 'Distributes group dining expenses evenly.', formula: 'Per Person = (Bill + Tip) / People' }
    },
    {
      id: 'fuel-calc', title: 'Fuel Cost & Mileage Calculator', shortTitle: 'Fuel Cost', category: 'Utility', icon: ICONS.util,
      keywords: ['fuel', 'gas', 'mileage', 'travel cost'],
      subtitle: 'Calculate trip fuel consumption and estimated travel cost.',
      inputs: [
        { id: 'distance', label: 'Trip Distance', type: 'number', suffix: 'km', default: 450, min: 1, max: 10000, step: 10 },
        { id: 'mileage', label: 'Vehicle Mileage', type: 'number', suffix: 'km/L', default: 15, min: 1, max: 100, step: 0.5 },
        { id: 'price', label: 'Fuel Price per Liter', type: 'number', prefix: '₹', default: 96, min: 1, max: 500, step: 1 }
      ],
      compute: (v) => {
        const dist = Math.max(0, Number(v.distance) || 0);
        const mil = Math.max(0.1, Number(v.mileage) || 15);
        const price = Math.max(0, Number(v.price) || 96);
        const liters = dist / mil;
        const cost = liters * price;
        return {
          primaryLabel: 'Estimated Trip Fuel Cost', primaryValue: fmtCurr(cost),
          copy: `Fuel Needed: ${fmtDec(liters, 1)} Liters | Total Cost: ${fmtCurr(cost)}`,
          summary: `${fmtCurr(cost)} for ${dist} km`,
          breakdown: [{ label: 'Fuel Consumed', value: `${fmtDec(liters, 1)} Liters` }, { label: 'Total Cost', value: fmtCurr(cost) }]
        };
      },
      seo: { heading: 'Trip Cost Formula', desc: 'Computes fuel expenditures for road trips.', formula: 'Cost = (Distance / Mileage) × Price' }
    },
    {
      id: 'age-calc', title: 'Age & Date Duration Calculator', shortTitle: 'Age Calculator', category: 'Utility', icon: ICONS.util,
      keywords: ['age', 'date', 'birthday', 'duration'],
      subtitle: 'Calculate exact age in years, months, and days from date of birth.',
      inputs: [
        { id: 'birthdate', label: 'Date of Birth', type: 'date', default: '1995-06-15' }
      ],
      compute: (v) => {
        const dob = new Date(v.birthdate || '1995-06-15');
        const now = new Date();
        let yrs = now.getFullYear() - dob.getFullYear();
        let mos = now.getMonth() - dob.getMonth();
        let days = now.getDate() - dob.getDate();
        if (days < 0) {
          mos--;
          const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
          days += prevMonth.getDate();
        }
        if (mos < 0) {
          yrs--;
          mos += 12;
        }
        const totalDays = Math.floor((now - dob) / (1000 * 60 * 60 * 24));
        return {
          primaryLabel: 'Your Exact Age', primaryValue: `${yrs} Years, ${mos} Mos`,
          copy: `Age: ${yrs} Years, ${mos} Months, ${days} Days (${totalDays} total days)`,
          summary: `${yrs} Yrs ${mos} Mos`,
          breakdown: [{ label: 'Years', value: yrs }, { label: 'Months', value: mos }, { label: 'Days', value: days }, { label: 'Total Days', value: totalDays }]
        };
      },
      seo: { heading: 'Chronological Age Computation', desc: 'Calculates exact calendar age intervals.', formula: 'Difference between current date and birth date' }
    },
    {
      id: 'password-calc', title: 'Password Strength & Generator', shortTitle: 'Password Generator', category: 'Utility', icon: ICONS.util,
      keywords: ['password', 'security', 'generator', 'hash'],
      subtitle: 'Generate cryptographically strong random passwords locally in your browser.',
      inputs: [
        { id: 'length', label: 'Password Length', type: 'number', default: 16, min: 6, max: 64, step: 1 }
      ],
      compute: (v) => {
        const len = Math.min(64, Math.max(6, Number(v.length) || 16));
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!';
        let pwd = '';
        const array = new Uint32Array(len);
        if (window.crypto && window.crypto.getRandomValues) {
          window.crypto.getRandomValues(array);
          for (let i = 0; i < len; i++) pwd += chars[array[i] % chars.length];
        } else {
          for (let i = 0; i < len; i++) pwd += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return {
          primaryLabel: 'Generated Secure Password', primaryValue: pwd,
          copy: `Password (${len} chars): ${pwd}`,
          summary: `${len}-char secure password`,
          breakdown: [{ label: 'Length', value: `${len} Characters` }, { label: 'Entropy', value: 'WebCrypto CSPRNG' }]
        };
      },
      seo: { heading: 'Cryptographic Entropy', desc: 'Generates random strings locally using Web Crypto API.', formula: 'CSPRNG character sampling' }
    }
  ];

  const STORAGE_KEYS = {
    THEME: 'ilovecalc_theme_v2',
    HISTORY: 'ilovecalc_history_v2',
    ACTIVE: 'ilovecalc_active_v2'
  };

  function getInitialCalcId() {
    const hash = window.location.hash.replace('#', '').trim();
    if (hash && CALCULATORS.some(c => c.id === hash)) return hash;
    const saved = localStorage.getItem(STORAGE_KEYS.ACTIVE);
    if (saved && CALCULATORS.some(c => c.id === saved)) return saved;
    return 'emi-calc';
  }

  const state = {
    activeId: getInitialCalcId(),
    activeCategory: 'All',
    searchQuery: '',
    formValues: {},
    history: []
  };

  const dom = {
    themeBtn: document.getElementById('theme-toggle-btn'),
    themeIconSlot: document.getElementById('theme-icon-slot'),
    hamburger: document.getElementById('btn-hamburger'),
    drawerOverlay: document.getElementById('mobile-drawer-overlay'),
    drawerClose: document.getElementById('drawer-close-btn'),
    desktopList: document.getElementById('desktop-calc-list'),
    mobileList: document.getElementById('mobile-calc-list'),
    desktopCatTabs: document.getElementById('desktop-cat-tabs'),
    mobileCatTabs: document.getElementById('mobile-cat-tabs'),
    headerSearch: document.getElementById('header-search-input'),
    drawerSearch: document.getElementById('drawer-search-input'),
    toolCount: document.getElementById('sidebar-tool-count'),
    wsIcon: document.getElementById('ws-icon-wrap'),
    wsCat: document.getElementById('ws-cat-lbl'),
    wsTitle: document.getElementById('ws-title-lbl'),
    wsDesc: document.getElementById('ws-desc-lbl'),
    wsForm: document.getElementById('ws-form'),
    wsResult: document.getElementById('ws-result-card'),
    wsSeo: document.getElementById('ws-seo-card'),
    breadcrumbCat: document.getElementById('bc-cat'),
    breadcrumbTitle: document.getElementById('bc-title'),
    btnReset: document.getElementById('btn-reset-inputs'),
    historyList: document.getElementById('history-items-container'),
    historyCount: document.getElementById('history-count-badge'),
    btnClearHist: document.getElementById('btn-clear-history'),
    toast: document.getElementById('toast-popup')
  };

  function showToast(msg) {
    dom.toast.textContent = msg;
    dom.toast.classList.add('show');
    setTimeout(() => dom.toast.classList.remove('show'), 2600);
  }

  function copyText(txt) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(() => showToast('Copied result to clipboard!')).catch(() => fallbackCopy(txt));
    } else {
      fallbackCopy(txt);
    }
  }

  function fallbackCopy(txt) {
    const ta = document.createElement('textarea');
    ta.value = txt;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast('Copied result to clipboard!');
    } catch (e) {
      showToast('Copy failed.');
    }
    document.body.removeChild(ta);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    dom.themeIconSlot.innerHTML = theme === 'dark' ? ICONS.sun : ICONS.moon;
  }

  function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME);
    if (saved === 'light' || saved === 'dark') {
      applyTheme(saved);
    } else {
      const darkPref = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(darkPref ? 'dark' : 'light');
    }
  }

  const CATEGORIES = ['All', 'Finance', 'Health', 'Math', 'Conversion', 'Utility'];

  function renderCategories() {
    const html = CATEGORIES.map(cat => `
      <button type="button" class="cat-pill ${state.activeCategory === cat ? 'active' : ''}" data-cat="${cat}">${cat}</button>
    `).join('');
    dom.desktopCatTabs.innerHTML = html;
    dom.mobileCatTabs.innerHTML = html;
  }

  function renderDirectories() {
    const q = state.searchQuery.trim().toLowerCase();
    const filtered = CALCULATORS.filter(c => {
      const matchCat = state.activeCategory === 'All' || c.category === state.activeCategory;
      if (!matchCat) return false;
      if (!q) return true;
      return [c.title, c.category, c.subtitle, ...(c.keywords || [])].join(' ').toLowerCase().includes(q);
    });

    dom.toolCount.textContent = `${filtered.length} Tools`;

    const html = filtered.map(c => {
      const isActive = c.id === state.activeId;
      return `
        <button type="button" class="calc-btn ${isActive ? 'active' : ''}" data-calc-id="${c.id}">
          <div class="calc-btn-icon" aria-hidden="true">${c.icon}</div>
          <div class="calc-btn-text">
            <div class="calc-btn-title">${c.title}</div>
            <div class="calc-btn-sub">${c.category}</div>
          </div>
        </button>
      `;
    }).join('');

    dom.desktopList.innerHTML = html || '<div style="padding:1rem; text-align:center; color:var(--text-muted); font-size:0.8rem;">No calculators found.</div>';
    dom.mobileList.innerHTML = html || '<div style="padding:1rem; text-align:center; color:var(--text-muted); font-size:0.8rem;">No calculators found.</div>';
  }

  function getActiveCalc() {
    return CALCULATORS.find(c => c.id === state.activeId) || CALCULATORS[0];
  }

  function updateSEOMetadata(calc) {
    document.title = `${calc.title} — Free Online ${calc.category} Calculator | iLoveCalc`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `${calc.subtitle} Free, fast, mobile-friendly ${calc.title} on ilovescalc.com.`);
    }
    if (dom.breadcrumbCat) dom.breadcrumbCat.textContent = calc.category;
    if (dom.breadcrumbTitle) dom.breadcrumbTitle.textContent = calc.title;
  }

  function initFormValues(calc, override = null) {
    const vals = {};
    calc.inputs.forEach(inp => {
      vals[inp.id] = override && override[inp.id] !== undefined ? override[inp.id] : inp.default;
    });
    state.formValues = vals;
  }

  function renderWorkspace(override = null) {
    const calc = getActiveCalc();
    initFormValues(calc, override);
    updateSEOMetadata(calc);

    dom.wsIcon.innerHTML = calc.icon;
    dom.wsCat.textContent = calc.category;
    dom.wsTitle.textContent = calc.title;
    dom.wsDesc.textContent = calc.subtitle;

    const tipsHtml = calc.seo.tips
      ? `<h3>Key Insights</h3><ul>${calc.seo.tips.map(t => `<li>${t}</li>`).join('')}</ul>`
      : '';

    dom.wsSeo.innerHTML = `
      <h2>${calc.seo.heading}</h2>
      <p>${calc.seo.desc}</p>
      <div class="formula-tag"><strong>Standard Formula:</strong> ${calc.seo.formula}</div>
      ${tipsHtml}
    `;

    dom.wsForm.innerHTML = calc.inputs.map(inp => {
      const val = state.formValues[inp.id];
      if (inp.type === 'segment') {
        return `
          <div class="input-field-group">
            <div class="field-label-row"><span>${inp.label}</span></div>
            <div class="segmented-group">
              ${inp.options.map(o => `
                <button type="button" class="seg-pill ${String(val) === String(o.value) ? 'active' : ''}" data-field="${inp.id}" data-val="${o.value}">${o.label}</button>
              `).join('')}
            </div>
          </div>
        `;
      }

      return `
        <div class="input-field-group">
          <div class="field-label-row">
            <label for="inp-${inp.id}">${inp.label}</label>
          </div>
          <div class="input-wrap">
            ${inp.prefix ? `<span class="prefix">${inp.prefix}</span>` : ''}
            <input type="${inp.type || 'number'}" id="inp-${inp.id}" data-field="${inp.id}" class="calc-input ${inp.prefix ? 'has-prefix' : ''} ${inp.suffix ? 'has-suffix' : ''}" value="${val}" min="${inp.min ?? ''}" max="${inp.max ?? ''}" step="${inp.step ?? 'any'}" />
            ${inp.suffix ? `<span class="suffix">${inp.suffix}</span>` : ''}
          </div>
        </div>
      `;
    }).join('') + `
      <button type="button" id="btn-save-hist" class="btn-action">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
        <span>Save to History</span>
      </button>
    `;

    updateLiveOutput();
  }

  function updateLiveOutput() {
    const calc = getActiveCalc();
    const res = calc.compute(state.formValues);

    const breakdownRows = res.breakdown.map(b => `
      <div class="breakdown-row">
        <span>${b.label}</span>
        <span class="tabular-nums">${b.value}</span>
      </div>
    `).join('');

    dom.wsResult.innerHTML = `
      <div>
        <div class="result-header">
          <span class="result-lbl">Live Result</span>
          <button type="button" id="btn-copy-res" class="btn-outline" style="padding: 0.3rem 0.6rem; font-size: 0.72rem;">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <span>Copy</span>
          </button>
        </div>
        <div class="metric-main">
          <div class="metric-title">${res.primaryLabel}</div>
          <div class="metric-value tabular-nums">${res.primaryValue}</div>
        </div>
      </div>
      <div class="breakdown-table">
        ${breakdownRows}
      </div>
    `;

    const copyBtn = document.getElementById('btn-copy-res');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => copyText(res.copy));
    }

    return res;
  }

  function loadHistory() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
      state.history = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(state.history)) state.history = [];
    } catch (e) {
      state.history = [];
    }
    renderHistory();
  }

  function saveHistory() {
    const calc = getActiveCalc();
    const res = calc.compute(state.formValues);
    const item = {
      id: Date.now(),
      calcId: calc.id,
      title: calc.shortTitle || calc.title,
      value: res.primaryValue,
      summary: res.summary,
      values: { ...state.formValues },
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    if (state.history.length > 0 && state.history[0].calcId === item.calcId && state.history[0].value === item.value) {
      showToast('Already saved at top of history.');
      return;
    }

    state.history.unshift(item);
    if (state.history.length > 10) state.history = state.history.slice(0, 10);

    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(state.history));
    renderHistory();
    showToast('Saved calculation to history!');
  }

  function renderHistory() {
    dom.historyCount.textContent = `${state.history.length}/10`;
    if (state.history.length === 0) {
      dom.historyList.innerHTML = `<div class="history-empty-msg">No saved calculations yet. Adjust inputs and click Save.</div>`;
      return;
    }

    dom.historyList.innerHTML = state.history.map(h => `
      <div class="history-card-item" data-hist-id="${h.id}" role="button" tabindex="0" title="Click to reload">
        <div class="hc-top">
          <span class="hc-name">${h.title}</span>
          <span>${h.time}</span>
        </div>
        <div class="hc-val tabular-nums">${h.value}</div>
        <div class="hc-sum">${h.summary}</div>
      </div>
    `).join('');
  }

  function switchCalculator(id, overrideValues = null) {
    if (!CALCULATORS.some(c => c.id === id)) return;
    state.activeId = id;
    localStorage.setItem(STORAGE_KEYS.ACTIVE, id);
    if (history.replaceState) {
      history.replaceState(null, '', `#${id}`);
    }
    dom.drawerOverlay.classList.remove('open');
    renderDirectories();
    renderWorkspace(overrideValues);
  }

  function bindEvents() {
    dom.themeBtn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      applyTheme(cur === 'dark' ? 'light' : 'dark');
    });

    dom.hamburger.addEventListener('click', () => dom.drawerOverlay.classList.add('open'));
    dom.drawerClose.addEventListener('click', () => dom.drawerOverlay.classList.remove('open'));
    dom.drawerOverlay.addEventListener('click', (e) => {
      if (e.target === dom.drawerOverlay) dom.drawerOverlay.classList.remove('open');
    });

    const handleSearch = (e) => {
      state.searchQuery = e.target.value;
      renderDirectories();
    };
    dom.headerSearch.addEventListener('input', handleSearch);
    dom.drawerSearch.addEventListener('input', handleSearch);

    const handleCatClick = (e) => {
      const pill = e.target.closest('.cat-pill');
      if (!pill) return;
      state.activeCategory = pill.dataset.cat;
      renderCategories();
      renderDirectories();
    };
    dom.desktopCatTabs.addEventListener('click', handleCatClick);
    dom.mobileCatTabs.addEventListener('click', handleCatClick);

    const handleSelectCalc = (e) => {
      const btn = e.target.closest('.calc-btn');
      if (!btn) return;
      const id = btn.dataset.calcId;
      if (id) switchCalculator(id);
    };
    dom.desktopList.addEventListener('click', handleSelectCalc);
    dom.mobileList.addEventListener('click', handleSelectCalc);

    // Quick links in SEO footer / FAQ
    document.addEventListener('click', (e) => {
      const quickLink = e.target.closest('[data-jump-calc]');
      if (quickLink) {
        e.preventDefault();
        switchCalculator(quickLink.dataset.jumpCalc);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    window.addEventListener('hashchange', () => {
      const h = window.location.hash.replace('#', '').trim();
      if (h && CALCULATORS.some(c => c.id === h) && h !== state.activeId) {
        switchCalculator(h);
      }
    });

    dom.wsForm.addEventListener('input', (e) => {
      const t = e.target;
      if (t.dataset.field) {
        state.formValues[t.dataset.field] = t.value;
        updateLiveOutput();
      }
    });

    dom.wsForm.addEventListener('click', (e) => {
      const seg = e.target.closest('.seg-pill');
      if (seg) {
        const field = seg.dataset.field;
        const val = seg.dataset.val;
        state.formValues[field] = val;
        seg.parentElement.querySelectorAll('.seg-pill').forEach(p => p.classList.remove('active'));
        seg.classList.add('active');
        updateLiveOutput();
        return;
      }

      if (e.target.closest('#btn-save-hist')) {
        saveHistory();
      }
    });

    dom.btnReset.addEventListener('click', () => {
      renderWorkspace();
      showToast('Inputs reset to default.');
    });

    dom.btnClearHist.addEventListener('click', () => {
      if (state.history.length === 0) return;
      state.history = [];
      localStorage.removeItem(STORAGE_KEYS.HISTORY);
      renderHistory();
      showToast('History cleared.');
    });

    dom.historyList.addEventListener('click', (e) => {
      const card = e.target.closest('.history-card-item');
      if (!card) return;
      const hId = Number(card.dataset.histId);
      const found = state.history.find(h => h.id === hId);
      if (found) {
        switchCalculator(found.calcId, found.values);
        showToast(`Reloaded ${found.title} calculation.`);
      }
    });
  }

  document.getElementById('footer-year').textContent = new Date().getFullYear();
  initTheme();
  renderCategories();
  renderDirectories();
  renderWorkspace();
  loadHistory();
  bindEvents();
})();
