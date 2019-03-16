var one = [
    a1 = {
        image: "./assets/images/ep.jpg",
        number: "1",
        prompt: "The weekend arrives and you finally have some time away from work. You've decided to spend some time at the local park for some fun low-stress activities.<br><br>   Suddenly you hear loud gunshots and screams. You can see both the assailant and the victims. From where you are, you are mostly obscured from the shooter's sight.<br><br>   The shooter's ride drives off without them. In a fit, they shout threats at the fleeing crowd, seemingly in a rage. They start to walk toward some people fleeing into the trees...",
        name: "Park Shooting",
        period: "Mid Life",
        fire: {
            success: "19+<br>You pick up a flat stone by your feet, roughly half a pound in weight. You take aim and hurl it as if skipping across a pond. Beyond any expectations, it ricochets off the sidewalk and into the side of the shooter's head, knocking them unconscious. You disarm them, restrain them, and call for police.<br>",
            failure: "10-18<br>You gather up your rage and step out from behind your cover, shouting. The shooter spots you immediately and fires. You take the shot in your hip and collapse. Shock sets in and you fall unconscious, only to be revived at the hospital with grim news. Even with phisical rehabilitation, your chances of running again are slim to none.<br>",
            critFail: "1-9<br>You charge the shooter. Less than fifty feet seperate you. Hoping to throw them off balance and hold them accountable for their actions, your vision tunnels. You fail to notice the driver has returned. They plow over the curb and two other park goers, careening invariably in your direction. It is too late to escape..."
        },
        water: {
            success: "10+<br>You call paramedics and the police from behind your cover. Then slip from one hiding place to the next, getting closer and closer to the fallen victims while the shooter is preocupied. You tear their clothes to tourniquet their open wounds and do your best to assure them that everything will be alright. You insist that they do not make any movement or noise until the ambulance arrives. Then, you slip back to your hiding place to where you wait to give a statement.<br>",
            failure: "1-9<br>You attempt to slip from one hiding place to hiding place but in doing, attract all of the dogs who's leads were dropped in the commotion. You can't attempt to help the fallen victims without giving yourself away. But you will survive if you stay here."
        },
        air: {
            success: "12+<br>Life has been rough up until this point. You're working a dead end job, your car barely runs, food is expensive, and even on your day off, the world seems to fall apart. You sneak back to your vehicle with the intent to flee but remember that it sounds like a drive by every time you pump the gas. With this in mind, you drive around the car park, sounding as many of the gunshot-like sounds as you can. The shooter flees the park and thus abandons their persuit of the innocent park-goers. You relate this to the arriving police officers.<br>",
            failure: "1-12<br>Life has been rough up until this point. You're working a dead end job, your car barely runs, food is expensive, and even on your day off, the world seems to fall apart. You sneak back to your vehicle with the intent to flee. It starts right up and runs quietly. You take this as a sign and leave the park. You are in tact but live with the fact that you had a chance to help but chose to abandon the other people in the park..."
        },
        earth: {
            success: "8+<br>You wait patiently for the shooter to be out of sight, looking for any incriminating evidence to link them to the crime. You notice the driver pull back into the parking lot and are able to copy the license plate into your phone. You take a photo of the vehicle and provide this information to the police upon their arrival.<br>",
            failure: "1-8<br>You attempt to gather information on the scene. You see the driver pull back into the parking lot and take a photo of them. As you do, it becomes abundantly apparent that the flash on your phone is on. The vehicle charges toward you. A passenger gets out with a baseball bat and uses it to smash your phone from your hand, then knocks you unconscious. You wake up in the hospital with the other victims with a horrendous headache and a swollen hand, but not critically injured."
        }
    }
];

var world = [
    a1 = {
        image: "",
        number: "",
        prompt: "",
        name: "",
        period: "",
        fire: {
            success: "",
            failure: "",
            critFail: ""
        },
        water: {
            success: "",
            failure: "",
            critFail: ""
        },
        air: {
            success: "",
            failure: "",
            critFail: ""
        },
        earth: {
            success: "",
            failure: "",
            critFail: ""
        }
    }
];
switch(window.location.pathname){
    case "/ovs.html":
    ovs();
    break;
    case "/ovw.html":
    ovw();
    break;
    case "/ova.html":
    ova();
    break;
    default: 
    console.log("Switch Default");
    console.log(window.location.pathname);
    break;0
};


function ovs(){
    for (var i=0; i <one.length; i++){
        var pButton = "<div class='btn btn-primary prompts'>Prompt</div>";
        
        var eButton = "<div class='btn btn-success earth'>Earth</div>";
        
        var fButton = "<div class='btn btn-danger fire'>Fire</div>";
        
        var aButton = "<div class='btn btn-light air'>Air</div>";
        
        var wButton = "<div class='btn btn-primary water'>Water</div>";
        
        var reactions = "<div class='btn btn-primary reactions'>Reactions</div>";

    var pBody = "<div class='promptData hide'>"+one[i].prompt+"</div>"
    
    var fire = "<div class='fireData hide'>Success: "+one[i].fire.success+"<br>Failure: "+one[i].fire.failure+"<br>Critical Failure: "+one[i].fire.critFail+"<div>";

    var earth = "<div class='earthData hide'>Success: "+one[i].earth.success+"<br>Failure: "+one[i].earth.failure+"<br>Critical Failure: "+one[i].earth.critFail+"<div>";

    var air = "<div class='airData hide'>Success: "+one[i].air.success+"<br>Failure: "+one[i].air.failure+"<br>Critical Failure: "+one[i].air.critFail+"<div>";

    var water = "<div class='waterData hide'>Success: "+one[i].water.success+"<br>Failure: "+one[i].water.failure+"<br>Critical Failure: "+one[i].water.critFail+"<div>";

    var pImg = "<div><h1 class='number'>"+one[i].number+"</h1><img class='advimg' src='"+one[i].image+"'alt='advimg'><h3 class='card-title'>"+one[i].name+": "+one[i].period+"</h3></img></div>"

     var pCard = $("<div class='card advcard'>"+pImg+
     "<div class='card-body'><ul><li>"+pButton+pBody+"</li><li>"+fButton+fire+"</li><li>"+eButton+earth+"</li><li>"+aButton+air+"</li><li>"+wButton+water+"</li></ul></div></div>");

     $(".promptBox").append(pCard);
 };
$(".advcard").on("click", ".btn", function(){
    if ($(this).hasClass("prompts")){
        $(this).parent().children(".promptData").toggleClass("hide");
    }
    else if ($(this).hasClass("fire")){
        $(this).parent().children(".fireData").toggleClass("hide");
    }
    else if ($(this).hasClass("earth")){
        $(this).parent().children(".earthData").toggleClass("hide");
    }
    else if ($(this).hasClass("air")){
        $(this).parent().children(".airData").toggleClass("hide");
    }
    else if ($(this).hasClass("water")){
        $(this).parent().children(".waterData").toggleClass("hide");
    }
})
};

var obw = function(){

};

for (var i=0; i<ovs.length; i++) {

};

$(document).ready(function(){
    console.log(window.location.pathname)
});