class Logic
{
    static Range(arr, Length, Src, End)
    {
        let i = 0

        for(i = 0; i < Length; i++)
        {
            if(arr[i] >= Src && arr[i] <= End)
            {
                console.log(arr[i])
            }
        }
    }
}

class program
{
    static main()
    {
        const prompt = require("prompt-sync")();

        let Size = parseInt(prompt("Enter the number of Element: "))
        let Start = parseInt(prompt("Enter Start Number: "))
        let End = parseInt(prompt("Enter End Number: "))
        let element = [];

        for(let i = 0; i < Size; i++)
        {
            let num = parseInt(prompt(`Enter element ${i + 1}: `))
            element.push(num)
        }

        let result = Logic.Range(element, Size, Start, End)
    }
}

program.main()