//////////////////////////////////////////////////////////////////////////
// Function : CheckGreater
// Description : Accept one number and check whether it is greater than 100
// Author : Sanyam BhupendraKumar Ravne
// Date : 11-01-2026
//////////////////////////////////////////////////////////////////////////

const readline = require("readline");

function CheckGreater(No)
{
    if(No > 100)
    {
        return true;
    }
    return false;
}

function main()
{
    const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
    );

    rl.question("Please enter a number: ", function(userInput) 
    {
        const NumberValue = parseInt(userInput);
        let bRet = CheckGreater(NumberValue);

        if(bRet == true)
        {
            console.log("Greater than 100");
        }
        else
        {
            console.log("Smaller than  100");
        }

        rl.close();
    }
    );
}

main();
