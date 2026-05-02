class Logic
{
    static Digit(Arr, Length)
    {
        let i = 0

        for(i = 0; i < Length; i++)
        {
            if((Arr[i] >= 100 && Arr[i] <= 999) ||
               (Arr[i] >= -999 && Arr[i] <= -100))
               {
                console.log(Arr[i])
               }
        }
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

        Logic.Digit(element, Size)
    }
}

program.main()