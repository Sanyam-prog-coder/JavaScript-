function CheckEqual(No1, No2)
{
    if(No1 == No2)
    {
        return true
    }
    else
    {
        return false
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
        let iValue1 = parseInt(input)

        rl.question
        ("Enter Second Number: ",function(input)
        {
            let iValue2 = parseInt(input)
            let bRet = false

            bRet = CheckEqual(iValue1, iValue2)

            if(bRet == true)
            {
                console.log("Equal")
            }
            else
            {
                console.log("Not Equal")
            }

            rl.close()
        });
    });
}

main();