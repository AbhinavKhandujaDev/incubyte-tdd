function add(str = "//|1|2\n|3\n|-10|-11") {
  const hasDelimiter = str.startsWith("//");
  let delmtr = ",";

  let strWithoutDelmtr = str;

  if (hasDelimiter) {
    delmtr = str[2];
    strWithoutDelmtr = str.slice(3).replace("\n", "");
  } else {
    strWithoutDelmtr = str.replace("\n", ",");
  }

  const numbers = strWithoutDelmtr.split(delmtr);

  let count = 0;
  const negNums = [];

  numbers.forEach((num) => {
    const number = Number(num);
    if (!number && number !== 0 && number !== "") {
      throw Error("Found non numeric character");
    }

    if (number < 0) {
      negNums.push(number);
    }

    count += number || 0;
  });

  if (negNums.length) {
    throw Error(`Negative numbers not allowed ${negNums}`);
  }

  return count;
}

export default add;
