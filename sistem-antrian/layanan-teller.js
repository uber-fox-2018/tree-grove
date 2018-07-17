const {Queue} = require('./queue.js')

class LayananTeller {
  constructor() {
    //your code here
    this.division = 'teller'
    this.Queue = new Queue()
  }

  addQueue(data){
    this.Queue.addQueue(data)

  }

  popQueue(data){
    this.queue.popQueue(data)//hapus data CS 
  }

}

module.exports = {
  LayananTeller:LayananTeller
}