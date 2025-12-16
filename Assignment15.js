
//////////////////////////////////////////////////////////////////
//
// Function     : CheckVowel
// Description  : Display the given Ch is Vowel In JavaScript
// Auther       : Sanyam BhupendraKumar Ravne 
// Date         : 17/12/2025
//
//////////////////////////////////////////////////////////////////

function CheckVowel(ch)
{
    if(ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U' ||
       ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
       {
            return true;
       }
       else
       {
            return false;
       }
}

function main()
{
    let char1 = ' ', char2 = ' '
    bRet = false;

    bRet = CheckVowel('E');

    if(bRet == true)
    {
        console.log("it is a vowel")
    }
    else
    {
        console.log("it is not a vowel")
    }
}

main();