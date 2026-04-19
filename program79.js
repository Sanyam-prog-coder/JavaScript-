class Logic
{
    reverseNumber(N)
    {
        let Rev = 0
        let Digit = 0
        let i = 0

        for(; N > 0; N = Math.floor(N / 10))
        {
            Digit = N % 10
            
            Rev = Rev * 10 + Digit
        }

        console.log(Rev)
    }
}

class program
{
    static main()
    {
        const obj = new Logic()

        const N = 1234

        obj.reverseNumber(N)
    }
}

program.main()