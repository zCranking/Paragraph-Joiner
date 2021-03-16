function p1(){
var inputs_1 = [];
for(var a = 1; a <= 10 ; a++){
    inputs_1.push(document.getElementById("nots_" + a).value);
};
document.getElementById("paragraph_1").innerHTML = inputs_1.join(". ");
};
function p2(){
    var inputs_1 = [];
    for(var b = 1; b <= 10 ; b++){
        inputs_1.push(document.getElementById("not_" + b).value);
    };
    document.getElementById("paragraph_2").innerHTML = inputs_1.join(". ");

    };