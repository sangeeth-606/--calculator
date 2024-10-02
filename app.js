let input = document.getElementById('inputBox')
let numbtns = document.querySelectorAll('.number')
let operbtns = document.querySelectorAll('.operator')
let eqbtn = document.querySelector('.eqBtn')
let allstring='';

let opers=['+','-','*','/','%']

numbtns.forEach(function(item){
    item.addEventListener('click',function(){
        allstring+=item.textContent
        input.value=allstring
    })
})
operbtns.forEach(function(item){
    item.addEventListener('click',function(){
        if ((opers.includes(allstring[(allstring.length)-1]) || (allstring==''))==false){
            allstring+=item.textContent
        }
        if (opers.includes(allstring[(allstring.length)-1])){
            allstring=allstring.slice(0,-1)
            allstring+=item.textContent
        }
        input.value=allstring
    })
})
document.querySelector('.ac').addEventListener('click',function(){
    allstring=""
    input.value=allstring
})
document.querySelector('.del').addEventListener('click',function(){
    allstring=allstring.slice(0,-1)
    input.value=allstring
})

function eq(){
    allstring=eval(allstring)+''
    input.value=allstring
}
// function eq() {
//     try {
//         allstring = (new Function('return ' + allstring))() + "";
//         input.value = allstring;
//     } catch (error) {
//         input.value = "Error";
//         allstring = '';
//     }
// }





