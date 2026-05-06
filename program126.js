class Logic
{
    static Patten(No)
    {
        let ch = 'A'.charCodeAt(0)
        let i = 0

        for(i = 0; i < No; i++)
        {
            process.stdout.write(String.fromCharCode(ch) + "\t");
            ch++
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