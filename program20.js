function SumNonFact(No)
{
    let iCnt = 0
    let SumFact = 0
    let SumNonFact = 0

    for(iCnt = 1; iCnt < No ; iCnt++)
    {
        if(No % iCnt == 0)
        {
            SumFact = SumFact + iCnt
        }
        else
        {
            SumNonFact = SumNonFact + iCnt
        }
    }
    return SumFact - SumNonFact
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
    ("Enter Number: ", function(input)
    {
        let iValue = parseInt(input)

        let iRet = SumNonFact(iValue)

        console.log("Summation non factores of "+iValue+" : "+iRet)

        rl.close()
    });
}

main();