class Logic
{
    CheckPrime(No)
    {
        if(No <= 1)
        {
            return false
        }

        for(let i = 2; i < No; i++)
        {
            if(No % i == 0)
            {
                return false
            }
        }

        return true
    }
}

class program
{
    static main()
    {
        let bRet = false

        const obj = new Logic()

        const Number = 20

        bRet = obj.CheckPrime(Number)

        if(bRet == true)
        {
            console.log("Prime")
        }
        else
        {
            console.log("Not Prime")
        }
    }
}

program.main()