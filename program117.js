class Logic
{
    static Minimum(Arr, Length)
    {
        let Min = Arr[0]
        let i = 0

        for(i = 0; i < Length; i++)
        {
            if(Arr[i] < Min)
            {
                Min = Arr[i]
            }
        }
        return Min
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

        let result = Logic.Minimum(element, Size)

        console.log(result)
    }
}

program.main()