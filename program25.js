function FindLargest(A, B, C)
{
    if(A > B  && A > C)
    {
        return A
    }
    else if(B > C)
    {
        return B
    }
    else
    {
        return C
    }
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
    ("Enter first Number: ",function(input)
    {
        let Number1 = parseInt(input)
        rl.question
        ("Enter Second Number: ",function(input)
        {
            let Number2 = parseInt(input)
            rl.question
            ("Enter Thirs Number: ",function(input)
            {
                let Number3 = parseInt(input)
                let Result = 0

                Result = FindLargest(Number1, Number2, Number3)

                console.log("Largest Number is : "+Result)

                rl.close()
            });
        });
    });
}

main()