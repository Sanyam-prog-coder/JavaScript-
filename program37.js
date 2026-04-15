function Display(No)
{
    if(No < 0)
    {
        No = -No
    }

    if(No > 9)
    {
        console.log("Invalid Number")
        return
    }

    switch(No)
    {
        case 0:
            console.log("zero")
            break

        case 1:
            console.log("One")
            break
        
        case 2:
            console.log("Two")
            break

        case 3:
            console.log("Three")
            break

        case 4:
            console.log("Four")
            break

        case 5:
            console.log("Five")
            break

        case 6:
            console.log("Six")
            break

        case 7:
            console.log("Seven")
            break

        case 8:
            console.log("Eight")
            break

        case 9:
            console.log("Nine")
            break

        default:
            console.log("Invalid Number")
            break
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
    ("Enter Number: ",function(input)
    {
        let iValue = parseInt(input)

        Display(iValue)

        rl.close()
    })
}

main()