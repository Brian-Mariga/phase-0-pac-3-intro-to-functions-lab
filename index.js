function shout(text){
    return text.toUpperCase();
}

function whisper(textOne){
    return textOne.toLowerCase();
}

function logShout(textTwo){
    console.log(textTwo.toUpperCase())
}

function logWhisper(textThree){
    console.log(textThree.toLowerCase())
}

function sayHiToHeadphonedRoommate(textFour){
    if (textFour.toLowerCase() === textFour) {
        return "I can't hear you!";
      } else if (textFour.toUpperCase() === textFour) {
        return "YES INDEED!";
      } else if (textFour === "I love you, Grandma.") {
        return "I love you, too.";
      } else {
        return "I would love to!";
      }
}