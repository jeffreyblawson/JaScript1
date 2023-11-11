function submitData() {
  let data = FormData;
  var annualRate = NaN;
  var balance = NaN;
  balance = document.getElementById("init").value;
  let months = document.getElementById("term").value;
  annualRate = document.getElementById("rate").value;

  if (
    annualRate >= 0 &&
    months >= 0 &&
    balance >= 0 &&
    annualRate != NaN &&
    months != NaN &&
    balance != NaN
  ) {
    updateDOM(computerFutureValue(balance, annualRate, months), "green");
    return false;
  } else {
    updateDOM("Please enter valid values in all fields.", "red");
    return false;
  }
}
function updateDOM(value, color) {
  document.getElementById("output").style.color = color;
  document.getElementById("output").innerHTML = value;
}

function computerFutureValue(balance, annualRate, months) {
  var final = NaN;
  let text;
  var rate = months / 12;
  var interest = balance * annualRate * rate;
  final = Number(interest) + Number(balance);
  final = final.toFixed(2);
  text = "Your balance after " + months + " months will be " + " $" + final;
  document.getElementById("output").innerHTML = text;
  return text;
}
