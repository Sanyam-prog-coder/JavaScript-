function Display(No)
{
    let output1 = ""
    let output2 = ""

    let i = 0

    if(No < 0)
    {
        No = -No
    }

    for(i = 1; i <= No; i++)
    {
        output1 = output1 + "*\t"
        output2 = output2 + "#\t"
    }

    console.log(output1 + output2)
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
    ("Enter Number: ",function(input)
    {
        let iValue = parseInt(input)

        Display(iValue)

        rl.close()
    });
}

main();