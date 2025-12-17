

//////////////////////////////////////////////////////////////////
//
// Function     : ChechNumberType
// Description  : Check +tive,-tive or 0
// Auther       : Sanyam BhupendraKumar Ravne 
// Date         : 17/12/2025
//
//////////////////////////////////////////////////////////////////

function CheckNumberType(no)
{
    if(no > 0)
    {
        console.log("Is a Positive Number : ",no);
    }
    else if(no < 0)
    {
        console.log("Is a negative Number : ",no);
    }
    else
    {
        console.log("The Number is Zero");
    }
}

function main()
{
    let Number = 0;

    CheckNumberType(18);
}

main();