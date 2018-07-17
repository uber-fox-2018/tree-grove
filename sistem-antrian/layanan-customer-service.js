const {Queue} = require('./queue.js')

class LayananCustomerService {
  constructor() {
    //your code here
    this.division = "customer-service"
    this.queue = new Queue()
  }
  addQueue(data){
    this.queue.addQueue(data) // ambil dari queue -> dengan paramatere data-nya
  }

  popQueue(data){
    this.queue.popQueue(data)//hapus data CS 
  }
}

module.exports = {
  LayananCustomerService
}