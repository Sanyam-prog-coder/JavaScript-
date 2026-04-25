class Logic
{
    static findSmallestNumber(No)
    {
        let Digit = 0
        let Min = 9

        while(No > 0)
        {
            Digit = No % 10

            if(Digit < Min)
            {
                Min = Digit
            }

            No = Math.floor(No / 10)
        }
        console.log(Min)
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

            Logic.findSmallestNumber(Value)

            rl.close()
        })      
    }
}

Program.main()