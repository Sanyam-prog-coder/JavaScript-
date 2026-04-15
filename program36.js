function Number(No)
{
    if(No < 50)
    {
        console.log("Small")
    }
    else if(No >= 50 && No <= 100)
    {
        console.log("Medium")
    }
    else
    {
        console.log("Grater")
    }
}

function main()
{
    const realine = require("readline")

    const rl = realine.createInterface
    ({
        input: process.stdin,
        output: process.stdout
    });

    rl.question
    ("Enter Number: ",function(input)
    {
        let iValue = parseInt(input)

        Number(iValue)

        rl.close()
    })
}

main()