
//////////////////////////////////////////////////////////////////
//
// Function     : DivisionOfTwoNumber
// Description  : Divide Two Number In JavaScript
// Auther       : Sanyam BhupendraKumar Ravne 
// Date         : 16/12/2025
//
////////////////////////////////////////////////////////////////// 

function DivisionOfTwoNumber(no1, no2)
{
    let iAns = 0;

    iAns = no1 / no2;
    return iAns;
}

function main()
{
    let iValue1 = 15, iValue2 = 5;
    let iRet = 0;

    iRet = DivisionOfTwoNumber(iValue1, iValue2);

    console.log(` Division is : ${iRet}`);
}

main();
//////////////////////////////////////////////////////////////////
//
// Input : 15   Input : 5   Output : 3
//
//////////////////////////////////////////////////////////////////