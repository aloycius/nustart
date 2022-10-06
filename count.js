let counter = 0;
const count = ()=>{
    counter = counter + 1;
    counter = document.querySelector('p').innerHTML= counter;
    if (counter%10===0){
 alert(`Counter is now ${counter}`);
    }
}
document.addEventListener('DOMContentloaded',()=>{
    document.querySelector('button').onclick = count;
})