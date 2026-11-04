"""Synthetic coupon contract, shared with the JavaScript package."""


def coupon_for(code):
    if code == "WELCOME":
        return {"discount_bps": 1250, "max_discount_minor": 2500}
    return {"discount_bps": 0, "max_discount_minor": 0}
