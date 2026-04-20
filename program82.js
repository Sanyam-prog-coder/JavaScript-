class Logic
{
    checkPalindrome(No)
    {
        let Original = No
        let Reverse = 0
        let Digit = 0

        while(No != 0)
        {
            Digit = No % 10

            Reverse = Reverse * 10 + Digit

            No = Math.floor(No / 10)
        }

        if(Original == Reverse)
        {
            console.log("it is a palindrome")
        }
        else
        {
            console.log("is not a palindrome")  
        }
    }
}

class program
{
    static main()
    {
        const obj = new Logic()

        const Number = 121

        obj.checkPalindrome(Number)
    }
}

program.main()