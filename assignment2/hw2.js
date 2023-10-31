function getMotto() {
  let motto = prompt(
    "Enter your favorite motto: ",
    "The bigger they are the harder they fall!"
  );
  return motto;
}

function getCount() {
  let count = prompt("How many times do you want to repeat your motto?");
  return parseFloat(count);
}

function printMotto() {
  let motto = getMotto();
  let loop = getCount();
  var x = "",
    i;
  for (i = 1; i <= loop; i++) {
    x = x + "<p>" + motto + "</p>";
    console.log(motto);
  }
  document.getElementById("demo").innerHTML = x;
}
