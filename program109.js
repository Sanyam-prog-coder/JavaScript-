class Logic
{
    static Frequency(arr)
    {
        let Count = 0

        for(let Num of arr)
        {
            if(Num == 11)
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

        let result = Logic.Frequency(element)
        console.log(result)
    }
}

program.main()