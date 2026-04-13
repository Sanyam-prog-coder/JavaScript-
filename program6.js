function Display(No)
{
    let iCnt = 0

    while(iCnt < No)
    {
        console.log("*")

        iCnt++
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