class Logic
{
    static Display(Arr, Value)
    {
        let i = 0
        
        for(i = 0; i < Value; i++)
        {
            if(Arr[i] % 11 == 0)
            {
                console.log(Arr[i])
            }
        }
    }
}

class program
{
    static main()
    {
        const prompt = require("prompt-sync")();

        let Size = parseInt(prompt("Enter Number of Elements: "))

        let element = []
        let i = 0

        for(i = 0; i < Size; i++)
        {
            let Num = parseInt(prompt(`Enter Element ${i + 1}: `))
            element.push(Num)
        }

        Logic.Display(element, Size)
    }
}

program.main()