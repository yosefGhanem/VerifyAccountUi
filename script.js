// when typing another number move to next box
const codes = document.querySelectorAll('.code')

// now it puts the cursor automatically in there
codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e)=>{
        if(e.key >= 0 && e.key <=9){
            // now hit backspace and hit another number then it replaces it
            codes[idx].value = ''
            setTimeout(()=>{codes[idx + 1].focus()},10)/*waits 10 milliSeconds*/
            // move to next one if this happens   
        }else if(e.key ==='Backspace'){
            setTimeout(()=> {codes[idx -1].focus()},10)
        }
    })
})