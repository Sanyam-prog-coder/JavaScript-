
//////////////////////////////////////////////////////////////////
//
// Function     : Check
// Description  : Check the Number is Divisible by 5 In JavaScript
// Auther       : Sanyam BhupendraKumar Ravne 
// Date         : 16/12/2025
//
//////////////////////////////////////////////////////////////////

function Check(no)
{
    if((no % 5) == 0)
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

    bRet = Check(26)

    if(bRet == true)
    {
        console.log("Divisible by 5");
    }
    else
    {
        console.log("Not Divisible By 5");
    }
}

main()