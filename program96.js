class Logic
{
    static sumEvenNumber(No)
    {
        let i = 0
        let Sum = 0

        for(i = 1; i <= No; i++)
        {
            if(i % 2 == 0)
            {
                Sum = Sum + i
            }
        }

        console.log(Sum)
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

            Logic.sumEvenNumber(Value)

            rl.close()
        })      
    }
}

Program.main()