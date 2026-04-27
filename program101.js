class Logic
{
    static productOfDigit(No)
    {
        let Digit = 0
        let Sum = 1

        while(No > 0)
        {
            Digit = No % 10

            Sum = Sum * Digit

            No = Math.floor(No / 10)
        }

        console.log(Sum)
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

            Logic.productOfDigit(Value)

            rl.close()
        })
    }
}

program.main()