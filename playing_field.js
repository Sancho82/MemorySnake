const table = require('table');
const ctx = require('axel');

let tableView;
let tableData = [];
let content = ["█", "█", "█", "█", "█", "█", "█"]
for (let i = 0; i < content.length; i++) {
  tableData.push(content);
  tableView = table.table(tableData)
}
console.log(tableView);