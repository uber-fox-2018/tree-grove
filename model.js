let { LayananTeller } = require("./layanan-teller");
let { LayananCustomerService } = require("./layanan-customer-service");
let { Employee } = require("./employee");
const fs = require("fs");

class Model {
  constructor() {
    this._data = JSON.parse(this.readFile());
    this._cs = new LayananCustomerService();
    this._teller = new LayananTeller();
    this.employee = new Employee();
    // console.log(this._data);
  }

  readFile() {
    return fs.readFileSync("./bonus.json");
  }

  writeFile() {
    return fs.writeFileSync("./bonus.json", JSON.stringify(this._data));
  }

  m_queueCS() {
    // console.log(this._data[1]);

    this._cs.addQueueCs(this._data[1]);
    this.writeFile();
    let msg = `Antrian anda adalah CS-${this._cs.queues._nomorAntrian}`;
    return msg;
  }

  m_callCS() {
    if (this._data[1].queues == 0) {
      let msg = "no antrian sudah kosong";
      return msg;
    } else {
      let num = Math.round(Math.random());
      console.log(`Call =====> ` + num);
      if (this._data[1].detail[num].isEmpty == true) {
        this._cs.removeQueueCs(this._data[1], this._data[1].detail[num]);
        this.writeFile();
        let msg = `Nomor antrian CS-${this._data[1].queues[0] +
          1} silakan menuju ke Customer Service dengan saudara ${
          this._data[1].detail[num].name
        }`;
        return msg;
      } else {
        let msg =
          "Semua layanan CS kami sedang sibuk. Tunggulah beberapa saat lagi";

        return msg;
      }
    }

    // console.log(this._data[1].queues);
  }

  m_queueTL() {
    this._teller.addQueueTL(this._data[0]);
    this.writeFile();
    let msg = `Antrian anda adalah TL-${this._teller.queues._nomorAntrian}`;
    return msg;
  }
  m_callTL() {
    if (this._data[0].queues == 0) {
      let msg = "no antrian sudah kosong";
      return msg;
    } else {
      let num = Math.round(Math.random());
      console.log(`Call =====> ` + num);
      if (this._data[0].detail[num].isEmpty == true) {
        this._teller.removeQueueTl(this._data[0], this._data[0].detail[num]);
        this.writeFile();
        let msg = `Nomor antrian TL-${this._data[0].queues[0] +
          1} silakan menuju ke Customer Service dengan saudara ${
          this._data[0].detail[num].name
        }`;
        return msg;
      } else {
        let msg =
          "Semua layanan CS kami sedang sibuk. Tunggulah beberapa saat lagi";

        return (msg);
      }
    }
  }

  m_refresh() {
    // console.log(this.employee.isEmpty);

    this._data.forEach(element => {
      element.detail.forEach(status => {
        if (status.isEmpty == false) {
          status.isEmpty = true;
          // console.log(status.isEmpty);

          this.employee.isEmpty = status.isEmpty;
          console.log(
            `staff ${status.name} [${
              this.employee.isEmpty
            }] siap melayani anda ^^`
          );
        }
        this.writeFile();
      });
    });
  }
}

module.exports = {
  Model
};
