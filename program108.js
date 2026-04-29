class Logic
{
    static check(arr)
    {
        for(let Num of arr)
        {
            if(Num == 11)
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
        let element = [];

        for(let i = 0; i < Size; i++)
        {
            let num = parseInt(prompt(`Enter element ${i + 1}: `))
            element.push(num)
        }

        let result = Logic.check(element)
        
        if(result == true)
        {
            console.log("Contains 11")
        }
        else
        {
            console.log("Not contains 11")
        }
    }
}

program.main()