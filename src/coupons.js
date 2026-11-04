import coupons from "../coupons.json" with { type: "json" };

export function couponFor(code) {
  return coupons[code] ?? { discountBps: 0, maxDiscountMinor: 0 };
}
