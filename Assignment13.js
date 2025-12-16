
//////////////////////////////////////////////////////////////////
//
// Function     : DisplayEvenFactor
// Description  : Diaplay Even Factors of given no In JavaScript
// Auther       : Sanyam BhupendraKumar Ravne 
// Date         : 16/12/2025
//
//////////////////////////////////////////////////////////////////

function DisplayEvenFactor(no)
{
    let i = 0;

    if(no <= 0)
    {
        no = -no;
    }

    for(i = 1; i <= (no / 2); i++)
    {
        if((no % i == 0) && (i % 2 == 0))
        {
            console.log(i);
        }
    }
}

function main()
{
    let iValue = 0;

    DisplayEvenFactor(36);
}

main()