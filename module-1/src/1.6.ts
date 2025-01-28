// normal function

function addNumber(num1: number, num2: number = 10): number {
  return num1 + num2;
}

addNumber(2, 3);

// arrow function
const add = (num1: number, num2: number): number => num1 + num2;

// method

const poorUser = {
  name: "Tuhin Hossain",
  balance: 0,
  addBalance(balance: number):string {
    return ` my balance is: ${this.balance + balance}`;
  },
};
