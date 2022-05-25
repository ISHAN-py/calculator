let str1 = '';
let buttons = document.querySelectorAll('.btn')
Array.from(buttons).forEach((b)=>{
    b.addEventListener('click',(e)=>{
        console.log(e.target)
        try{
            if (e.target.innerHTML== 'AC'){
                str1 = '';
                document.querySelector('input').value = str1
            }
            else if (e.target.innerHTML== '='){
                str1 = eval(str1);
                document.querySelector('input').value = str1
            }
            else{
                str1 = str1+e.target.innerHTML;
                document.querySelector('input').value = str1
            }
        }
        catch(e){
            console.log(e)
            str1 = 'Wrong Input';
            document.querySelector('input').value = str1
        }
    })
})
