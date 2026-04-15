function OddDisplay(No)
{
    let output = ""
    let iCnt = 0

    for(iCnt = 1; iCnt <= 5; iCnt++)
    {
        output = output + iCnt * No + "\t"
    }
    console.log(output)
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

        OddDisplay(iValue)

        rl.close()
    })
}

main()