export const donateAmountsNgn = [
  2500, 5000, 10000, 25000, 50000, 100000,
] as const;

export function formatNgn(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}
