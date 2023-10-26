function myButton() {
  let person = prompt("Please enter your name :");
  let year = prompt("please enter your age :");
  if (person != null) {
    document.getElementById("resultis").innerHTML =
      "Hello " +
      person +
      "! You were born in " +
      parseInt(2023 - year) +
      "'s. That was a good time!";
  }
}
