class Logic
{
    static calculatePower(Base, exp)
    {
        let i = 0
        let Result = 1

        for(i = 1; i <= exp; i++)
        {
            Result = Result * Base
        }

        console.log(Result)
    }
}

class Program
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
        ("Enter Base: ",function(input)
        {
            const Value1 = parseInt(input)

            rl.question
            ("Enter Exp: ",function(input)
            {
                const Value2 = parseInt(input)

                Logic.calculatePower(Value1, Value2)

                rl.close()
            })
        })      
    }
}

Program.main()