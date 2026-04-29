class Logic
{
    static Frequency(arr, No)
    {
        let Count = 0

        for(let Num of arr)
        {
            if(Num == No)
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
        let Value = parseInt(prompt("Enter the number: "))
        let element = [];

        for(let i = 0; i < Size; i++)
        {
            let num = parseInt(prompt(`Enter element ${i + 1}: `))
            element.push(num)
        }

        let result = Logic.Frequency(element, Value)
        console.log(result)
    }
}

program.main()