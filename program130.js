class Logic
{
    static Patten(No)
    {
        let i = 0

        for(i = 1; i <= No; i++)
        {
            console.log(i * 2)
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
        ("Enter Number of Element: ",function(input)
        {
            let Value = parseInt(input)

            Logic.Patten(Value)

            rl.close()
        })
    }
}

program.main()