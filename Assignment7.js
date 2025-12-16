//////////////////////////////////////////////////////////////////
//
// Function     : Display
// Description  : print * Given times In JavaScript
// Auther       : Sanyam BhupendraKumar Ravne 
// Date         : 16/12/2025
//
//////////////////////////////////////////////////////////////////

function Display(no)
{
    let output = ' ';

    while(no > 0)
    {
        output += no + ' ';
        no--;
    }
    console.log(output);
}

function main()
{
    let iValue = 0;

    Display(5);
}

main()