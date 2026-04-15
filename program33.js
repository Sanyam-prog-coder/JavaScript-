function Display(No)
{
    let output = ""
    let iCnt = 0

    for(iCnt = -No; iCnt <= No; iCnt++)
    {
        output = output + iCnt + "\t"
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

        Display(iValue)

        rl.close()
    })
}

main()