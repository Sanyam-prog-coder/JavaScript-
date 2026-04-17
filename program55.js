function RangeDisplayRev(Starting, Ending)
{
    let i = 0

    if(Starting > Ending) 
    {
        console.log("Invalid Position")
        return
    }

    for(i = Ending; i >= Starting; i--)
    {
        console.log(i)
    }
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

            RangeDisplayRev(Value1, Value2)

            rl.close()
        })
    })
}

main()