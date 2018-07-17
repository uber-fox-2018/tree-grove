const Queue = require('./queue')

class LayananCustomerService {
  constructor() {
    //your code here
    this.data = new Queue()
  }
  
  addData(obj){
    this.data.addQueue(obj)
  }

  shiftData(obj){
    this.data.shiftQueue(obj)
  }
}




module.exports = LayananCustomerService
