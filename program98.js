class Logic
{
    static checkPerfect(No)
    {
        let Sum = 0

        for(let i = 0; i < No; i++)
        {
            if(No % i == 0)
            {
                Sum = Sum + i
            }
        }

        if(Sum == No && No > 0)
        {
            console.log(No + " Number is perfect")
        }
        else
        {
            console.log(No + " Number is Not Perfect ")
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

            Logic.checkPerfect(Value)

            rl.close()
        })      
    }
}

Program.main()