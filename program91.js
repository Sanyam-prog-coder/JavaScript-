class Logic
{
    static checkLeapYear(No)
    {
        if((No % 400 == 0) || (No % 4 == 0 && No % 100 != 0))
        {
            console.log("It is Leap Year")
        }
        else
        {
            console.log("It is not a leap year")
        }
    }
}

class program
{
    static main()
    {
        const realine = require("readline")

        const rl = realine.createInterface
        ({
            input: process.stdin,
            output: process.stdout
        })

        rl.question
        ("Enter Year: ",function(input)
        {
            let Value = parseInt(input)

            Logic.checkLeapYear(Value)

            rl.close()
        })
    }
}

program.main()