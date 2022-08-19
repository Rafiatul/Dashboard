// get all elements

const top_save = document.getElementById('top_save');
const bottom_gen_btn = document.getElementById('bottom_gen_btn');

/**
 * top form Save button work
 */
top_save.addEventListener('click', function(e){
    e.preventDefault();
    top_save.classList.add("top_save");
});


bottom_gen_btn.addEventListener('click', () =>{
        bottom_gen_btn.classList.add('bottom_gen_btn');
});





$(".statement-video").click(function(){
        $(".statement-video").hide(); 
        $(".card-list").hide(); 
        $(".video-list-aria").show(); 
    });

    $(".video-logo span i").click(function(){
        $(".statement-video").show(); 
        $(".card-list").show(); 
        $(".video-list-aria").hide(); 
});

