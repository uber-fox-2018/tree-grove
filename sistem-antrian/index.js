const fs = require('fs')
const argv = process.argv.slice(2)
const [command] = argv
const LayananCustomerService = require('./layanan-customer-service')
const LayananTeller = require('./layanan-teller')

class Index {
  constructor() {
    this._data = this.readFile()
    this._cs = new LayananCustomerService()
    this._teller = new LayananTeller()
  }

  get data() {
    return this._data
  }

  get cs() {
    return this._cs
  }

  get teller() {
    return this._teller
  }

  readFile() {
    const readData = fs.readFileSync('antrian.json', 'utf-8')
    return JSON.parse(readData)
  }

  writeFile() {
    return fs.writeFileSync('antrian.json', JSON.stringify(this.data))
  }

  choose(menuNo) {
    let message = ''
    switch(menuNo) {
      case '1': {
        this.cs.addAntrian(this.data[1])
        this.writeFile()
        message = `Nomor antrian anda adalah CS-${this.cs.queue._nomorAntrian}`
        return message
        break
      }
      case '2': {
        this.teller.addAntrian(this.data[0])
        this.writeFile()
        message = `Nomor antrian anda adalah TL-${this.teller.queue._nomorAntrian}`
        return message
        break
      }
      case '3': {
        if (this.data[1].queues.length > 0) {
          message = `Nomor antrian CS-${this.data[1].queues[0]} silakan menuju ke Customer Service`
        } else {
          message = 'Antrian kosong'
        }
        this.cs.ambilAntrian(this.data[1])
        this.writeFile()
        return message
        break
      }
      case '4': {
        if (this.data[0].queues.length > 0) {
          message = `Nomor antrian TL-${this.data[0].queues[0]} silakan menuju ke Teller`
        } else {
          message = 'Antrian kosong'
        }
        this.teller.ambilAntrian(this.data[0])
        this.writeFile()
        return message
        break
      }
    }
  }

}

let antri = new Index();
console.log(antri.choose(command))
// console.log(antri.cs)
// console.log(antri.teller)
