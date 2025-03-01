{
  //access  modifiers
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    addDeposite(balance: number) {
      this._balance = this._balance + balance;
    }
    getBalance() {
      return this._balance;
    }
  }
  class StudenAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const myAccount = new BankAccount(1234, "Tuhin Hossain", 321);
  console.log(myAccount);
  myAccount.addDeposite(120);
  const myBalance = myAccount.getBalance();
  console.log(myBalance);

  //
}
