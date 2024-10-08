function add(str = "//;\n1;2") {
  const hasDelimiter = str.startsWith("//");
  let delmtr = ",";

  let strWithoutDelmtr = str;

  if (hasDelimiter) {
    delmtr = str[2];
    strWithoutDelmtr = str.slice(3).replace("\n", "");
  }

  const numbers = strWithoutDelmtr.split(delmtr);

  let count = 0;

  numbers.forEach((num) => {
    const number = Number(num);
    if (!number && number !== 0) {
      throw Error("Found non numeric character");
    }

    if (number < 0) {
      throw Error(`Negative numbers not allowed ${number}`);
    }

    count += number;
  });

  return count;
}

export default add;
