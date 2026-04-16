function Factorial(No)
{
    if(No < 0)
    {
        No = -No
    }

    let i = 0
    let EvenFact = 1
    let OddFact = 1

    for(i = 2; i < No; i += 2)
    {
        EvenFact = EvenFact * i
    }

    for(i = 1; i <= No; i += 2)
    {
        OddFact = OddFact * i
    }

    return EvenFact - OddFact
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

        iRet = Factorial(iValue)

        console.log("Factorial Diffrence is : ",iRet)

        rl.close()
    })
}

main()