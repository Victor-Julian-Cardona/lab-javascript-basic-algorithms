let hacker1 = prompt("What is the driver's name?")
console.log("The diver's name is " + hacker1)
let hacker2 = prompt("What is the navigator's name?")
console.log("The navigator's name is " + hacker2)

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
}
else if (hacker2.length > hacker1.length) {
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}
else if (hacker2.length == hacker1.length) {
  console.log("Wow, you both hahve equally long names, " + hacker2.length + " characters!")
}

let capital = ""

for (let i = 0; i < hacker1.length; i++) {
  capital += hacker1[i].toUpperCase()
  if (i != (hacker1.length - 1)) {
    capital += " "
  }
}
console.log(capital)

let reverse = ""

for (let i = (hacker2.length - 1); i >= 0; i--) {
  reverse += hacker2[i]
}
console.log(reverse)

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else if (hacker1 == hacker2) {
  console.log("What?! You both have the same name?")
}