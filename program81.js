class Logic
{
    sumofDigit(No)
    {
        let Digit = 0
        let Sum = 0

        while(No != 0)
        {
            Digit = No % 10

            Sum = Sum + Digit

            No = Math.floor(No / 10)
        }

        console.log(Sum)
    }
}

class program
{
    static main()
    {
        const obj = new Logic()

        const Number = 12345

        obj.sumofDigit(Number)
    }
}

program.main()