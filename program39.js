function Table(No)
{
    let i = 0
    let output = " "

    if(No < 0)
    {
        No = -No
    }
    
    for(i = 1; i <= 10; i++)
    {
        output = output + i * No + "\t"
    }
    
    console.log(output)
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

        Table(iValue)

        rl.close()
    })
}

main()