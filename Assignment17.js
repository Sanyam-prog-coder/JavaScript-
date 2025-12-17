

//////////////////////////////////////////////////////////////////
//
// Function     : FactRev
// Description  : Display Factor in decreasing order
// Auther       : Sanyam BhupendraKumar Ravne 
// Date         : 17/12/2025
//
//////////////////////////////////////////////////////////////////

function FactRev(no)
{
    let iCnt = 0;

    for(iCnt = no / 2; iCnt >= 1; iCnt--)
    {
        if(no % iCnt == 0)
        {
            console.log(iCnt);
        }
    }
}

function main()
{
    let iValue = 0;

    FactRev(12);
}

main();