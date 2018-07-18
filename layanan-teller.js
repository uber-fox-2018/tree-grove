let { Queue } = require("./queue");
let { Employee } = require("./employee");

class LayananTeller {
  constructor() {
    this.queues = new Queue();
    this.detail = new Employee();
    //your code here
  }

  addQueueTL(data) {
    this.queues.addQueue(data);
    this.detail.CallEmployee(data)
  }

  removeQueueTl(data,status){
    this.queues.popQueue(data);
    this.detail.CallEmployee(status)
  }
}

module.exports = {
  LayananTeller
};
