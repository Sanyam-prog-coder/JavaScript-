function CircleArea(No)
{
    let Area = 0.0

    Area = 3.14 * No * No

    return Area
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
    ("Enter radius: ",function(input)
    {
        let Radius = parseFloat(input)
        let dRet = 0.0

        dRet = CircleArea(Radius)

        console.log("Area of circle is: "+dRet)

        rl.close()
    });
}

main()