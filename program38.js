function Factorial(No)
{
    if(No < 0)
    {
        No = -No
    }

    let iCnt = 0
    let iFact = 1

    for(iCnt = 1; iCnt <= No; iCnt++)
    {
        iFact = iFact * iCnt
    }

    return iFact
}

function main()
{
    const realine = require("readline")

    const rl = realine.createInterface
    ({
        input: process.stdin,
        output: process.stdout
    });

    rl.question
    ("Enter Number: ",function(input)
    {
        let iValue = parseInt(input)
        let iRet = 0

        iRet = Factorial(iValue)

        console.log("Factorial of "+ iValue + " : "+iRet)

        rl.close()
    })
}

main()