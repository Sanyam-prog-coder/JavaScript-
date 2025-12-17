

//////////////////////////////////////////////////////////////////
//
// Function     : SumNonFact
// Description  : Display Summation of Nonfactor in java Script
// Auther       : Sanyam BhupendraKumar Ravne 
// Date         : 17/12/2025
//
//////////////////////////////////////////////////////////////////

function SumNonFact(no)
{
    let iCnt = 0;
    let iSum = 0;

    for(iCnt = 1; iCnt < no; iCnt++)
    {
        if(no % iCnt != 0)
        {
            iSum = iSum + iCnt;
        }
    }
    return iSum;
}

function main()
{
    let iValue = 0;
    iRet = 0;

    iRet = SumNonFact(12);

    console.log("Summation of Non-Factor is : ", iRet);
}

main();