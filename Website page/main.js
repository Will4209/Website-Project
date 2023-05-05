// Javascript Quiz

// Add Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let input1 = document.getElementById("Q1").value.toLowerCase();
  let input2 = document.getElementById("Q2").value.toLowerCase();
  let input3 = document.getElementById("Q3").value.toLowerCase();
  let input4 = document.getElementById("Q4").value.toLowerCase();

  let result1 = 0;
  let result2 = 0;
  let result3 = 0;
  let result4 = 0;

  // Process & Output
  if (input1 == "nba") {
    document.getElementById("Q1").style.backgroundColor = "green";
    document.getElementById("out1").innerHTML = `Correct!`;
    result1 = 1;
  } else {
    document.getElementById("Q1").style.backgroundColor = "red";
    document.getElementById(
      "out1"
    ).innerHTML = `Incorrect, the correct answer is nba`;
    result1 = 0;
  }

  if (input2 == "lebron james") {
    document.getElementById("Q2").style.backgroundColor = "green";
    document.getElementById("out2").innerHTML = `Correct!`;
    result2 = 1;
  } else {
    document.getElementById("Q2").style.backgroundColor = "red";
    document.getElementById(
      "out2"
    ).innerHTML = `Incorrect, the correct answer is lebron james`;
    result2 = 0;
  }

  if (input3 == "1891") {
    document.getElementById("Q3").style.backgroundColor = "green";
    document.getElementById("out3").innerHTML = `Correct!`;
    result3 = 1;
  } else {
    document.getElementById("Q3").style.backgroundColor = "red";
    document.getElementById(
      "out3"
    ).innerHTML = `Incorrect, the correct answer is 1891`;
    result3 = 0;
  }

  if (input4 == "30" || input4 == "thirty") {
    document.getElementById("Q4").style.backgroundColor = "green";
    document.getElementById("out4").innerHTML = `Correct!`;
    result4 = 1;
  } else {
    document.getElementById("Q4").style.backgroundColor = "red";
    document.getElementById(
      "out4"
    ).innerHTML = `Incorrect, the correct answer is 30 or thirty`;
    result4 = 0;
  }

  let score = ((result1 + result2 + result3 + result4) / 4) * 100;
  let sum = result1 + result2 + result3 + result4;

  if (sum == 0 || sum == 1) {
    document.getElementById("output").innerHTML = `Please Try Again`;
  } else if (sum == 2) {
    document.getElementById("output").innerHTML = `Just 2 More!`;
  } else if (sum == 3) {
    document.getElementById("output").innerHTML = `Almost There!`;
  } else if (sum == 4) {
    document.getElementById("output").innerHTML = `Great Job!`;
  }
  document.getElementById("scores").innerHTML =
    `You got ` + sum + `/4! (` + score + `%)`;
}
s;
