function Divide(No1, No2)
{
    let Ans = 0

    if(No2 == 0)
    {
        return -1
    }

    Ans = No1 / No2

    return Ans
}

function main()
{
    let iValue1 = 15, iValue2 = 5;
    let iRet = 0

    iRet = Divide(iValue1, iValue2)

    console.log("The division of number are : "+iRet)
}

main();