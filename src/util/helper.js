const printDate = function(){
    let a = new Date()
    console.log(a.getDate())
}
const printMonth = function(){
    let b = new Date()
    console.log(b.getMonth()+1)
}
const getbatchinfo = function(){
    console.log("Radon,w3, D3, The topic for today is Node js module system")
}
module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getbatchinfo = getbatchinfo