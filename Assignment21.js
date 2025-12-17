

//////////////////////////////////////////////////////////////////
//
// Function     : CheckEvenOdd
// Description  : Check Even & Odd
// Auther       : Sanyam BhupendraKumar Ravne 
// Date         : 17/12/2025
//
//////////////////////////////////////////////////////////////////

function CheckEvenOdd(no)
{
    if(no % 2 == 0)
    {
        console.log("is Even : ",no);
    }
    else
    {
        console.log("is Odd : ",no);
    }
}

function main()
{
    let iValue = 0;

    CheckEvenOdd(11);
}

main();