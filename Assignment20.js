

//////////////////////////////////////////////////////////////////
//
// Function     : FactDiff
// Description  : Display Diff betn Sum of Factor and non in JS
// Auther       : Sanyam BhupendraKumar Ravne 
// Date         : 17/12/2025
//
//////////////////////////////////////////////////////////////////

function FactDiff(no)
{
    let iCnt = 0;
    let iSumFact = 0;
    let iSumNonFact = 0;

    for(iCnt = 1; iCnt < no; iCnt++)
    {
        if(no % iCnt == 0)
        {
            iSumFact = iSumFact + iCnt;
        }
        else
        {
            iSumNonFact = iSumNonFact + iCnt;
        }
    }
    return iSumFact - iSumNonFact;
}

function main()
{
    let iValue = 0;
    iRet = 0;

    iRet = FactDiff(12);

    console.log("Difference is : ",iRet);
}

main();