function DisplayFactore(No)
{
    if(No <= 0)
    {
        return
    }

    let iCnt = 0

    for(iCnt = 1; iCnt <= No / 2; iCnt++)
    {
        if((No % iCnt == 0) && (iCnt % 2 == 0))
        {
            console.log(iCnt)
        }
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

        DisplayFactore(iValue)

        rl.close()
    });
}

main();