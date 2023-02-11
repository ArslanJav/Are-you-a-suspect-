//write your scripts here
let firstName;
let age;
let height;
let gender;
let results;

function suspect() {
  firstName = document.getElementById("name").value;
  age = document.getElementById("age").value;
  height = document.getElementById("height").value;
  gender = document.getElementById("gender").value;
  results = document.getElementById("result").value;

  // if male and age between 35 and 50 and height greater than 180, he is a suspect

  if (gender == "male" && age >= 35 && age <= 50 && height >= 180) {
    document.getElementById("result").innerHTML = `${firstName} is a suspect`;
    document.getElementById("suspect").src = "images/suspect.png";
  }
  // if female then she is not a suspect
  else if (gender == "female") {
    document.getElementById(
      "result"
    ).innerHTML = `${firstName} is NOT a suspect`;
    document.getElementById("suspect").src = "images/nofemale.png";
  }
  // if male does not meet the criteria of age and height then he is not a suspect
  else {
    document.getElementById(
      "result"
    ).innerHTML = `${firstName} is NOT a suspect`;
    document.getElementById("suspect").src = "images/nomale.png";
  }
}

document.getElementById("enterButton").addEventListener("click", suspect);
