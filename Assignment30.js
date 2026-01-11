/////////////////////////////////////////////////////////////////////////
// Function     : Percentage
// Description  : To Calculate Percentage 
// Author       : Sanyam BhupendraKumar Ravne 
// Date         : 11/01/2026
/////////////////////////////////////////////////////////////////////////

const readline = require("readline");

function Percentage(Obtained, Total)
{
    let fPercentage = 0.0;

    if (Total === 0)
    {
        console.log("Total Marks Cannot be Zero");
        return 0.0;
    }

    fPercentage = (Obtained / Total) * 100;
    return fPercentage;
}

function main()
{
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Please Enter Total Marks : ", function(input1) 
    {

        rl.question("Please Enter Obtained Marks : ", function(input2) 
        {

            let iTotal = parseFloat(input1);
            let iObtained = parseFloat(input2);

            let fRet = Percentage(iObtained, iTotal);

            console.log("Percentage is :", fRet.toFixed(2), "%");

            rl.close();
        });
    });
}

main();

/*
Input : Please Enter Total Marks : 500
Input : Please Enter Obtained Marks : 300
Output : Percentage is : 60.00 %
*/