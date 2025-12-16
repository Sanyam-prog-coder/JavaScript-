
//////////////////////////////////////////////////////////////////
//
// Function     : DisplayConvert
// Description  : Display the Converted Ch In JavaScript
// Auther       : Sanyam BhupendraKumar Ravne 
// Date         : 17/12/2025
//
//////////////////////////////////////////////////////////////////

function DisplayConvert(ch)
{
     if (ch === ch.toUpperCase()) 
        {
            return ch.toLowerCase();
        } 
    else 
        {
            return ch.toUpperCase();
        }
}

function main()
{ 
    let char1 = 'a';
    let char2 = 'Z';

    console.log(`Input: ${char1} -> Output: ${DisplayConvert(char1)}`);
    console.log(`Input: ${char2} -> Output: ${DisplayConvert(char2)}`);
}

main()