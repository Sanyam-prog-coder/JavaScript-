class Logic
{
    static printDigit(No)
    {
        let Digit = 0

        while(No != 0)
        {
            Digit = No % 10
            No = Math.floor(No / 10)

            console.log(Digit)
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

            Logic.printDigit(Value)

            rl.close()
        })      
    }
}

Program.main()