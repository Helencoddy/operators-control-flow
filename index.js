let subjects = 'other';

if (subjects === 'Art') {
    console.log('Government, Economics, Literature, History');
} else if (subjects === 'Science') {
    console.log('Physics, Chemistry, Biology, Technical Drawing');
}  else if (subjects === 'Social Science') {
    console.log('Accounting, Commerce, Marketing, Geography');
}  else {
    console.log('English, Mathematics')
}



//Assignment 2
/*1)	Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. The program stores the resulting value to pwr. Then you log the answer in this format: 
“The number (pwr) is the power of 2 nearest to (num).”
If there are two candidate values, display the smaller one. For example, 2 and 4 4 are both the powers of 2 nearest to 3. The function should display 2 because it’s smaller than 4.

For example,
If num = 40, pwr = 32. Then you log to your console in this format:
“The number 32 is the power of 2 nearest to 40.”

If num = 50, pwr = 64.. Then you log to your console in this format:
“The number 64 is the power of 2 nearest to 50.”*/

function pNum(num) {
//1. We start by initializing the power to 1 and multiply it by 2 until it becomes larger than the input number
    let pwr = 1;
    while(pwr <= num) {
        per = pwr * 2;
    }
//2. We declare two variables one that holds the power of two before and after the targer value
    let prevPwr = pwr / 2;
    let nextPwr = pwr;

//3. Then we compare which gives a lesser difference when it's substracted from the previous and our target number -> (in this case num)
//4. Output our result accordingly

    if ((num - prevPwr) < (nextPwr - num) ){
        console.log ('The number ${prevPwr} is the power of 2 nearest to ${num}');
    } else {
        console.log ('The number ${nextPwr} is the power of nearest to ${num}');
    }

}
//pNum(40); ----> Test Case
