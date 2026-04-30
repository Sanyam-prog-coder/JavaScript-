class Logic
{
    static Product(arr, Length)
    {
        let i = 0
        let Mult = 1
        let odd = 0

        for(i = 0; i < Length; i++)
        {
            if(arr[i] % 2 != 0)
            {
                Mult = Mult * arr[i]
                odd = 1
            }
        }
        if(odd == 0)
        {
            return 0
        }   
        return Mult
    }
}

class program
{
    static main()
    {
        const prompt = require("prompt-sync")();

        let Size = parseInt(prompt("Enter the number of Element: "))
        let element = [];

        for(let i = 0; i < Size; i++)
        {
            let num = parseInt(prompt(`Enter element ${i + 1}: `))
            element.push(num)
        }

        let result = Logic.Product(element, Size)

        console.log(result)
    }
}

program.main()