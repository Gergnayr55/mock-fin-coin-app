const numberFormatter = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function formatNumber(num) {
  return numberFormatter.format(parseFloat(num));
}

export function isTooManyRequests(err) {
  return (
    err?.response?.status === 429 ||
    err?.response?.data?.status?.error_code === 429 ||
    err?.message === "Network Error"
  );
}
