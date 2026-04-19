function CountRange(No)
{
    let Digit = 0
    let Count = 0

    if(No < 0)
    {
        No = -No
    }

    while(No != 0)
    {
        Digit = No % 10

        if(Digit > 3 && Digit < 7)
        {
            Count++
        }
        No = Math.floor(No / 10)
    }

    return Count
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
        let iRet = 0

        iRet = CountRange(Value)

        console.log(iRet)

        rl.close()
    })
}

main()