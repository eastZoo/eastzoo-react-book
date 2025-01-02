export function CommaConverter(money?: number): string {
  if (money == null || money === 0) {
    return "0";
  }
  return Number(money).toLocaleString();
}

/** 서버에서 오는 cost값은 number */
export function removeCommas(value: string): string {
  return value?.toString().replace(/,/g, "");
}
