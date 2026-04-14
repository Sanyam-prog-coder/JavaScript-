function CheckEvenOdd(No)
{
    if(No % 2 == 0)
    {
        console.log("Even")
    }
    else
    {
        console.log("Odd")
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
    ("Enter Number: ",function(input)
    {
        let Number = parseInt(input)

        CheckEvenOdd(Number)

        rl.close()
    });
}

main();