var pass = []
var fail = []

function passAndfail(per){
if (per <= 50){
    pass.push(per)
}
else {
   fail.push(per)
}}
var percentage =+prompt ('add maeks')
passAndfail(percentage)

var percentage =+prompt ('add maeks')
passAndfail(percentage)

var percentage =+prompt ('add maeks')
passAndfail(percentage)

var percentage =+prompt ('add maeks')
passAndfail(percentage)


console.log(pass)
console.log(fail)