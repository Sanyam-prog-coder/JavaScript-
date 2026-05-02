class Logic
{
    static Digit(Arr, Length)
    {
        let i = 0
        let No = 0
        let Digit = 0
        
        for(i = 0; i < Length; i++)
        {
            let Sum = 0
        
            No = Arr[i]

            if(No < 0)
            {
                No = -No
            }

            while(No != 0)
            {
                Digit = No % 10

                Sum = Sum + Digit

                No = Math.floor(No / 10)
            }

            console.log(Arr[i],Sum)
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