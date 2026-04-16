const numberFormatter = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function formatNumber(num: number): string {
  return numberFormatter.format(num);
}

export function isTooManyRequests(err: unknown): boolean {
  if (typeof err !== "object" || err === null) return false;
  const e = err as { response?: { status?: number; data?: { status?: { error_code?: number } } }; message?: string };
  return (
    e?.response?.status === 429 ||
    e?.response?.data?.status?.error_code === 429 ||
    e?.message === "Network Error"
  );
}
