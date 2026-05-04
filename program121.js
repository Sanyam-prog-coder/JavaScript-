class Logic
{
    static Difference(Arr, Value)
    {
        let i = 0
        let SumEven = 0
        let SumOdd = 0

        for(i = 0; i < Value; i++)
        {
            if(Arr[i] % 2 == 0)
            {
                SumEven = SumEven + Arr[i]
            }
            else if(Arr[i] % 2 != 0)
            {
                SumOdd = SumOdd + Arr[i]
            }
        }

        return SumEven - SumOdd
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

        let result = Logic.Difference(element, Size)

        console.log(result)
    }
}

program.main()