class Logic
{
    static countEven(arr)
    {
        let Count = 0
        let Num = 0

        for(Num of arr)
        {
            if(Num % 2 == 0)
            {
                Count++
            }
        }

        return Count
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

        let result = Logic.countEven(element)
        console.log(result)
    }
}

program.main()