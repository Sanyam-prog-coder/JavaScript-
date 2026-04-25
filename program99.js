class Logic
{
    static findLargestNumber(No)
    {
        let Digit = 0
        let Max = 0

        while(No != 0)
        {
            Digit = No % 10

            if(Digit > Max)
            {
                Max = Digit
            }

            No = Math.floor(No / 10)
        }
        console.log(Max)
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

            Logic.findLargestNumber(Value)

            rl.close()
        })      
    }
}

Program.main()