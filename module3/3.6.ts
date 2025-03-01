{
  //getter and setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    set deposite(amount: number) {
      this._balance = this._balance + amount;
    }
    get balance() {
      return this._balance;
    }
  }

  const myAccount = new BankAccount(1234, "Tuhin Hossain", 321);
  myAccount.deposite=79
  const myBalance = myAccount.balance;
  console.log(myBalance);

  //
}
