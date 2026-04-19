class Logic
{
    findFactorial(N)
    {
        let i =0
        let fact = 1

        for(i = 1; i <= N; i++)
        {
            fact = fact * i
        }

        console.log(fact)
    }
}

class program
{
    static main()
    {
        const obj = new Logic()

        const N = 5

        obj.findFactorial(N)
    }
}

program.main()