function Display(No)
{
    let iCnt = 0

    while(No > 0)
    {
        console.log("*")

        No--
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

        rl.close();
    });
}

main();