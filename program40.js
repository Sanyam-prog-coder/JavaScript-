function TableRev(No)
{
    let i = 0
    let output = " "
    
    for(i = 10; i >= 1; i--)
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

        TableRev(iValue)

        rl.close()
    })
}

main()