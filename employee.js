class Employee {
  constructor(isEmpty) {
    //your code here
    // this.name = name;
    // this.level = level;
    this.isEmpty = true;
    this.queue = [];
  }

  CallEmployee(data) {
    data.isEmpty = false;
    this.isEmpty = data.isEmpty;

    console.log('status staff jadinya ===>'+data.isEmpty);
  }
}

module.exports = {
  Employee
};
