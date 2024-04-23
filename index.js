import inquirer from "inquirer";
let myBalance = 50000; //Dollar $
let myPin = 12345;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin?",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select options",
            type: "list",
            choices: ["withdrawal", "check balance", "fast cash"]
        }
    ]);
    if (operationAnswer.operation === "withdrawal") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (amountAnswer.amount > myBalance) {
            console.log("Insufficient balance! You cannot withdraw more than your current balance.");
        }
        else {
            myBalance -= amountAnswer.amount;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(`Your balance is: ${myBalance}`);
    }
    else if (operationAnswer.operation === "fast cash") {
        let fastCashAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Select your fast cash amount",
                type: "list",
                choices: ["1000", "3000", "7000", "15000", "20000", "50000"]
            }
        ]);
        if (fastCashAnswer.amount > myBalance) {
            console.log("Insufficient balance! You cannot withdraw more than your current balance.");
        }
        else {
            myBalance -= fastCashAnswer.amount;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect pin code!!!");
}
