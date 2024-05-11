quick_draw_data_set=["bottle,umbrella,pen,butterfly"]
random_no=Math.floor((Math.random()*quick_draw_data_set.length)+1)
console.log(quick_draw_data_set[random_no]);
sketch=quick_draw_data_set[random_no]
document.getElementById("sketch_to_be_drawn").innerHTML=sketch;

time_counter=0;
time_check="";
drawn_sketch="";
answer_holder="";
score=0;

function updateCanvas(){
    background("white");
    random_number=Math.floor(quick_draw_data_set)
    console.log(quick_draw_data_set[random_no]);
    sketch=quick_draw_data_set[random_no]
    document.getElementById("sketch_to_be_drawn").innerHTML=sketch;
}
function setup(){
    canvas.createCanvas(280,280);
    canvas.center()
    background("white");
}
function Draw()
{
    check_sketch()
    if(drawn_sketch==sketch){
        answer_holder=string("set")
        time_counter=counter++
        score=string("Score"+score)
    }
}
function check_sketch(){
    time_counter=counter++
    time=string("Timer"+time_counter)
    console.log(time_conuter);
    if(timer_counter>400){
        time_counter=0;
        timer_check="completed";
    }
    if(time_check=="completed"||answer_holder=="set"){
        timer_check="";
        answer_holder="";
        updateCanvas();
    }       
}
