export const CATEGORY_FEE: Record<string, number> = {
  default: 0.08,
  electronics: 0.06,
  fashion: 0.12,
  beauty: 0.10,
  home: 0.09,
};

export function estimateFees(price: number, category: string, fulfillment: "fbm"|"fbl") {
  const rate = CATEGORY_FEE[category] ?? CATEGORY_FEE.default;
  const fulfillmentFee = fulfillment === "fbm" ? 12000 : 22000;
  const fee = Math.round(price * rate + fulfillmentFee);
  const payout = Math.max(0, price - fee);
  return { fee, payout };
}
