function MultDigit(No)
{
    let Digit = 0
    let Mult = 1

    if(No < 0)
    {
        No = -No
    }

    while(No != 0)
    {
        Digit = No % 10

        Mult = Digit * Mult
        
        No = Math.floor(No / 10)
    }

    return Mult
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

        iRet = MultDigit(Value)

        console.log(iRet)

        rl.close()
    })
}

main()