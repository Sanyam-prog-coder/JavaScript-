class Logic
{
    static countEvenOddRange(No)
    {
        let i = 0
        let Even = 0
        let Odd = 0

        for(i = 1; i <= No; i++)
        {
            if(i % 2 == 0)
            {
                Even++
            }
            else
            {
                Odd++
            }
        }

        console.log("Even Count is: "+Even+" & "+"Odd Count is: "+Odd)
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

            Logic.countEvenOddRange(Value)

            rl.close()
        })
    }
}

program.main()