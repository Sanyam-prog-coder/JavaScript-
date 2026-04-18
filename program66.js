function DisplayDigit(No)
{
    let Digit = 0

    if(No < 0)
    {
        No = -No
    }

    while(No != 0)
    {
        Digit = No % 10

        console.log(Digit)

        No = Math.floor(No / 10)
    }
}

function main()
{
    const realine = require("readline")

    const rl = realine.createInterface
    ({
        input: process.stdin,
        output: process.stdout
    })

    rl.question
    ("Enter Number: ",function(input)
    {
        let Value = parseInt(input)

        DisplayDigit(Value)

        rl.close()
    })
}

main()