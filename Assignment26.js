//////////////////////////////////////////////////////////////////////////
// Function     : main
// Description  : Accept Name from user and print that Name
// Author       : Sanyam BhupendraKumar Ravne
// Date         : 11/01/2026
//////////////////////////////////////////////////////////////////////////

const readline = require("readline");

function main() 
{
    const rl = readline.createInterface(
        {
            input: process.stdin,
            output: process.stdout
        }
    );

    rl.question("Please Enter Full Name : ", function (name) 
    {
        console.log("Your Name is " + name);
        rl.close();
    }
    );
}

main();
//////////////////////////////////////////////////////////////////////////
// Input : Sanyam Ravne     Output : Sanyam Ravne
//////////////////////////////////////////////////////////////////////////