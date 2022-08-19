// counter Loader Work start


// All Html Tag Get hear
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');
const cercle_min = document.getElementById('cercle_min');
const cercle_sec = document.getElementById('cercle_sec');
const sec = document.getElementById('sec');
const sec_last = document.getElementById('sec_last');
const sec_first = document.getElementById('sec_first');
const sec_1first = document.getElementById('sec_1first');
const min = document.getElementById('min');
const min_first = document.getElementById('min_first');
const min_last = document.getElementById('min_last');
const hour = document.getElementById('hour');
const hour_first = document.getElementById('hour_first');
const hour_last = document.getElementById('hour_last');
const border_transform = document.getElementById('border_transform');

const start_item = document.getElementById('start_item');
const pouse_item = document.getElementById('pouse_item');
const bell_icon = document.getElementById('bell_icon');
const cercle1 = document.getElementById('cercle-1');
const cercle2 = document.getElementById('cercle-2');
const time_tex = document.querySelector('#time_stat');


let start_time = 300;
let counter;
let totalHour;
let mainMin;
let mainSic;
let stopcount = 0;


/**
 * Timer set intreval Start hear
 * this function work auto just relode the page this interval working start.
 */

counter = setInterval( () => {

// this work just for time set
         let = totalSec = Math.floor(start_time);
         let = totalMin = Math.floor(totalSec / 60);
         totalHour = Math.floor(totalMin / 60);

         mainMin = totalMin - (totalHour * 60 );
        mainSic = totalSec - (totalHour * 60 * 60) - (mainMin * 60);


// All innerhtml Work start hear
        cercle_min.innerHTML = `${zero(mainMin)}`;
        cercle_sec.innerHTML = `${zero(mainSic)}`;
        hour.innerHTML = `${zero(totalHour)}`;
        min.innerHTML = `${zero(mainMin)}`; 
        sec.innerHTML = `${zero(mainSic)}`;
        sec_last.innerHTML = `${zero(mainSic +1)}`;
        min_last.innerHTML = `${zero(mainMin +1)}`;
        hour_last.innerHTML = `${zero(totalHour +1)}`;

        // #bell icon work 
        if( mainMin < 1){
            bell_icon.style.color = "red";
            cercle1.style.backgroundColor = "red";
        }
        // #bell icon work 
        if( mainMin == 0 && mainSic < 1){
            cercle2.style.backgroundColor = "red";
            time_tex.classList.add('time_stat');
        }



         // this work just for remove (-) value

        if(mainSic == '00'){
            sec_first.innerHTML = `59`;
            sec_1first.innerHTML = `58`;
        }else{
            sec_first.innerHTML = `${zero(mainSic -1)}`;
            sec_1first.innerHTML = `${zero(mainSic -2)}`;
        }


        if(mainMin == '00'){
            min_first.innerHTML = `00`;
        }else{
            min_first.innerHTML = `${zero(mainMin -1)}`;
        }
        if(totalHour == '00'){
            hour_first.innerHTML = `00`;
        }else{
            hour_first.innerHTML = `${zero(totalHour -1)}`;
        }

        // All innerhtml Work end hear


        border_transform.style.transform = `rotate(-${rantime(300, start_time)}deg)`;

/**
 * this function work for stop interval 
 * if timer count is over than timer auto stop
 */
        if(totalHour == 0 && mainMin == 0 && mainSic == 0 ){
            clearInterval(stopcount);
            start_item.style.display = 'block';
            pouse_item.style.display = 'none';
        }


        start_time--;

}, 1000);


