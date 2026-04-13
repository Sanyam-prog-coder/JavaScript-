function Display(No)
{
    if(No < 10)
    {
        console.log("Hello")
    }
    else
    {
        console.log("Demo")
    }
}

function main()
{
    const readline = require("readline");

    const rl = readline.createInterface
    (
        {
            input: process.stdin,
            output: process.stdout
        }
    );

    rl.question
    ("Enter number: ", function(input)
    {
        let iValue = parseInt(input)

        Display(iValue)

        rl.close()
    }); 
}

main();