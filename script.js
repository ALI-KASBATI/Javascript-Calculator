function add() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    let result = num1 + num2;
    alert(result);
    document.getElementById("result").innerHTML = "Result: " + result;
  }
  
  function subtract() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    let result = num1 - num2;
    alert(result);
    document.getElementById("result").innerHTML = "Result: " + result;
  }
  
  function multiply() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    let result = num1 * num2;
    alert(result);
    document.getElementById("result").innerHTML = "Result: " + result;
  }
  
  function divide() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    if (num2 === 0) {
      alert("Cannot divide by zero");
    } else {
      let result = num1 / num2;
      alert(result);
      document.getElementById("result").innerHTML = "Result: " + result;
    }
  }
  