const os = require('os')

// info about current user 
const user = os.userInfo()
console.log(user)

// methode returns the system uptime in secondes
console.log(` the system up time is ${os.uptime()} secondes`)

const currentOs = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)