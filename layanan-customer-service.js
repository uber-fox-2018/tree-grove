let { Queue } = require("./queue");

class LayananCustomerService {
  constructor() {
    this.division = "customer-service";
    this.queues = new Queue();
    // console.log();
  }

  addListQueue(data) {
    this.queues.addQueue(data);
  }

  removeQueue(data){
    this.queues.popQueue(data);

  }
}

module.exports = {
  LayananCustomerService
};

// let customerService= new LayananCustomerService()
