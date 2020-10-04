let valueA = "";
let valueB = "";
let operator = "";

function print(text) {
  document.getElementById("screenText").innerText = text;
}

function clean() {
  print("");
  valueA = "";
  valueB = "";
  operator = "";
}

// TODO: Remove the following line after moving the HTML example to its own folder with global config for ESLint
// eslint-disable-next-line no-unused-vars
function setValue(number) {
  if (operator == "") {
    valueA += String(number);
    print(valueA);
  } else {
    valueB += String(number);
    print(valueB);
  }
}

// TODO: Remove the following line after moving the HTML example to its own folder with global config for ESLint
// eslint-disable-next-line no-unused-vars
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
