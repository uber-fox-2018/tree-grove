class Queue {
  constructor(data) {
    this.nomorAntrian = null //your code here
    this.antrian = []
  }

  addQueue(data) {
    //your code here
    if(data.length === 0){
      this.nomorAntrian = 1;
    }else{
      this.nomorAntrian = data[data.length-1]+1;
    }

    data.push(this.nomorAntrian)
    this.antrian = data
    
  }

  popQueue(data) {
    //your code here
     data.shift()
  }
}

module.exports = Queue;