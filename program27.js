function CheckGreater(No)
{
    if(No >= 100)
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
    ("Enter Number: ",function(input)
    {
        let iValue = parseInt(input)
        let bRet = false

        bRet = CheckGreater(iValue)

        if(bRet == true)
        {
            console.log(iValue+ " is a greter")
        }
        else
        {
            console.log(iValue+ " it is smaller")
        }

        rl.close()
    });
}

main();