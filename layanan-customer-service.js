let { Queue } = require("./queue");
let { Employee } = require("./employee");

class LayananCustomerService {
  constructor() {
    this.queues = new Queue();
    this.detail = new Employee();

    //your code here
  }

  addQueueCs(data) {
    this.queues.addQueue(data);
  }

  removeQueueCs(data,status){
    this.queues.popQueue(data);
    this.detail.CallEmployee(status)
  }


}

module.exports = {
  LayananCustomerService
};
