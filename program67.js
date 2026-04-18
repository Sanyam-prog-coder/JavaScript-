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

        if(Digit == 0)
        {
            return true
        }
        No = Math.floor(No / 10)
    }
    return false
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
        let bRet = false

        bRet = DisplayDigit(Value)

        if(bRet == true)
        {
            console.log("It contains Zero")
        }
        else
        {
            console.log("It Not Contains Zero")
        }

        rl.close()
    })
}

main()