class Logic
{
    findMax(No1, No2)
    {
        if(No1 > No2)
        {
            console.log(No1+" is a Maximum")
        }
        else if(No2 > No1)
        {
            console.log(No2+" is a Maximum")
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
        const Number2 = 11

        obj.findMax(Number1, Number2)
    }
}

program.main()