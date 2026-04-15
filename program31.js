function Pattern(No)
{
    let output = ""
    let iCnt = 0

    for(iCnt = 0; iCnt < No; iCnt++)
    {
        output = output + "$\t*\t"
    }
    console.log(output)
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

        Pattern(iValue)

        rl.close()
    });
}

main()