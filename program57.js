function CountFactore(No)
{
    let i = 0
    let Fact = 1
    let Count = 0

    if(No <= 0)
    {
        console.log("Invalid Number! Please enter Positive number")
        return
    }

    for(i = 1; i <= No; i++)
    {
        if(No % i == 0)
        {
            Count++
        }
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

        iRet = CountFactore(Value)

        console.log("Factores of "+Value+": "+iRet)

        rl.close()
    })
}

main()