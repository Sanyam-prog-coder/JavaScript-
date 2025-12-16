
//////////////////////////////////////////////////////////////////
//
// Function     : DisplayFactor
// Description  : Display Factor In JavaScript
// Auther       : Sanyam BhupendraKumar Ravne 
// Date         : 16/12/2025
//
//////////////////////////////////////////////////////////////////

function DisplayFactor(no)
{
    let iFact = 0;

    if(no <= 0)
    {
        no = -no;
    }

    for(iFact = 1; iFact <= (no / 2); iFact++)
    {
        if((no % iFact == 0) && (iFact % 2 == 0))
        {
            console.log(iFact);
        }
    }
}

function main()
{
    let iValue = 0;

    DisplayFactor(-16);
}

main();