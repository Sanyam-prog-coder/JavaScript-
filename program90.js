class Logic
{
    checkSign(No)
    {
        if(No > 0)
        {
            console.log(No + ": Number is Positive")
        }
        else if(No < 0)
        {
            console.log(No + ": Number is Negative")
        }
        else
        {
            console.log(No + ": Number is Zero")
        }
    }
}

class program
{
    static main()
    {
        const obj = new Logic()

        const Number = -8

        obj.checkSign(Number)
    }
}

program.main()