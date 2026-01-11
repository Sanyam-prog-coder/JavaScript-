//////////////////////////////////////////////////////////////////////////
// Function : Multiply
// Description  : Accept three No. and print its Multiplication
// Auther : Sanyam BhupendraKuamr Ravne
// Date : 11-01-2026
//////////////////////////////////////////////////////////////////////////

const readline = require("readline");

function Multiply(No1, No2, No3)
{
    let Ans = 1;

    if(No1 == 0 && No2 == 0 && No3 == 0)
    {
        return 0;
    }

    if(No1 != 0)
    {
        Ans = Ans * No1;
    }

    if(No2 != 0)
    {
        Ans = Ans * No2;
    }

    if(No3 != 0)
    {
        Ans = Ans * No3;
    }

    return Ans;
}

function main()
{
    const rl = readline.createInterface(
        {
            input : process.stdin,
            output : process.stdout
        });

    rl.question("Please Enter First Number : ",function(input1)
    {rl.question("Please Enter Second Number : ",function(input2)
    {rl.question("Please Enter Third Number : ",function(input3){
        
        let iValue1 = parseInt(input1);
        let iValue2 = parseInt(input2);
        let iValue3 = parseInt(input3);

        let iRet = Multiply(iValue1,iValue2,iValue3);

        console.log(iRet);

        rl.close();
    });
    });
    });
}

main();

/*
Please Enter First Number : 15
Please Enter Second Number : 18
Please Enter Third Number : 16
            
Output : 4320
*/