////////////////////////////////////////////////////////////
//
// Funciton : PrintReverce
// Description : To print Reverce of N
// Auhter : Sanyam BhupendraKumar Ravne
// Date : 11-01-2026
//
////////////////////////////////////////////////////////////

function PrintReverce(N)
{
    let i = N;
    let output = "";

    for(i = N; i >= 1; i--)
    {
        output += i + " ";
    }
    console.log(output);
}

function main()
{
    PrintReverce(10);
}

main();
/*
Input : 10      Output : 10 9 8 7 6 5 4 3 2 1
*/