
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
    let iCnt = 0;
    let output = ' ';
    
    while(iCnt < no)
    {
        output += iCnt + ' ';
        iCnt++;
    }
    console.log(output);

}

function main()
{
    let iValue = 0;

    Display(16);
}

main();