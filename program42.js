function DollerToINR(No)
{
    Doller = No * 70

    return Doller
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
    ("Enter Number in USD: ",function(input)
    {
        let iValue = parseInt(input)
        let iRet = 0

        iRet = DollerToINR(iValue)

        console.log("Value of "+iValue+" INR "+iRet+"$")

        rl.close()
    })
}

main();