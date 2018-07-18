let argv = process.argv.slice(2);
let command = argv[0];
// console.log(command);

const { Controller } = require("./controller");
let num;
let controller = new Controller();

switch (command) {
  case undefined:
    controller.c_help();
    break;

  case "1":
    controller.c_queueCS();
    break;

  case "2":
    controller.c_queueTL();
    break;

  case "3":
    controller.c_callCS();
    break;

  case "4":
    controller.c_callTL();
    break;

  case "5":
    controller.c_refresh();
    break;
}
