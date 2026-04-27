class Logic
{
    static countFactors(No)
    {
        let i = 0
        let count = 0

        for(i = 1; i <= No / 2; i++)
        {
            count++
        }

        console.log(count)
    }
}

class program
{
    static main()
    {
        const readline = require("readline")

        const rl = readline.createInterface
        ({
            input: process.stdin,
            output: process.stdout
        })

        rl.question
        ("Enter Number: ",function(input)
        {
            const Value = parseInt(input)

            Logic.countFactors(Value)

            rl.close()
        })
    }
}

program.main()