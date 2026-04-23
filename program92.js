class Logic
{
    static displayGrade(No)
    {
        if(No < 0 || No > 100)
        {
            console.log("Invalid Marks")
            return;
        }

        if(No <= 35)
        {
            console.log("Fail")
        }
        else if(No <= 40)
        {
            console.log("E")
        }
        else if(No <= 50)
        {
            console.log("D")
        }
        else if(No <= 60)
        {
            console.log("C")
        }
        else if(No <= 70)
        {
            console.log("C+")
        }
        else if(No <= 80)
        {
            console.log("B")
        }
        else if(No <= 85)
        {
            console.log("B+")
        }
        else if(No <= 90)
        {
            console.log("A")
        }
        else if(No <= 95)
        {
            console.log("A+")
        }
        else
        {
            console.log("A++")
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

            Logic.displayGrade(Value)

            rl.close()
        })      
    }
}

Program.main()