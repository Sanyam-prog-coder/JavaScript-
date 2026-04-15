function Display(name)
{
    console.log(name)
}

function main()
{
    const readline = require("readline")

    const rl = readline.createInterface
    ({
        input: process.stdin,
        output: process.stdout
    });

    rl.question
    ("Enter Name: ",function(input)
    {
        let Name = input

        Display(Name)

        rl.close()
    });
}

main();