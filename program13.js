function DisplayEvenFactor(No)
{
    let i = 0

    if(No <= 0)
    {
        No = -No
    }

    for(i = 1; i < No; i++)
    {
        if((No % i == 0) && (i % 2 == 0))
        {
            console.log(i)
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
    ("Enter Number: ", function(input)
    {
        let iValue = parseInt(input)

        DisplayEvenFactor(iValue)

        rl.close()
    });
}

main();