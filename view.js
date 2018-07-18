class View {
  v_help() {
    console.log(`<br>$ MENU:
    <br>$ 1. Ambil antrian Customer Service: node index.js 1
    <br>$ 2. Ambil antrian Teller: node index.js 2
    <br>$ 3. Panggil antrian Customer Service: node index.js 3
    <br>$ 4. Panggil antrian Teller: node index.js 4`);
  }

  //   v_queueCS(msg) {
  //     console.log(msg);
  //   }

  v_display(msg) {
    console.log(`               `);
    console.log(`***************`);
    console.log(msg);
    console.log(`***************`);
    console.log(`               `);

  }

  //   v_queueTL(msg) {
  //     console.log(msg);
  //   }
}

module.exports = {
  View
};
