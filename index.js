let argv = process.argv;
let { LayananCustomerService } = require("./layanan-customer-service");
let { LayananTeller } = require("./layanan-teller");

let fs = require("fs");
let command = argv[2];

class Index {
  constructor() {
    this._cs = new LayananCustomerService();
    this._teller = new LayananTeller();
    this._data = JSON.parse(this.readFile());
  }

  readFile() {
    return fs.readFileSync("antrian.json");
  }

  writeFile() {
    fs.writeFileSync("antrian.json", JSON.stringify(this._data));
  }

  choose(menuNo) {
    if (menuNo === undefined || menuNo === "help") {
      console.log(`
     MENU:
    1. Ambil antrian Customer Service: node index.js 1
    2. Ambil antrian Teller: node index.js 2
    3. Panggil antrian Customer Service: node index.js 3
    4. Panggil antrian Teller: node index.js 4);`);
    } else {
      switch (menuNo) {
        case "1":
          this._cs.addListQueue(this._data[1]);
          this.writeFile();
          console.log(
            `nomor antrian anda adalah CS-${this._cs.queues._nomorAntrian}`
          );
          break;

        case "2":
          this._teller.addListQueue(this._data[0]);
          this.writeFile();
          console.log(
            `nomor antrian anda adalah TL-${this._teller.queues._nomorAntrian}`
          );
          break;
        case "3":
          (this._data[1].queues.length === 0)
            ? console.log("maaf antrian sudah kosong")
            : console.log(
                `nomor antrian CS-${
                  this._data[1].queues[0]
                } silahkan maju ke customer`
              );
          this._cs.removeQueue(this._data[1]);
          this.writeFile();
          break;
        case "4":
        (this._data[0].queues.length === 0)
        ? console.log("maaf antrian sudah kosong")
        : console.log(
            `nomor antrian TL-${
              this._data[0].queues[0]
            } silahkan maju ke customer`
          );
      this._teller.removeQueue(this._data[0]);
      this.writeFile();
          this.writeFile();
          break;
      }
    }
  }
}

let antri = new Index();
antri.readFile("antrian.json");
antri.choose(command);
antri.writeFile(command);
