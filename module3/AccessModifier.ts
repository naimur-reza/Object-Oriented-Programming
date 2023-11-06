{
  //

  class BankAccount {
    public id: number;
    public name: string;
    private balance: number;

    constructor(id: number, name: string, balance: number) {
      this.balance = balance;
      this.name = name;
      this.id = id;
    }

    addDeposit(balance: number) {
      return this.balance + balance;
    }
  }

  const johnAccount = new BankAccount(123, "John", 29);
  console.log(johnAccount.addDeposit(44));
  //
}
