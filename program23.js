function CheckLeapYear(Year)
{
    if((Year % 400 == 0) || Year % 4 == 0 && Year % 100 != 0)
    {
        console.log(Year+ " It is a leap year")
    }
    else
    {
        console.log(Year+ " It is not a leap year")
    }
}

function main()
{
    const readline = require("readline")

    const rl = readline.createInterface
    (
        {
            input: process.stdin,
            output: process.stdout
        }
    );

    rl.question
    ("Enter Year: ",function(input)
    {
        let Year = parseInt(input)

        CheckLeapYear(Year)

        rl.close()
    });
}

main();