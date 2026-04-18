function Print_Odd_Number(No)
{
    let i = 0

    for(i = 1; i <= No; i++)
    {
        if(i % 2 != 0)
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

        Print_Odd_Number(Value)

        rl.close()
    })
}

main()