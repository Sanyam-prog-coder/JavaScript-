function RangeSumEven(Starting, Ending)
{
    let i = 0
    let Sum = 0

    if(Starting > Ending || Starting < 0 || Ending < 0) 
    {
        console.log("Invalid Position")
        return
    }

    for(i = Starting; i <= Ending; i++)
    {
        if(i % 2 == 0)
        {
            Sum = Sum + i
        }
    }

    return Sum
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
    ("Enter Starting Point: ",function(input)
    {
        let Value1 = parseInt(input)

        rl.question
        ("Enter End Point: ",function(input)
        {
            let Value2 = parseInt(input)

            let iRet = 0

            iRet = RangeSumEven(Value1, Value2)

            console.log("Sumation of Even Range between "+ Value1 + " & "+ Value2 + " is: "+ iRet)

            rl.close()
        })
    })
}

main()