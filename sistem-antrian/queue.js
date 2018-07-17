class Queue {
  constructor() {
    this._nomorAntrian = 0 //your code here
    this._antrian = []
  }

  get antrian(){
    console.log(this._antrian);
    
    return this._antrian

  }

  set antrian(arr){
    this._antrian = arr
  }
  
  addQueue(obj) {
    this.antrian = obj
    
    var length = obj.queues.length-1
    
    if(obj.queues.length === 0){
        obj.queues.push(1)
      }else{
        obj.queues.push(obj.queues[length]+1)
      }
      this.antrian =  obj.queues
  }

  shiftQueue(obj) {
    //your code here
    obj.queues.shift()
    this.antrian = obj.queues
  }


}

// var a = new Queue()
// a.addQueue(1)
// console.log(a._antrian);


module.exports = Queue
