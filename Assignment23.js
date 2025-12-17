

//////////////////////////////////////////////////////////////////
//
// Function     : CheckLeapYear
// Description  : Check Leap year
// Auther       : Sanyam BhupendraKumar Ravne 
// Date         : 17/12/2025
//
//////////////////////////////////////////////////////////////////

function CheckLeapYear(Year)
{
    if((Year % 400 == 0) || (Year % 4 == 0 && Year % 100 != 0))
    {
        console.log("Is a leap Year ", Year);
    }
    else
    {
        console.log("Is not a Leap year ", Year);
    }
}

function main()
{
    let Yr = 0;

    CheckLeapYear(2020);
}

main();