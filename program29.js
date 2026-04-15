function Multiply(A, B, C)
{
    let Ans = 1

    if(A == 0 && B == 0 && C == 0)
    {
        return 0
    }

    if(A != 0)
    {
        Ans = Ans * A
    }

    if(B != 0)
    {
        Ans = Ans * B
    }

    if(C != 0)
    {
        Ans = Ans * C
    }

    return Ans
}

function main()
{
    const readline = require("readline")

    const rl = readline.createInterface
    ({
        input: process.stdin,
        output: process.stdout
    });

    rl.question
    ("Enter First Number: ", function(input)
    {
        let iValue1 = parseInt(input)

        rl.question
        ("Enter Second Number: ",function(input)
        {
            let iValue2 = parseInt(input)

            rl.question
            ("Enter Thirs Number: ",function(input)
            {
                let iValue3 = parseInt(input)
                let iRet = 0

                iRet = Multiply(iValue1, iValue2, iValue3)

                console.log("Multiplication of "+iValue1+" * "+iValue2+" * "+iValue3+" = "+iRet)

                rl.close()
            });
        });
    });
}

main();