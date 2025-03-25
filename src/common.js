//获取当前时间YYYY-MM-DD
export function getCurDate() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  month = month.toString().padStart(2, "0");
  day = day.toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

//向sessionStorage里面存一个对象
export function setSessionStorage(keyStr, value) {
  sessionStorage.setItem(keyStr, JSON.stringify(value));
}

//从sessionStorage里面取出一个对象
export function getSessionStorage(keyStr) {
  const str = sessionStorage.getItem(keyStr);
  if (str === "" || str === null || !str) {
    return null;
  } else {
    return JSON.parse(str);
  }
}

export function removeSessionStorage(keyStr) {
  sessionStorage.removeItem(keyStr);
}

export function setLocalStorage(keyStr, value) {
  localStorage.setItem(keyStr, JSON.stringify(value));
}

export function getLocalStorage(keyStr) {
  const str = localStorage.getItem(keyStr);
  if (!str) {
    return null;
  }
  return JSON.parse(str);
}

export function removeLocalStorage(keyStr) {
  localStorage.removeItem(keyStr);
}
