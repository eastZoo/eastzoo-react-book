export async function removeHyphens(str: string) {
  // 문자열에서 "-"를 빈 문자열로 대체하여 "-"를 제거합니다.
  return str.replace(/-/g, "");
}
