class Logic
{
    static firstOcc(arr, Length, No)
    {
        for(let i = 0; i < Length; i++)
        {
            if(arr[i] == No)
            {
                return i
            }
        }
        return -1
    }
}

class program
{
    static main()
    {
        const prompt = require("prompt-sync")();

        let Size = parseInt(prompt("Enter the number of Element: "))
        let Value = parseInt(prompt("Enter Number: "))
        let element = [];

        for(let i = 0; i < Size; i++)
        {
            let num = parseInt(prompt(`Enter element ${i + 1}: `))
            element.push(num)
        }

        let result = Logic.firstOcc(element, Size, Value)
        
        if(result == -1)
        {
            console.log("There no such number")
        }
        else
        {
            console.log("First Occurance of number is: "+(result + 1))
        }
    }
}

program.main()