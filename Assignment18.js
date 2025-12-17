

//////////////////////////////////////////////////////////////////
//
// Function     : NonFact
// Description  : Display Non factor in java Script
// Auther       : Sanyam BhupendraKumar Ravne 
// Date         : 17/12/2025
//
//////////////////////////////////////////////////////////////////

function NonFact(no)
{
    let iCnt = 0;

    for(iCnt = 1; iCnt < no; iCnt++)
    {
        if(no % iCnt != 0)
        {
            console.log(iCnt);
        }
    }
}

function main()
{
    let iValue = 0;

    NonFact(12);
}

main();