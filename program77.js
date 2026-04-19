class Logic
{
    checkEvenOdd(N)
    {
        if(N % 2 == 0)
        {
            console.log("Even")
        }
        else
        {
            console.log("Odd")
        }
    }
}

class program
{
    static main()
    {
        const obj = new Logic()

        const N = 11

        obj.checkEvenOdd(N)
    }
}

program.main()