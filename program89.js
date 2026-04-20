class Logic
{
    sumEvenOddDigit(No)
    {
        let EvenD = 0
        let OddD = 0
        let Digit = 0
        
        while(No > 0)
        {
            Digit = No % 10

            if(Digit % 2 == 0)
            {
                EvenD = EvenD + Digit
            }
            else
            {
                OddD = OddD + Digit
            }

            No = Math.floor(No / 10)
        }

        console.log(EvenD + " : " + OddD)
    }
}

class program
{
    static main()
    {
        const obj = new Logic()

        const Number = 16792

        obj.sumEvenOddDigit(Number)
    }
}

program.main()