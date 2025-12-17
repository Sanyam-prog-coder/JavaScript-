

//////////////////////////////////////////////////////////////////
//
// Function     : MultFact
// Description  : Muktiplication of Factor In JavaScript
// Auther       : Sanyam BhupendraKumar Ravne 
// Date         : 17/12/2025
//
//////////////////////////////////////////////////////////////////

function MultFact(no)
{
    let iCnt = 0;
    let iMult = 1;

    for(iCnt = 1; iCnt <= no / 2; iCnt++)
    {
        if(no % iCnt == 0)
        {
            iMult = iMult * iCnt;
        }
    }
    return iMult;
}

function main()
{
    let iValue = 0;
    iRet = 0;

    iRet = MultFact(13);

    console.log("Multiplication of Factors is : ", iRet);
}

main();