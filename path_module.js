const path = require('path')

//seperator property 
console.log("seperator : ", path.sep);  // \

console.log("dirName : ", __dirname);  // D:\study\Node-and-Express-practice
console.log("fileName : ", __filename);  //  D:\study\Node-and-Express-practice\path_module.js


//path.resolve() - give the abosute path, it accept string that are actually path item
const abosutePath = path.resolve('controller', 'userController')
console.log("abosutePath : ", abosutePath);  //D:\study\Node-and-Express-practice\controller\userController


//path.join() - used to join the path
const pathName = path.join("/controller", 'userController')
console.log("pathName : ", pathName);  // \controller\userController