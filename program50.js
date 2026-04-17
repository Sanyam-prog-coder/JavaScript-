function SquareMeter(No)
{
    let SquareFt = 0

    SquareFt = No * 0.0929

    return SquareFt
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
    ("Enter Are in square Feet: ",function(input)
    {
        let Value = parseInt(input)
        let iRet = 0

        iRet = SquareMeter(Value)

        console.log("Area in Square meter: "+iRet)

        rl.close()
    })
}

main()