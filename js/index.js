"use strict";
//First
let check = prompt("Enter data");
if (check == false) {
  check = alert("Not all field is filling ");
} else {
  check = alert("All field is filling");
}
//Second
//Если делать через два alerta то происходит не додавання а имення конкатинация. Так что как такое пофиксить я не знаю.
let firtsNum = prompt("Enter number from 1 to 10");
if (firtsNum >= 10) {
  alert("More than 10");
} else if (firtsNum < 10) {
  alert("The value less than 10");
}
//Third
let word = prompt("Print JavaScript: ");
if (word.includes("JavaScript")) {
  alert("Exelent, you know what is JavaScript!!!");
} else {
  alert("Try again, you have mistakes");
}
//Fourth
let num = prompt("Enter number from 10 to 20");
if (num > 10 && num < 20) {
  alert("This number is in range from 10 to 20, all right");
} else {
  alert(
    "Please, try again, you need to eneter the number in range from 10 to 20"
  );
}
//Fifth
let form = alert(
  "Please enter next datas: name(not less than 3 symbols), your email and password"
);
let userName = prompt("Your name:");
if (userName.length < 3) {
  alert("Try again, uncorrect name!!!");
} else {
  alert("Next step");
}
let email = prompt("Enter your email");
if (email.includes("@.")) {
  alert("All right, email save");
} else {
  alert(
    "Plase check that your email has . after symbol @. Example: example@.com"
  );
}
let password = prompt("Enter your password");
if (password.length < 6) {
  alert("Sorry but your password unsave, it should have more than 6 symbols");
} else {
  alert("Your password correct");
}
