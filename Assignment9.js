
//////////////////////////////////////////////////////////////////
//
// Function     : Display
// Description  : display First number Second number times
// Auther       : Sanyam BhupendraKumar Ravne 
// Date         : 16/12/2025
//
//////////////////////////////////////////////////////////////////

function Display(no, frequency)
{
    let iCnt = 0;

    if(frequency < 0)
    {
        frequency = -frequency;
    }
    for(iCnt = 1; iCnt <= frequency; iCnt++)
    {
        console.log(no);
    }
}

function main()
{
    let iValue1 = 0, iValue2 = 0;

    Display(15,2);
}
main();