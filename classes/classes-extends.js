class formatDate extends Date {
  constructor(dateStr) {
    super(dateStr);
  }

  getFormattedDate() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}

console.log(new formatDate('August 19, 1975 23:15:30').getFormattedDate());
// expected output: "19-Aug-1975