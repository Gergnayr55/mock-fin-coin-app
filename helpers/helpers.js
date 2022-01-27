let nf = new Intl.NumberFormat("en-US");
export function formatDecimals(num) {
  const formattedNum = nf.format(parseFloat(num).toFixed(2));

  if (num && (formattedNum === "1" || !formattedNum.includes("."))) {
    console.log(formattedNum);
    return `${formattedNum}.00`;
  } else return formattedNum;
}
