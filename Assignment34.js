////////////////////////////////////////////////////////
//
// Function : FindLargestDigit
// Description : To find Largest Digit from Given
// Auther : Sanyam BhupendraKumar Ravne
// Date : 11-01-2026
//
////////////////////////////////////////////////////////

function FindLargestDigit(Num)
{
    let Digit = 0, Max = 0;

    while(Num > 0)
    {
        Digit = Num % 10;

        if(Digit > Max)
        {
            Max = Digit;
        }
        Num = Num / 10;
    }
    console.log("Largest Digit is : " +Max);
}

function main()
{
    FindLargestDigit(83429);
}

main();
/*
Largest Digit is : 9
*/