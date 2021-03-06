class Account {
  constructor(name, balance = 0) {
    this.name = name;
    this.balance = balance;
    this.transactionHistory = [];
  }

  deposit(amount) {
    if (typeof amount !== "number") {
      throw new Error("incorrect input");
    }
    this.balance = this.balance + amount;
    const today = new Date();
    this.transactionHistory.push({
      balance: this.balance,
      amount: amount,
      date: today.toDateString()
    });
    return this.balance;
  }

  withdrawal(amount) {
    if (typeof amount !== "number") {
      throw new Error("incorrect input");
    }
    if (this.balance < amount) {
      throw new Error("You do not have sufficient balance.");
    } else {
      const today = new Date();
      this.balance = this.balance - amount;
      this.transactionHistory.push({
        balance: this.balance,
        amount: amount,
        date: today.toDateString()
      });
      return this.balance;
    }
  }

  statement() {
    const userStatement = this.transactionHistory.reduce((a, b) => {
      //   return [transaction.date, transaction.amount, transaction.balance];
      return a + `\n${b.date} ${b.amount} ${b.balance}`;
    }, "Date Amount Balance");
    console.log(userStatement);
    return userStatement;
  }

  balance() {
    return this.balance;
  }
}

module.exports = Account;
