function FactRev(No)
{
    let iCnt = 0

    for(iCnt = No / 2; iCnt >= 1; iCnt--)
    {
        if(No % iCnt == 0)
        {
            console.log(iCnt)
        }
    }
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

        FactRev(iValue)

        rl.close()
    });
}

main();