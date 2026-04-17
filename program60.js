function Divisible_by_Five(No)
{
    if(No % 5 == 0)
    {
        return true
    }
    else
    {
        return false
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
        let bRet = false

        bRet = Divisible_by_Five(Value)

        if(bRet == true)
        {
            console.log("Divisible by 5")
        }
        else
        {
            console.log("Not Divisible by 5")
        }
        
        rl.close()
    })
}

main()