function Percentage(No1 , No2)
{
    let Percent = 0.0

    if(No1 == 0)
    {
        console.log("Total mark cannot be zero")
        return 0.0
    }

    Percent = (No2 / No1) * 100

    return Percent
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
    ("Enter Totol Mark: ",function(input)
    {
        let iValue1 = parseInt(input)

        rl.question
        ("Enter Obtained Mark: ",function(input)
        {
            let iValue2 = parseInt(input)
            let fRet = 0.0

            fRet = Percentage(iValue1, iValue2)

            console.log(fRet+ " % ")

            rl.close()
        })
    });
}

main();