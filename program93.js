class Logic
{
    static checkDivisible(No)
    {
        if(No % 5 == 0)
        {
            console.log(No+": Divisible by 5")
        }
        else if(No % 11 == 0)
        {
            console.log(No+": Divisible by 11")
        }
        else
        {
            console.log(No+": is Not Divisible by 5 and 11")
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

            Logic.checkDivisible(Value)

            rl.close()
        })      
    }
}

Program.main()