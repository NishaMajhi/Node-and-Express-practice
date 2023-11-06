const os = require('os')

//system user info
console.log("system user info : ", os.userInfo());

//system time in milliseconds
console.log("system time in milliseconds : ", os.uptime());

const osModules = {
    systemName: os.type(),
    release: os.release(),
    totalSpace: os.totalmem(),
    freeSpace: os.freemem()
}

console.log(osModules);