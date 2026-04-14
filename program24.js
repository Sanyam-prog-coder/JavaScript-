function CheckNumberType(Num)
{
    if(Num > 0)
    {
        console.log("It is a positive Number")
    }
    else if(Num < 0)
    {
        console.log("It is negative Number")
    }
    else
    {
        console.log("It is a Zero")
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

        CheckNumberType(Number)

        rl.close()
    });
}

main()