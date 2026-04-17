function ReactArea(width, height)
{
    let Area = 0.0

    Area = width * height

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
    ("Enter width: ",function(input)
    {
        let Width = parseFloat(input)
        
        rl.question
        ("Enter Height: ",function(input)
        {
            let Height = parseFloat(input)
            let dRet = 0.0

            dRet = ReactArea(Width, Height)

            console.log("Area of Reactangle is: "+dRet)

            rl.close()
        });
    });
}

main()