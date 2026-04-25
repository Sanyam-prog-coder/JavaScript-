class Logic
{
    static printReverse(No)
    {
        let i = No

        for(i = No; i >= 1; i--)
        {
            console.log(i)
        }

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
        ("Enter Number: ",function(input)
        {
            const Value = parseInt(input)

            Logic.printReverse(Value)

            rl.close()
        })      
    }
}

Program.main()