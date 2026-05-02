class Logic
{
    static Maximum(Arr, Length)
    {
        let Max = Arr[0]
        let i = 0

        for(i = 0; i < Length; i++)
        {
            if(Arr[i] > Max)
            {
                Max = Arr[i]
            }
        }
        return Max
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

        let result = Logic.Maximum(element, Size)

        console.log(result)
    }
}

program.main()