class Logic
{
    printEvenNumber(No)
    {
        let i = 0
        let Even = 0

        for(i = 1; i <= No; i++)
        {
            if(i % 2 == 0)
            {
                console.log(i)
            }
        }
    }
}

class program
{
    static main()
    {
        const obj = new Logic()

        const Number = 144

        obj.printEvenNumber(Number)
    }
}

program.main()