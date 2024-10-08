function add(str = "//;\n1;2") {
  const hasDelimiter = str.startsWith("//");
  let delmtr = ",";

  if (hasDelimiter) {
    delmtr = str[2];
  }
  const strWithoutDelmtr = str.slice(3).replace("\n", "");

  const numbers = strWithoutDelmtr.split(delmtr);

  let count = 0;
  numbers.forEach((num) => {
    const number = Number(num);
    if (!number) {
      throw Error("Found non numeric character");
    }

    if (number < 0) {
      throw Error("Found negative number");
    }

    count += number;
  });

  return count;
}

console.log(add());
