function KMtoMeter(No)
{
    let Meter = 0

    Meter = No * 1000

    return Meter
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
    ("Enter Distance: ",function(input)
    {
        let Value = parseInt(input)
        let iRet = 0

        iRet = KMtoMeter(Value)

        console.log("Distance in Meter: "+iRet)

        rl.close()
    });
}

main()