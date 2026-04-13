function Display(No, Frequency)
{
    let iCnt = 0
    
    if(Frequency < 0)
    {
        Frequency = -Frequency
    }

    for(iCnt = 1; iCnt <= Frequency; iCnt++)
    {
        process.stdout.write(No + " ")
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

        rl.question
        ("Enter Frequency: ", function(input)
        {
            let iFrequency = parseInt(input)

            Display(iValue, iFrequency)

            
            rl.close()
        });

    });
}

main();