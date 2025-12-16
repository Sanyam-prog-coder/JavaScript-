

//////////////////////////////////////////////////////////////////
//
// Function     : Display
// Description  : Display Given number is Even or not In JavaScript
// Auther       : Sanyam BhupendraKumar Ravne 
// Date         : 16/12/2025
//
//////////////////////////////////////////////////////////////////

function CheckEven(no)
{
    if((no % 2) == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function main()
{
    let iValue = 0;
    bRet = false;

    bRet = CheckEven(16);

    if(bRet == true)
    {
        console.log("Number is Even");
    }
    else
    {
        console.log("Number is Odd");
    }
}
main();