/** 객체에서 특정 키값 빼고 싶을때  */
export function removeKey(obj: any, key: string | string[]) {
  if (Array.isArray(key)) {
    key.forEach((k) => {
      if (obj.hasOwnProperty(k)) {
        delete obj[k];
      }
    });
  } else {
    if (obj.hasOwnProperty(key)) {
      delete obj[key];
    }
  }
  return obj;
}
