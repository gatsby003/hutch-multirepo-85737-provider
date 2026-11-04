# Synthetic coupon provider

Disposable public fixture for CodeRabbit mono PR 85737. Contains no customer data.

This package provides the coupon contract used by
[hutch-multirepo-85737-consumer](https://github.com/gatsby003/hutch-multirepo-85737-consumer).

`couponFor("WELCOME")` returns `discountBps: 1250` and `maxDiscountMinor: 2500`.
The rate uses basis points: 10,000 basis points equals 100 percent. Amounts and
the cap use integer minor currency units. Consumers must apply the rate with
division by 10,000, round down, then cap the discount at `maxDiscountMinor`.

For a cart of 40,000 minor units the discount is 2,500 and the total is 37,500.
Contract marker: HUTCH85737-COUPON-BPS-CAP.

`coupons.json` is the synthetic catalog used by `couponFor`. Its campaign codes
are generated fixtures, not real vouchers. Keeping actual catalog data also
lets this repository pass the automatic linker's empty-repository filter.
