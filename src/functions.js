let valueA = "";
let valueB = "";
let operator = "";
let result = "";

function print(text) {
  document.getElementById("screenText").innerText = text;
}

function clean() {
  print("");
  valueA = "";
  valueB = "";
  operator = "";
}

function setValue(number) {
  if (operator == "") {
    valueA += String(number);
    print(valueA);
  } else {
    valueB += String(number);
    print(valueB);
  }
}

function setOperator(operation) {
  if (valueA !== "") {
    operator = operation;
  }
}

function handleEqualsClick() {
  if (valueA !== "" && valueB !== "") {
    if (operator == "/" && valueB == "0") {
      clean();
      print("Error");
    } else {
      const result = computeResult(Number(valueA), Number(valueB), operator);
      clean();
      print(result);
    }
  }
}

function computeResult(a, b, operator) {
  let result = null;

  switch (operator) {
    case "+": {
      result = a + b;
      break;
    }
    case "-": {
      result = a - b;
      break;
    }
    case "*": {
      result = a * b;
      break;
    }
    case "/": {
      result = a / b;
      break;
    }
  }

  return result;
}

const equal = document.querySelector(".equal");

equal.addEventListener("click", handleEqualsClick);
