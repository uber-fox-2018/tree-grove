let { Queue } = require("./queue");


class LayananTeller {
  constructor() {
    this.division='teller'
    this.queues=new Queue();
  }

  addListQueue(data) {
    
     this.queues.addQueue(data)
  }

  removeQueue(data){

    this.queues.popQueue(data)
  }

}

module.exports = {
  LayananTeller
};
