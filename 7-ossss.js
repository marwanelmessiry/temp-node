const os=require('os')

user=os.userInfo()
//console.log(user);
console.log(`the uptime is ${os.uptime()} seconds`);
