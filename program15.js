function CheckVowel(cValue)
{
    if(cValue == 'A' || cValue == 'E' || cValue == 'I' || cValue == 'O' || cValue == 'U' ||
        cValue == 'a' || cValue == 'e' || cValue == 'i' || cValue == 'o' || cValue == 'u'
    )
    {
        return true;
    }
    else
    {
        return false;
    }
}

function main()
{
    const realine = require("readline")

    const rl = realine.createInterface
    (
        {
            input: process.stdin,
            output: process.stdout
        }
    );

    rl.question
    ("Enter Character: ",function(input)
    {
        let cValue = input.charAt(0);
        let bRet = false

        bRet = CheckVowel(cValue);

        if(bRet == true)
        {
            console.log("It is Vowel")
        }
        else
        {
            console.log("It is not Vowel")
        }

        rl.close()
    });
}

main();