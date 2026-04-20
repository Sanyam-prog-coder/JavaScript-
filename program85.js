class Logic
{
    printTable(No)
    {
        let i = 0

        for(i = 1; i <= 10; i++)
        {
            console.log(No * i)
        }

    }
}

class program
{
    static main()
    {
        const obj = new Logic()

        const Number = 2

        obj.printTable(Number)
    }
}

program.main()