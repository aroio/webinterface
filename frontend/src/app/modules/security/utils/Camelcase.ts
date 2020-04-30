/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2018 Braune Digital GmbH
 */

export default class CamelCase {
  static preserveCamelCase(str): string {
    let isLastCharLower = false;
    let isLastCharUpper = false;
    let isLastLastCharUpper = false;

    for (let i = 0; i < str.length; i++) {
      const c = str[i];

      if (isLastCharLower && /[a-zA-Z]/.test(c) && c.toUpperCase() === c) {
        str = str.substr(0, i) + '-' + str.substr(i);
        isLastCharLower = false;
        isLastLastCharUpper = isLastCharUpper;
        isLastCharUpper = true;
        i++;
      } else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(c) && c.toLowerCase() === c) {
        str = str.substr(0, i - 1) + '-' + str.substr(i - 1);
        isLastLastCharUpper = isLastCharUpper;
        isLastCharUpper = false;
        isLastCharLower = true;
      } else {
        isLastCharLower = c.toLowerCase() === c;
        isLastLastCharUpper = isLastCharUpper;
        isLastCharUpper = c.toUpperCase() === c;
      }
    }

    return str;
  }

  static toCamelCase(str: string): string {
    if (arguments.length > 1) {
      str = Array.from(arguments)
        .map(x => x.trim())
        .filter(x => x.length)
        .join('-');
    } else {
      str = str.trim();
    }

    if (str.length === 0) {
      return '';
    }

    if (str.length === 1) {
      return str.toLowerCase();
    }

    if (/^[a-z0-9]+$/.test(str)) {
      return str;
    }

    const hasUpperCase = str !== str.toLowerCase();

    if (hasUpperCase) {
      str = CamelCase.preserveCamelCase(str);
    }

    return str
      .replace(/^[_.\- ]+/, '')
      .toLowerCase()
      .replace(/[_.\- ]+(\w|$)/g, (m, p1) => p1.toUpperCase());
  }

  static obj(object): object {
    const keys: Array<string> = Object.keys(object);
    keys.forEach(key => {
      const v: any = object[key];
      delete object[key];
      object[CamelCase.toCamelCase(key)] = v;
    });
    return object;
  }

  static arr(arr): Array<object> {
    let r = [];
    arr.forEach(obj => {
      const keys: Array<string> = Object.keys(obj);
      keys.forEach(key => {
        const v: any = obj[key];
        delete obj[key];
        obj[CamelCase.toCamelCase(key)] = v;
      });
      r.push(obj);
    })

    return r;
  }
}
