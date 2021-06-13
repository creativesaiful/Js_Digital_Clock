

function digitalClock(){

    var input= new Date();
    var hourse = input.getHours();
    var minutes = input.getMinutes();
    var seconds = input.getSeconds();
    var timeformate = "AM";

    hourse= hourse==0? hourse=12 : hourse;
    
    // if (hourse==0) {
    //     hourse=12
    //} 
    if (hourse>12) {
        hourse= hourse-12;
        timeformate="PM";
    }
    

    hourse = hourse<10? "0"+hourse: hourse;
    minutes = minutes<10? "0"+minutes: minutes;
    seconds = seconds<10? "0"+seconds: seconds;



    display = `${hourse}: ${minutes} : ${seconds}`;
    document.querySelector("#time").innerText=display;
    document.querySelector("small").innerText=timeformate;

    setInterval(digitalClock, 1000)



}
digitalClock();
