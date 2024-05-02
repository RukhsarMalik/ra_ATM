#! /usr/bin/env node
import inquirer from "inquirer";
import ListPrompt from "inquirer/lib/prompts/list.js";

let myBalance = 20000;
let myPin = 1234;
console.log(`Your Balance is ${myBalance}`)

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin",
            type: "number"
        }
    ])
if (pinAnswer.pin === myPin)
    {
        console.log("Your pin code is correct")
        let operationAnswer = await inquirer.prompt(
            {
                name: "operation",
                message: "What do you want next?",
                type: "list",
                choices: ["Withdraw", "Check Balance", "Fast Cash"]

            }
        )
        if (operationAnswer.operation === "Withdraw")
            {
                let amountAnswer = await inquirer.prompt
                (
                    {
                        name: "Amount",
                        message: "Enter Your Amount",
                        type: "number"

                    }
                )
                if (amountAnswer.Amount > myBalance)
                    {
                        console.log("Insufficient Balance")
                    }
                else
                {
                    myBalance -= amountAnswer.Amount
                    console.log(`Your remaining Balance is ${myBalance}`)
                }
            }
        else if (operationAnswer.operation === "Check Balance"){
            console.log(`Your Balance is ${myBalance}`)
            
        }
        else if (operationAnswer.operation === "Fast Cash")
            {
                let amount = await inquirer.prompt(
                    {
                        name: "fastCash",
                        message: "Select your amount",
                        type: "list",
                        choices: ["500", "1000","2000", "5000", "10000"]

                    }
                )
                if (amount.fastCash === "500")
                    {
                        myBalance -= amount.fastCash
                        console.log(`You remaining balance is ${myBalance}`)

                    }
                else if (amount.fastCash === "1000")
                    {
                        myBalance -= amount.fastCash
                        console.log(`You remaining balance is ${myBalance}`)

                    }
                else if (amount.fastCash === "2000")
                    {
                        myBalance -= amount.fastCash
                        console.log(`You remaining balance is ${myBalance}`)

                    }
                else if (amount.fastCash === "5000")
                    {
                        myBalance -= amount.fastCash
                        console.log(`You remaining balance is ${myBalance}`)

                    }
                else if (amount.fastCash === "10000")
                    {
                        myBalance -= amount.fastCash
                        console.log(`You remaining balance is ${myBalance}`)

                    }
               
            }
        else if (operationAnswer.operation === "Check Balance")
            {
                console.log(`Your Acount Balance is ${myBalance}`)

            }
    
             
        

}
else{
    console.log("Invalid Pin")
}
