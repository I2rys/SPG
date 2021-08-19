//Dependencies
const SRP = require("secure-random-password")
const Chalk = require("chalk")

//Main
const Self_Args = process.argv.slice(2)

//Main
if(Self_Args.length == 0){
    console.log(`node index.js <length>
Example: node index.js 99`)
    process.exit()
}

if(isNaN(Self_Args[0])){
    console.log(`${Chalk.grey("[") + Chalk.redBright("ERROR") + Chalk.grey("]")} length is not an Int.`)
    process.exit()
}

Self_Args[0] = parseInt(Self_Args[0])

console.log(`${Chalk.grey("[") + Chalk.blueBright("INFO") + Chalk.grey("]")} Generating your password with the length of ${Self_Args[0]}, please wait.`)
console.log(Chalk.greenBright(`Your password has been generated: ${SRP.randomPassword({ avoidAmbiguous: false, length: Self_Args[0], characters: "abcdefghijklmnopqrstuvwxyz!@#$%^&*_+}:?>" })}`))
