export {Cookies};

class Cookies{
 static createCookie(key, value) {
    let cookie = escape(key) + "=" + escape(value) + ";";
    document.cookie = cookie;
    console.log(cookie);
    console.log("Creating new cookie with key: " + key + " value: " + value);
  }

 static readCookie(name) {
    let key = name + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
              cookie = cookie.substring(1, cookie.length);
          }
      if (cookie.indexOf(key) === 0) {
              return cookie.substring(key.length, cookie.length);
          }
    }
    return null;
  }
  static deleteCookie(name) {
    Cookies.createCookie(name, "", -1);
  }
}