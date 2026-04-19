function CountDiff(No)
{
    let Digit = 0
    let Sum = 0
    let Sub = 0

    if(No < 0)
    {
        No = -No
    }

    while(No != 0)
    {
        Digit = No % 10

        if(Digit % 2 == 0)
        {
            Sum = Sum + Digit
        }
        else    
        {
            Sub = Sub + Digit
        }

        No = Math.floor(No / 10)
    }

    return (Sum - Sub)
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

        iRet = CountDiff(Value)

        console.log(iRet)

        rl.close()
    })
}

main()