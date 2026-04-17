function SumFactor(No)
{
    let i = 0
    let Fact = 1
    let SumEven = 0

    if(No <= 0)
    {
        console.log("Invalid Number! Please enter Positive number")
        return
    }

    for(i = 1; i <= No; i++)
    {
        if((No % i == 0) && (i % 2 == 0))
        {
            SumEven = SumEven + i
        }
    }

    return SumEven
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

        iRet = SumFactor(Value)

        console.log("Summation of "+Value+": "+iRet)

        rl.close()
    })
}

main()