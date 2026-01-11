////////////////////////////////////////////////////////
//
// Function : FindSmallestDigit
// Description : To find Largest Digit from Given
// Auther : Sanyam BhupendraKumar Ravne
// Date : 11-01-2026
//
////////////////////////////////////////////////////////

function FindSmallestDigit(Num)
{
    Num = Math.abs(Num);
    let Digit = 0, Min = 9;

    while(Num > 0)
    {
        Digit = Num % 10;

        if(Digit < Min)
        {
            Min = Digit;
        }
        Num = Math.floor(Num / 10);
    }
    console.log("Smallest Digit is : " +Min);
}

function main()
{
    FindSmallestDigit(83429);
}

main();
/*
Largest Digit is : 2
*/