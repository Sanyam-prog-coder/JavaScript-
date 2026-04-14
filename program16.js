const { info } = require("console")

function MultFact(No)
{
    let iCnt = 0
    let iMult = 1

    for(iCnt = 1; iCnt <= No / 2; iCnt++)
    {
        if(No % iCnt == 0)
        {
            iMult = iMult * iCnt
        }
    }

    return iMult
}

function main()
{
    const readline = require("readline")

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
        let iRet = 0

        iRet = MultFact(iValue)

        console.log("Factorial of: "+iRet)

        rl.close()
    });
}

main();