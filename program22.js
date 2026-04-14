function FindMax(No1, No2)
{
    if(No1 == No2)
    {
        console.log("Same Input of Numbers")
    }

    if(No1 > No2)
    {
        return No1
    }
    else
    {
        return No2
    }
}

function main()
{
    const readline = require("readline")

    const rl = readline.createInterface
    (
        {
            input: process.stdin,
            output: process.stdout
        }
    );

    rl.question
    ("Enter first Number: ", function(input)
    {
        let iValue1 = parseInt(input)

        rl.question
        ("Enter Second Number: ",function(input)
        {
            let iValue2 = parseInt(input)
            let result = false

            result = FindMax(iValue1, iValue2)

            console.log("maximum is : "+result)

            rl.close()
        });
    });
}

main();