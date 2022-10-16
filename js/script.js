// const femaleAkanNames = [];
// const makeAkanNames = [];
function getUserDetails(){
    confirm("Are you sure");
    console.log("happy");
    var day = document.getElementById("dayborn").value;
    var month = document.getElementById("monthborn").value;
    var year = document.getElementById("yearborn").value;
    var gender = null;
    if(document.getElementById("female").checked = true){
        gender = "female";
    }
    else{
        gender = "male";
    }
    
    console.log(day);
    console.log(month);
    console.log(year);
    console.log(gender);
}