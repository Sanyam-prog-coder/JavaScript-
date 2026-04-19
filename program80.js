class Logic
{
    countDigit(N)
    {
        let Count = 0

        while(N != 0)
        {
            N = Math.floor(N / 10)
            
            Count++
        }

        console.log(Count)
    }
}

class program
{
    static main()
    {
        const obj = new Logic()

        const N = 1234

        obj.countDigit(N)
    }
}

program.main()