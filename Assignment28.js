//////////////////////////////////////////////////////////////////////////
// Function     : CheckEqual
// Description  : Accept two numbers and check whether they are equal
// Author       : Sanyam BhupendraKumar Ravne
// Date         : 11-01-2026
//////////////////////////////////////////////////////////////////////////

const readline = require("readline");

function CheckEqual(a, b)
{
    return (a === b);
}

function main()
{
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Please Enter First Number : ", function(input1) 
    {
        rl.question("Please Enter Second Number : ", function(input2) 
        {
            let iValue1 = parseInt(input1);
            let iValue2 = parseInt(input2);

            let bRet = CheckEqual(iValue1, iValue2);

            if (bRet === true)
            {
                console.log("Equal");
            }
            else
            {
                console.log("Not Equal");
            }

            rl.close();
        });
    });
}

main();

//////////////////////////////////////////////////////////////////////////
// Input : 11,11    Output : Equal
// Input : 11,15    Output : Not Equal
//////////////////////////////////////////////////////////////////////////