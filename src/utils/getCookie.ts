export const getCookie = (cookieName: string | any[]) => {
  cookieName = cookieName + "=";
  const cookieData = document.cookie;
  let start = cookieData.indexOf(cookieName);
  let tokenValue = "";

  if (start !== -1) {
    start += cookieName.length;
    let end = cookieData.indexOf(";", start);
    if (end === -1) end = cookieData.length;
    tokenValue = cookieData.substring(start, end);
  }
  return decodeURI(tokenValue);
};
