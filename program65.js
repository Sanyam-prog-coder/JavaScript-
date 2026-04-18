function Print_EvenSum(No)
{
    let i = 0
    let Sum = 0

    for(i = 1; i <= No; i++)
    {
        if(i % 2 == 0)
        {
            Sum = Sum + i
        }
    }

    return Sum
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

        iRet = Print_EvenSum(Value)

        console.log("Summation of All Even number: "+iRet)

        rl.close()
    })
}

main()