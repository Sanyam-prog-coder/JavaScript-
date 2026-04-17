function FhtoCs(Temp)
{
    let Cel = 0

    Cel = ((Temp - 32) * (5 / 9))

    return Cel
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
    ("Enter Temprature in Fahereneit: ",function(input)
    {
        let Value = parseInt(input)
        let iRet = 0

        iRet = FhtoCs(Value)

        console.log("Temprature in centigrade: "+iRet)

        rl.close()
    });
}

main()