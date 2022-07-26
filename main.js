

   // Домашнее задание
   var pr = new Promise((resolve, reject) => {

    setTimeout(() => {
      reject(alert("привет"));
    }, 1000);
  
  });
  
  pr.catch(()=>g.style.backgroundColor="green");






/*промисы УРОК*/
const p = new Promise (function(resolve /* параметр выполнено */, reject /* параметр не выполнено*/){
    console.log(resolve, reject);
    setTimeout(resolve, 2000);
    //setTimeout(reject, 3000);

});

 /* функция промиса выполняется на правду */
    p.then(
    function gyd (){
        console.log("GYYYD");
    });

    /* функция выполняется на ошибку */
    p.catch(
    function bed (){
        console.log("BEEED");
    }
)

console.log(p)


const g=document.querySelector('.circl')
console.log(g)

function move(g, dx=0, dy=0){

return new Promise(function(resolve){
    if(dx || dy){
        g.style.transform+=`translate(${dx}px, ${dy}px)`;
    }
   g.addEventListener('transitionend', resolve, {
    once:true
   })
})
  
}

move(g, 400, 0)
.then(()=> move(g, 0, 400))
.then(()=> move(g, -400, 0))
.then(()=> move(g, 0, -400))



         
 