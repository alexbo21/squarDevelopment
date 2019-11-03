// Data Compliling and Compressing Algorithim
// (DCCA)



// event Lisseners

    //how many times keys were pressed
    document.addEventListener("click", func1);

    //how many times the ad box was left by the mouse
    document.getElementById("adv").addEventListener("mouseout", func2);

    //How many times the user hovered over the main section
    document.getElementById("mainSec").addEventListener("mouseout", func3);

    // how many times the user hovered the menu
    document.getElementById("sidebar").addEventListener("mouseout", func4);    


//functions when event lissener is triggered
    
function func1(){
    click++;
};

function func2(){
    adBoxLeft++;
};

function func3(){
    mainSectionLeft++;
};

function func4(){
    menuSectionLeft++;
};



 //varables

 let click = 0;
 let adBoxLeft = 0;
 let mainSectionLeft = 0;
 let menuSectionLeft = 0;





// compiling algorithim