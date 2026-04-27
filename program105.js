class Logic
{
    static printDivisiableBy2and5(No)
    {
        let i = 0
        
        for(i = 1; i <= No; i++)
        {
            if(i % 2 == 0 && i % 3 == 0)
            {
                console.log(i)
            }
        }
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

            Logic.printDivisiableBy2and5(Value)

            rl.close()
        })
    }
}

program.main()