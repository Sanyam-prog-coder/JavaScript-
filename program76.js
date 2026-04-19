class Logic
{
    calculateSum(N)
    {
        let i = 0
        let Sum = 0
        for(i = 1; i <= N; i++)
        {
            Sum = Sum + i
        }
        console.log(Sum)
    }
}

class program
{
    static main()
    {
        const obj = new Logic()

        const N = 10

        obj.calculateSum(N)
    }
}

program.main()