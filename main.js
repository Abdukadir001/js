const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const body = document.querySelector('body')
const img2 = document.querySelector('#img2')
const img1 = document.querySelector('#img1')
const text1 = document.querySelector('#text1')
const btn3 = document.querySelector('#btn3')


btn1.onclick = () => {
  body.classList.toggle('red')
}
btn2.onclick = () => {
  img1.classList.toggle('hidden')
  
  
}
btn3.onclick = () =>{
  text1.classList.toggle('white')
}

  const btn4 = document.querySelector('#btn4')
  btn4.onclick = () => {
    text1.classList.toggle('hidden')
    
   
     
    }