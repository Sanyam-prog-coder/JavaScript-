///////////////////////////////////////////////////////////
// 
// Function : ChechPerfect
// Description : Check the Number is Perfect or Not
// Auther : Sanyam BhupendraKumar Ravne
// Date : 11-01-2026
//
///////////////////////////////////////////////////////////

function ChechPerfect(Num)
{
    let iSum = 0, i = 0;

    for(i = 1; i < Num; i++)
    {
        if(Num % i == 0)
        iSum += i;
    }

    if(iSum == Num && Num > 0)
    {
        console.log(Num+ "is a perfect Number");
    }
    else
    {
        console.log(Num+ "Is not a Perfect Number");
    }
}

function main()
{
    ChechPerfect(6);
}

main();