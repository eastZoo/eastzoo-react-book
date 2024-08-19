/**
 *
 * @param money 숫자|문자 타입
 * @returns error = -1
 * @returns "10000" => 10,000
 * @returns 10000 => 10,000
 */
export default function CommaConverter(
  money: string | number | null | undefined
) {
  // money로 전달된 숫자값의 타입이 문자열일때
  if (typeof money == "string") {
    var number = parseFloat(money.replace(/,/g, ""));
    return number.toLocaleString();
  }
  // money로 전달된 숫자값의 타입이 숫자일때
  if (typeof money == "number") {
    return money.toLocaleString();
  }
  // undefined || null
  return -1;
}
