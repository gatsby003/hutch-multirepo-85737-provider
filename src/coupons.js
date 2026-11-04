export function couponFor(code) {
  if (code !== "WELCOME") return { discountBps: 0, maxDiscountMinor: 0 };
  return { discountBps: 1250, maxDiscountMinor: 2500 };
}
