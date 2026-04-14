function DisplayConvet(cValue)
{
    if((cValue >= 'A') && (cValue <= 'Z'))
    {
        console.log(cValue.toLowerCase());
    }
    else if((cValue >= 'a') && (cValue <= 'z'))
    {
        console.log(cValue.toUpperCase());
    }
    else
    {
        console.log("Not an Alphabate");
    }
}

function main()
{
    const realine = require("readline")

    const rl = realine.createInterface
    (
        {
            input: process.stdin,
            output: process.stdout
        }
    );

    rl.question
    ("Enter Character: ",function(input)
    {
        let cValue = input.charAt(0);
        
        DisplayConvet(cValue)

        rl.close()
    });
}

main();