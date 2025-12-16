
//////////////////////////////////////////////////////////////////
//
// Function     : PrintEven
// Description  : print given no is Even In JavaScript
// Auther       : Sanyam BhupendraKumar Ravne 
// Date         : 16/12/2025
//
//////////////////////////////////////////////////////////////////

function PrintEven(no)
{
    if(no <= 0)
    {
        return;
    }

    let iCnt = 0;
    let iEven = 2;

    for(iCnt = 1; iCnt <= no; iCnt++)
    {
        console.log(iEven);
        iEven = iEven + 2;
    }
}

function main()
{
    PrintEven(10);
}
main();