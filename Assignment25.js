

//////////////////////////////////////////////////////////////////
//
// Function     : FindLargest
// Description  : Find the Largest Number
// Auther       : Sanyam BhupendraKumar Ravne 
// Date         : 17/12/2025
//
//////////////////////////////////////////////////////////////////

function FindLargest(no1, no2, no3)
{
    if(no1 > no2 && no1 > no3)
    {
        return no1;
    }
    else if(no2 > no3)
    {
        return no2;
    }
    else
    {
        return no3;
    }
}

function main()
{
    let a,b,c;
    iRet = 0;

    iRet = FindLargest(8,4,6);

    console.log("Largest Number is : ",iRet);
}

main();