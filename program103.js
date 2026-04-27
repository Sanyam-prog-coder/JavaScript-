class Logic
{
    static displayFactors(No)
    {
        let i = 0

        for(i = 1; i <= No / 2; i++)
        {
            console.log(i)
        }
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

            Logic.displayFactors(Value)

            rl.close()
        })
    }
}

program.main()