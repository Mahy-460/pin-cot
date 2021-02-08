
        function getpin(){

            const random = Math.random()*10000;
            const pin = (random + '').split('.')[0];
            if(pin.length === 4){
                return pin ;
            }
            else{
                return getpin();
            }

        }


    const genaretPin = document.getElementById('genaretPin');
    genaretPin.addEventListener('click',  function(){

        const input = document.getElementById('input');
        input.value = getpin();

    });


    const counte = document.getElementById('calc-body');
    counte.addEventListener('click', function(mover){
        // console.log(mover.target.innerText);
     var digit = mover.target.innerText;
     
     if(isNaN(digit)){
            // console.log('handel none digit');
     }
     else{
            var total = document.getElementById('total');
             total.value = total.value + digit;
     }
   
    })
    const submit = document.getElementById('submit');
    submit.addEventListener('click', function(){
 
        const inpu = document.getElementById('input').value;
        const tota = document.getElementById('total').value;
          if(inpu === tota){
         
            const currect = document.getElementById('Notify');
            currect.style.display = "block";

            const unurrect = document.getElementById('notify');
            unurrect.style.display = "none";
            
          }
          else{

            const unurrect = document.getElementById('notify');
            unurrect.style.display = "block";

            const currect = document.getElementById('Notify');
            currect.style.display = "none";

          }
    });