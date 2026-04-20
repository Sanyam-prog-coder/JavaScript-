class Logic
{
    findMin(No1, No2)
    {
        if(No1 < No2)
        {
            console.log(No1+" is a Minimum")
        }
        else if(No2 < No1)
        {
            console.log(No2+" is a Minimum")
        }
        else
        {
            console.log("Same Numbers")
        }
    }
}

class program
{
    static main()
    {
        const obj = new Logic()

        const Number1 = 11
        const Number2 = 10

        obj.findMin(Number1, Number2)
    }
}

program.main()