{
  //

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected lastDeposit: number;
    private _balance: number; // private property doesn't share with any other classes while protected property share with child classes.

    constructor(
      id: number,
      name: string,
      _balance: number,
      lastDeposit: number
    ) {
      this._balance = _balance;
      this.lastDeposit = lastDeposit;
      this.name = name;
      this.id = id;
    }

    public addDeposit(balance: number) {
      return this._balance + balance;
    }
    public getBalance() {
      return this._balance;
    }
  }

  const johnAccount = new BankAccount(123, "John", 29, 20000);
  console.log(johnAccount.addDeposit(44));
  //
}
