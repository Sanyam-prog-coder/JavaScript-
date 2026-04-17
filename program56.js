function PrintFactor(No)
{
    let i = 0
    let Fact = 1

    if(No <= 0)
    {
        console.log("Invalid Number! Please enter Positive number")
        return
    }

    for(i = 1; i <= No; i++)
    {
        if(No % i == 0)
        {
            console.log(i)
        }
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

        PrintFactor(Value)

        rl.close()
    })
}

main()