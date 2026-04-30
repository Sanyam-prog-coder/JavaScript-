class Logic
{
    static check(arr, No)
    {
        for(let Num of arr)
        {
            if(Num == No)
            {
                return true
            }
        }
        return false
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

        let result = Logic.check(element, Value)
        
        if(result == true)
        {
            console.log("True")
        }
        else
        {
            console.log("False")
        }
    }
}

program.main()