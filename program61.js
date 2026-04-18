function Print_Number(No)
{
    let i = 0

    for(i = 1; i <= No; i++)
    {
        console.log(i)
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

        Print_Number(Value)

        rl.close()
    })
}

main()