class Queue {
  constructor() {
    this._nomorAntrian = null //your code here
    this._antrian = []
  }

  addQueue(data) {
    //your code here
      if(data.queues.length === 0){
        //jika 0, maka sama dengan 1
        this._nomorAntrian = 1
      } else {
        // jika ada angka 1, maka tambahkan 1 (dari nilai index terakhir(length-1))
        this._nomorAntrian = data.queues[data.queues.length-1] + 1 // data.queues[data.queues.length-1] => mengambil data queues yg ada di paket data, dengan index takhir lalu ditambah 1 agar bertambah
      }
   
      data.queues.push(this._nomorAntrian)
      //jika this._antrian bertambah, maka data.queues bertambah juga
      this._antrian = data.queues


      // console.log('........'+this._nomorAntrian);

    }

    




  popQueue() {
    //your code here
    data.shift(data[0]) //hapus data dari depan 'shift'
  }
}

module.exports = {
  Queue:Queue
}