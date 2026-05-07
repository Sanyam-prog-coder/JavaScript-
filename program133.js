function pattern(Row, Col)
{
    let i = 0
    let j = 0

    for(i = 1; i <= Row; i++)
    {
        for(j = Col; j >= 1; j--)
        {
            process.stdout.write(j + "\t")
        }
        console.log()
    }
}

function main()
{
    const readline = require("readline")

    const rl = readline.createInterface
    ({
        input: process.stdin,
        output: process.stdout
    })

    rl.question
    ("Enter Row: ",function(input)
    {
        Value1 = parseInt(input)

        rl.question
        ("Enter Column: ",function(input)
        {
            Value2 = parseInt(input)

            pattern(Value1, Value2)
            
            rl.close()
        })
    })
}

main()