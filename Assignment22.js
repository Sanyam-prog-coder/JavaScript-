

//////////////////////////////////////////////////////////////////
//
// Function     : FindMax
// Description  : Find Max of two number
// Auther       : Sanyam BhupendraKumar Ravne 
// Date         : 17/12/2025
//
//////////////////////////////////////////////////////////////////

function FindMax(no1, no2)
{
    if(no1 > no2)
    {
        return no1;
    }
    else
    {
        return no2;
    }
}

function main()
{
    let iValue1 = 0, iValue2 = 0;
    iRet = 0;

    iRet = FindMax(115,16);

    console.log("Maximum is : ",iRet);
}

main();