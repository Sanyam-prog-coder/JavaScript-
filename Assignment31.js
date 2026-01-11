////////////////////////////////////////////////////////////
//
// Function : SumEvenNumber
// Description : Find Sum of all Number to N
// Auther : Sanyam BhupendraKumar Ravne
// Date : 11-01-2026
//
////////////////////////////////////////////////////////////

function SumEvenNumber(Num)
{
    let i = 0;
    let Sum = 0;

    for(i = 2; i <= Num; i+= 2)
    {
        Sum += i;
    }
    console.log("Sum of even Numbers up to " + Num + " is : " + Sum);
}

function main()
{
    SumEvenNumber(10);
}

main();
/*
Sum of even Numbers up to 10 is : 30
*/