function PrintEven(No)
{
    if(No <= 0)
    {
        return
    }

    let iCnt = 0
    let Even = 2

    for(iCnt = 0; iCnt < No; iCnt++)
    {
        console.log(Even)
        Even = Even + 2
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

        PrintEven(iValue)

        rl.close()
    });
}

main();