start.addEventListener('click', function(){

        counter = setInterval( () => {

            // this work just for time set
                    let totalSec = Math.floor(start_time);
                    let totalMin = Math.floor(totalSec / 60);
                     totalHour = Math.floor(totalMin / 60);
            
                    mainMin = totalMin - (totalHour * 60 );
                    mainSic = totalSec - (totalHour * 60 * 60) - (mainMin * 60);
            
            
            // All innerhtml Work start hear
                    cercle_min.innerHTML = `${zero(mainMin)}`;
                    cercle_sec.innerHTML = `${zero(mainSic)}`;
                    hour.innerHTML = `${zero(totalHour)}`;
                    min.innerHTML = `${zero(mainMin)}`; 
                    sec.innerHTML = `${zero(mainSic)}`;
                    sec_last.innerHTML = `${zero(mainSic +1)}`;
                    min_last.innerHTML = `${zero(mainMin +1)}`;
                    hour_last.innerHTML = `${zero(totalHour +1)}`;


                    // #bell icon work 
                    if( mainMin < 1){
                        bell_icon.style.color = "red";
                        cercle1.style.backgroundColor = "red";
                    }
                    // #bell icon work 
                    if( mainMin == 0 && mainSic < 1){
                        cercle2.style.backgroundColor = "red";
                        time_tex.classList.add('time_stat');
                    }

                    // this work just for remove (-) value
                    if(mainSic == '00'){
                        sec_first.innerHTML = `00`;
                    }else{
                        sec_first.innerHTML = `${zero(mainSic -1)}`;
                    }
            
                    if(mainMin == '00'){
                        min_first.innerHTML = `00`;
                    }else{
                        min_first.innerHTML = `${zero(mainMin -1)}`;
                    }
                    if(totalHour == '00'){
                        hour_first.innerHTML = `00`;
                    }else{
                        hour_first.innerHTML = `${zero(totalHour -1)}`;
                    }
            
                    // All innerhtml Work end hear
            
            
                    border_transform.style.transform = `rotate(-${rantime(300, start_time)}deg)`;
            
            /**
             * this function work for stop interval 
             * if timer count is over than timer auto stop
             */
                    if(totalHour == 0 && mainMin == 0 && mainSic == 0 ){
                        clearInterval(stopcount);
                            start_item.style.display = 'block';
                            pouse_item.style.display = 'none';
                    }
            
                    start_time--;
            
                }, 1000);

                start_item.style.display = 'none';
                pouse_item.style.display = 'block'; 
});

// let loop = 1;

// while_loop = setInterval(() =>{

//     if(loop == 1){
//         sec_last.classList.add('loop');
//         sec.classList.add('loop');
//         sec_first.classList.add('loop');
//         sec_1first.classList.add('loop');
//     }else if(loop == 0){
//         sec_last.classList.remove('loop');
//         sec.classList.remove('loop');
//         sec_first.classList.remove('loop');
//         sec_1first.classList.remove('loop');
//          loop = 2;
//     }
//     if(totalHour == 0 && mainMin == 0 && mainSic == 0 ){
//         clearInterval(while_loop);
//         start_item.style.display = 'block';
//         pouse_item.style.display = 'none';
//     }
    
//     loop--;

// }, 1005);

// start.addEventListener('click', function(){
//     while_loop = setInterval(() =>{

//         if(loop == 1){
//             sec_last.classList.add('loop');
//             sec.classList.add('loop');
//             sec_first.classList.add('loop');
//             sec_1first.classList.add('loop');
//         }else if(loop == 0){
//             sec_last.classList.remove('loop');
//             sec.classList.remove('loop');
//             sec_first.classList.remove('loop');
//             sec_1first.classList.remove('loop');
//              loop = 2;
//         }
//         if(totalHour == 0 && mainMin == 0 && mainSic == 0 ){
//             clearInterval(while_loop);
//             start_item.style.display = 'block';
//             pouse_item.style.display = 'none';
//         }
        
//         loop--;
    
//     }, 1000);   
// });



    

/**
 * This function for Pause the time counter
 */
pause.addEventListener('click', function(){
    clearInterval(counter);
    // clearInterval(while_loop);
    start_item.style.display = 'block';
    pouse_item.style.display = 'none';

});


/**
 * This function for Reset the count;
 */
reset.addEventListener('click', function(){
    start_time = 300;
    border_transform.style.transform = `rotate(0deg)`;
    cercle_min.innerHTML = '05';
    cercle_sec.innerHTML = '00';
    min_last.innerHTML = '00';
    min_first.innerHTML = '00';
    hour_last.innerHTML = '00';
    hour_first.innerHTML = '00';
    sec_last.innerHTML = '00';
    sec_first.innerHTML = '00';
    hour.innerHTML = '00';
    min.innerHTML = '05'; 
    sec.innerHTML = '00'
    // sec_last.classList.remove('loop');
    // sec.classList.remove('loop');
    // sec_first.classList.remove('loop');
    // sec_1first.classList.remove('loop');
    start_item.style.display = 'block';
    pouse_item.style.display = 'none';
    bell_icon.style.color = "#697094";
    cercle1.style.backgroundColor = "#F0F4F8";
    cercle2.style.backgroundColor = "#F0F4F8";
    time_tex.classList.remove('time_stat');
    clearInterval(counter);
    // clearInterval(while_loop);
});



// Zero Funtion Work start hear.

/**
 * this funtion creat for get a(0) valu.
 * @param {*} time 
 * @returns just return a(0) .
 */

 function zero(time){
    if(time < 10){
        return `0${time}`
    }
    else{
        return `${time}`
    }
};

// Zero Funtion Work End Hear.




/**
 * this funtion creat for Rotet The counter bar.
 * @param {*} rantime 
 * @returns just return a(0) .
 */
function rantime(time, corrent){
    return (360* corrent) / time;
}








