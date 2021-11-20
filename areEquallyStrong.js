function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    myStrength=[yourLeft,yourRight];
    hisStrength=[friendsLeft,friendsRight];
    myStrength.sort(function(a,b){return a-b});
    hisStrength.sort(function(a,b){return a-b});
    return myStrength[0]===hisStrength[0] && myStrength[1]===hisStrength[1]
}
