// Kilometer To Meter
function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}

// Budget Calculator
function budgetCalculator(watch, phone, laptop){

    var total = 50*watch + 100*phone + 500*laptop;
    return total;
}

// Hotel Cost
function hotelCost(days){
    
    if(days>=1 && days<=10){
        return days*100;
    }
    else if(days>10 && days<=20){
        return days*80;
    }
    else if(days>20){
        return days*50;
    }
    else{
        return "Error";
    }   
}

// Mega Friend
function megaFriend(name){
    var max = "";
    for(var i = 0; i < name.length; i++){
        var element = name[i];
        if(element.length>max.length){
            max=name[i];
        }
    }
    return max;
}