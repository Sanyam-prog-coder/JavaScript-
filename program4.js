function Check(No)
{
    if((No % 5) == 0)
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
    const readline = require("readline");

    const rl = readline.createInterface
    (
        {
            input: process.stdin,
            output: process.stdout
        }
    );

    rl.question
    ("Enter number: ", function(input) 
        {
            let iValue = parseInt(input);
            let bRet = Check(iValue);

            if(bRet === true) 
            {
                console.log("Divisible by 5");
            } 
            else 
            {
                console.log("Not Divisible by 5");
            }
            rl.close();
        }
    );
}

main();