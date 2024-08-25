//Coding Challenge #1
//Mark and John are trying to compare their BMI (Body Mass Index), which is
//calculated using the formula:
//BMI = mass / height ** 2 = mass / (height * height) (mass in kgand height in meter).
//Your tasks:
//1. Store Mark's and John's mass and height in variables

//2. Calculate both their BMIs using the formula (you can even implement both versions)
// Tính BMI cho Dữ liệu 1
let bmiMark1 = canNangMark1 / (chieuCaoMark1 * 2);
let bmiJohn1 = canNangJohn1 / (chieuCaoJohn1 * 2);

// Tính BMI cho Dữ liệu 2
let bmiMark2 = canNangMark2 / (chieuCaoMark2 * 2);
let bmiJohn2 = canNangJohn2 / (chieuCaoJohn2 * 2);


//3. Create a Boolean variable 'markHigherBMI' containing information aboutwhether Mark has a higher BMI than John.
//Test data:
// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
// Kiểm tra liệu BMI của Mark có cao hơn John hay không

// Dữ liệu 1
var canNangMark1 = 78; // kg
var chieuCaoMark1 = 1.69; // mét
var canNangJohn1 = 92; // kg
var chieuCaoJohn1 = 1.95; // mét

// Dữ liệu 2
var canNangMark2 = 95; // kg
var chieuCaoMark2 = 1.88; // mét
var canNangJohn2 = 85; // kg
var chieuCaoJohn2 = 1.76; // mét

let markCaoBMI1 = bmiMark1 > bmiJohn1;
let markCaoBMI2 = bmiMark2 > bmiJohn2;

console.log(`Dữ liệu 1 - BMI của Mark: ${bmiMark1.toFixed(2)}, BMI của John: ${bmiJohn1.toFixed(2)}`);
console.log(`Dữ liệu 2 - BMI của Mark: ${bmiMark2.toFixed(2)}, BMI của John: ${bmiJohn2.toFixed(2)}`);

// In ra ai có BMI cao hơn
if (bmiMark1 > bmiJohn1) {
    console.log("Dữ liệu 1: Mark có BMI cao hơn John.");
  } else if (bmiMark1 < bmiJohn1) {
    console.log("Dữ liệu 1: John có BMI cao hơn Mark.");
  } else {
    console.log("Dữ liệu 1: Mark và John có BMI bằng nhau.");
  }
  
  if (bmiMark2 > bmiJohn2) {
    console.log("Dữ liệu 2: Mark có BMI cao hơn John.");
  } else if (bmiMark2 < bmiJohn2) {
    console.log("Dữ liệu 2: John có BMI cao hơn Mark.");
  } else {
    console.log("Dữ liệu 2: Mark và John có BMI bằng nhau.");
  }