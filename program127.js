class Logic
{
    static Patten(No)
    {
        let i = 0

        for(i = No; i > 0; i--)
        {
            process.stdout.write(i + "\t" + "#" + "\t")
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