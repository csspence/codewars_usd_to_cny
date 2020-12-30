/*
Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

For Example:

  usdcny(15) // => '101.25 Chinese Yuan'
  usdcny(465) // => '3138.75 Chinese Yuan'
The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers shold be rounded to the nearest hundredth (e.g. 21.00 NOT 21.0 or 21) (HINT: google toFixed)
*/

const usdcny = (usd) => {
  let cny = usd * 6.75;
  let str = cny.toString();
  let arr = str.split('.')
  if(arr.length === 1) {
    return arr[0] + '.00 Chinese Yuan';
  }
  if(arr[1].length === 2) {
    return arr[0] + '.' + arr[1] + ' Chinese Yuan';
  } else if(arr[1].length > 2) {
    if(arr[1][2] >= 5) {
      arr[1][1] = Number(arr[1][1]) + 1;
    }
    return arr[0] + '.' + arr[1] + ' Chinese Yuan';
  } else {
    return arr[0] + '.' + arr[1] + '0 Chinese Yuan';
  }
}