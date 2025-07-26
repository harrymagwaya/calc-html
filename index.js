const btn  = document.querySelectorAll('.num')

/**
 * get button clicked
 * get the element
 * store the element in a variabe
 * also get the operator
 * then carry out the operation
 * use the variable with the result and 
 */

let retrievedText = [];

let oper;

var result;
btn.forEach(button=>{
    button.addEventListener("click", function(event){
        alert("clicked")
        //console.log('button clicked:', event.target.textContent)
        let num1 = +event.target.textContent 
        retrievedText.push(num1) 
        console.log(num1)
        console.log(retrievedText)
        // retrievedText.forEach(e => {
        //     console.log(e)
        // })
    })
})

function calculate(){
    for (let index = 0; index < retrievedText.length; index++) {
        if (oper == "x") {
            retrievedText[index] * retrievedText[index + 1]
        }else if (oper == "+"){
            retrievedText[index] + retrievedText[index+1]
        }else if (oper == "-") {
            retrievedText[index] - retrievedText[index + 1]
        }else if (oper == "/") {
            retrievedText[index] / retrievedText[index + 1]
        }else{
            retrievedText[index] % retrievedText[index + 1]
        }
        
    }
    
}






// btn.forEach(secondButton=>{
//     secondButton.addEventListener("", (event)=>{
//         num2 = event.target.textContent
//         console.log(num2)
//     })
// })



// btn.addEventListener("click", ()=>{
//     console.log("clicked")
//     console.log(btn.textContent)
//     alert("clicked")
// })