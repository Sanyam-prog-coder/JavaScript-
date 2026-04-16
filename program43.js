function EvenFactorial(No)
{
    if(No < 0)
    {
        No = -No
    }

    let i = 0
    let Fact = 1

    for(i = 2; i < No; i += 2)
    {
        Fact = Fact * i
    }

    return Fact
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
        let iValue = parseInt(input)
        let iRet = 0

        iRet = EvenFactorial(iValue)

        console.log("Even Factorial of Number is : ",iRet)

        rl.close()
    })
}

main()