class Logic
{
    static Frequency(arr)
    {
        let CountEven = 0
        let CountOdd = 0
        let Num = 0
        let Result = 0

        for(Num of arr)
        {
            if(Num % 2 == 0)
            {
                CountEven++
            }
            else
            {
                CountOdd++
            }
        }

        Result = CountEven - CountOdd

        return Result
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