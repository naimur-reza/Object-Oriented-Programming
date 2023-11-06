{
  //

  class BankAccount {
    public id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this._balance = _balance;
      this.name = name;
      this.id = id;
    }

    addDeposit(balance: number) {
      return this._balance + balance;
    }
    getBalance() {
      return this._balance;
    }
  }

  const johnAccount = new BankAccount(123, "John", 29);
  console.log(johnAccount.addDeposit(44));
  //
}
