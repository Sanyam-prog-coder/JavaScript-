function CheckEven(No)
{
    if(No % 2 == 0)
    {
        return true
    }
    else
    {
        return false
    }
}

function main()
{
    const readline = require("readline");

    const rl = readline.createInterface
    (
        {
            input: process.stdin,
            output: process.stdout
        }
    );

    rl.question
    ("Enter Number: ",function(input)
    {
        let iValue = parseInt(input)
        let bRet = CheckEven(iValue)

        if(bRet === true)
        {
            console.log(iValue+ " Number is Even")
        }
        else
        {
            console.log(iValue+ " Number is Odd")
        }

        rl.close()
    });
}

main();