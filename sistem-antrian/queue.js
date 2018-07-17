class Queue {
  constructor() {
    this._antrian = []
    this._nomorAntrian = null//your code here
  }

  addQueue(data) {
    if(data.length === 0 ){
      this._nomorAntrian = 1
    }else{
      this._nomorAntrian = data[data.length-1]+1
    }
    data.push(this._nomorAntrian)
    this._antrian = data
  }

  popQueue(data) {
    data.shift()
  }
}

module.exports = Queue
