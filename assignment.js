// 01. Feet to Mile Calculator function.

function feetToMile(feet){
    var mile = feet * 0.0001893939393939394;
    return mile;
}

// 02. Wood Calculator function.

function woodCalculator(chair, table, bed){
    var chairWoodCount = chair * 1;
    var tableWoodCount = table * 3;
    var bedwoodCount = bed * 5;

    var totalWood = chairWoodCount + tableWoodCount + bedwoodCount;
    return totalWood;
}

// 03. Brick Calculator function.

function brickCalculator(height){
    if(height >= 0 && height<=10){
        var brickPerFeet = 1000;
        var brickCount = 10*15;
        var sumOfBrick1 = brickCount*brickPerFeet;

       return sumOfBrick1;
    }
    
    else if(height>=11 && height<=20){
        var brickPerFeet2 = 1000;
        var brickCount2 = 20*20;
        var sumOfBrick2 = brickCount2*brickPerFeet2;

        return sumOfBrick2;
    }

    else(height>= 21);{
        var brickPerFeet3 = 1000;
        var brickCount3 = 21*10;
        var sumOfBrick3 = brickCount3*brickPerFeet3;
        
        return sumOfBrick3;
    }
}


// 04. Find Tiny Friend form a Array function.

function tinyFriend(friendName){
    var smallName = friendName[0];
    for (var i = 0; i < friendName.length; i++){
        var currentName = friendName[i];
        if (currentName < smallName){
            smallName = currentName;
        }
    }
    return smallName;
}