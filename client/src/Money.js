class Money {
    constructor(amount) {
		this.amount = amount
    }
    valueOf() {
        return Math.round(this.amount*100)/100;
      }

    toString(){
        return `${this.amount}`
    }
      
  }

 export function  addCheddar(m, n){
    return ((Math.round(m*100)/100) + (Math.round(n*100)/100)).toFixed(2)
  }

 export function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  
      const negativeSign = amount < 0 ? "-" : "";
  
      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;
  
      let almost = negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
      return `$${almost}`
    } catch (e) {
      console.log(e)
    }
  };

let m = new Money(50.42355446);
let n = new Money(30.342141);

console.log(m+n)

console.log(
 formatMoney ( addCheddar(0,30.342141 ))
)

console.log(
    addCheddar(12.32, 87)
)

export default Money;