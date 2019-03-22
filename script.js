// shuffles an array
function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

// creates a deck of 81 cards. attributes are controlled here
function createDeck() {
    var p = 0;
    var cardArray = [];
    var colors = ["blue", "yellow", "purple"];
    var textures = ["solid", "empty", "dotted"];
    var numbers = ["1", "2", "3"];
    var shapes = ["oval", "diamond", "squiggle"];
    for (var i = 0; i < 81; i++) {
        cardArray[i] = [];
    }

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            for (var k = 0; k < 3; k++) {
                for (var q = 0; q < 3; q++) {
                    cardArray[p] = [colors[i], textures[j], numbers[k], shapes[q]];
                    p++;
                }
            }
        }
    }
    return cardArray;
}

//sets a bunch of attributes so I don't have to keep calling setAttribute
function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

/*
 * prints a single card (svg element) to the document in div#cards.
 *
 * also returns the card back.
 *
 * this function was written by creating a few of the card shapes in
 * adobe illustrator, exporting them to html-based svg elements, and
 * deconstructing them to build them programmatically.
 */
function printCard(card, cardID) {
    var cardsDiv = document.getElementById("cards");
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var cardclass = card[0] + " " + card[1] + " " + card[2] + " " + card[3];
    svg.setAttribute("class", cardclass);
    svg.setAttribute("id", cardID);
    setAttributes(svg, {
        "version": "1.1",
        "xmlns": "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "xmlns:a": "http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/",
        "x": "0px",
        "y": "0px",
        "viewBox": "0 0 283 382",
        "style": "enable-background:new 0 0 283 382;",
        "xml:space": "preserve"
    });
    var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svg.appendChild(defs);
    var pattern = document.createElementNS("http://www.w3.org/2000/svg", "pattern");
    setAttributes(pattern, {
        "id": "circles-6",
        "patternUnits": "userSpaceOnUse",
        "width": "10",
        "height": "10"
    });
    defs.appendChild(pattern);
    var image = document.createElementNS("http://www.w3.org/2000/svg", "image");
    image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd3aGl0ZScgLz4KICA8Y2lyY2xlIGN4PSczLjUnIGN5PSczLjUnIHI9JzMuNScgZmlsbD0nYmxhY2snLz4KPC9zdmc+Cg==")
    setAttributes(image, {
        "x": "0",
        "y": "0",
        "width": "10",
        "height": "10"
    });
    pattern.appendChild(image);
    var cardBorder = document.createElementNS("http://www.w3.org/2000/svg", "path");
    setAttributes(cardBorder, {
        "class": "st0",
        "d": "M256.8,377H26.2C14.5,377,5,367.5,5,355.8V26.2C5,14.5,14.5,5,26.2,5h230.6c11.7,0,21.2,9.5,21.2,21.2v329.6C278,367.5,268.5,377,256.8,377z"
    });
    svg.appendChild(cardBorder);
    var oval1, oval2, oval3, diamond1, diamond2, diamond3, squiggle1, squiggle2, squiggle3, g1, g2, g3;
    var numshape = card[2] + " " + card[3];
    switch (numshape) {
        case "1 oval":
            oval1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            setAttributes(oval1, {
                "class": "st1",
                "d": "M197.9,225.7H85.2c-19.1,0-34.5-15.4-34.5-34.5v0c0-19.1,15.4-34.5,34.5-34.5h112.7c19.1,0,34.5,15.4,34.5,34.5v0C232.4,210.3,216.9,225.7,197.9,225.7z"
            });
            svg.appendChild(oval1);
            break;
        case "2 oval":
            oval2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            setAttributes(oval2, {
                "class": "st1",
                "d": "M197.9,170.7H85.2c-19.1,0-34.5-15.4-34.5-34.5v0c0-19.1,15.4-34.5,34.5-34.5h112.7c19.1,0,34.5,15.4,34.5,34.5v0C232.4,155.2,216.9,170.7,197.9,170.7z"
            });
            oval1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            setAttributes(oval1, {
                "class": "st1",
                "d": "M197.9,277.1H85.2c-19.1,0-34.5-15.4-34.5-34.5v0c0-19.1,15.4-34.5,34.5-34.5h112.7c19.1,0,34.5,15.4,34.5,34.5v0C232.4,261.6,216.9,277.1,197.9,277.1z"
            });
            svg.appendChild(oval1);
            svg.appendChild(oval2);
            break;
        case "3 oval":
            oval1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            setAttributes(oval1, {
                "class": "st1",
                "d": "M197.9,123.2H85.2c-19.1,0-34.5-15.4-34.5-34.5v0c0-19.1,15.4-34.5,34.5-34.5h112.7c19.1,0,34.5,15.4,34.5,34.5v0C232.4,107.8,216.9,123.2,197.9,123.2z"
            });
            oval2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            setAttributes(oval2, {
                "class": "st1",
                "d": "M197.9,328.2H85.2c-19.1,0-34.5-15.4-34.5-34.5v0c0-19.1,15.4-34.5,34.5-34.5h112.7c19.1,0,34.5,15.4,34.5,34.5v0C232.4,312.8,216.9,328.2,197.9,328.2z"
            });
            oval3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            setAttributes(oval3, {
                "class": "st1",
                "d": "M197.9,225.7H85.2c-19.1,0-34.5-15.4-34.5-34.5v0c0-19.1,15.4-34.5,34.5-34.5h112.7c19.1,0,34.5,15.4,34.5,34.5v0C232.4,210.3,216.9,225.7,197.9,225.7z"
            });
            svg.appendChild(oval1);
            svg.appendChild(oval2);
            svg.appendChild(oval3);
            break;
        case "1 diamond":
            diamond1 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            setAttributes(diamond1, {
                "class": "st1",
                "points": "141.8,147.5 43.1,190.3 141.2,234.2 239.9,191.5"
            });
            svg.appendChild(diamond1);
            break;
        case "2 diamond":
            diamond1 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            setAttributes(diamond1, {
                "class": "st1",
                "points": "141.8,92.6 43.1,135.3 141.2,179.3 239.9,136.6 "
            });
            diamond2 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            setAttributes(diamond2, {
                "class": "st1",
                "points": "141.8,199 43.1,241.8 141.2,285.7 239.9,243 "
            });
            svg.appendChild(diamond1);
            svg.appendChild(diamond2);
            break;
        case "3 diamond":
            diamond1 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            setAttributes(diamond1, {
                "class": "st1",
                "points": "141.8,41 43.1,83.8 141.2,127.7 239.9,85"
            });
            diamond2 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            setAttributes(diamond2, {
                "class": "st1",
                "points": "141.8,147.5 43.1,190.3 141.2,234.2 239.9,191.5"
            });
            diamond3 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            setAttributes(diamond3, {
                "class": "st1",
                "points": "141.8,254 43.1,296.8 141.2,340.7 239.9,298"
            });
            svg.appendChild(diamond1);
            svg.appendChild(diamond2);
            svg.appendChild(diamond3);
            break;
        case "1 squiggle":
            g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
            squiggle1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            setAttributes(squiggle1, {
                "class": "st1",
                "d": "M67.7,227.5c-2.2,0-4.4-0.3-6.6-1c-11.5-3.6-17.9-15.7-14.2-27c10.6-32.8,46.9-41.6,67.3-39.4c15.3,1.6,27.8,8.7,39,15l1.3,0.7c8,4.5,15.7,8.6,21.5,8.7c5.7,0.1,14.2-4.7,20.6-15.5c6.1-10.3,19.4-13.7,29.9-7.8c10.4,6,14,19.1,7.9,29.4c-13.6,23.1-36.3,37.2-59,36.9c-16.2-0.2-30-7.2-42.6-14.4l-1.3-0.8c-8.1-4.6-15.7-8.9-21.9-9.6c-3.5-0.4-18.2,1.2-20.9,9.7C85.5,221.7,76.9,227.5,67.7,227.5z"
            });
            g1.appendChild(squiggle1);
            svg.appendChild(g1);
            break;
        case "2 squiggle":
            g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
            squiggle1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            setAttributes(squiggle1, {
                "class": "st1",
                "d": "M67.7,166.5c-2.2,0-4.4-0.3-6.6-1c-11.5-3.6-17.9-15.7-14.2-27c10.6-32.8,46.9-41.6,67.3-39.4c15.3,1.6,27.8,8.7,39,15l1.3,0.7c8,4.5,15.7,8.6,21.5,8.7c5.7,0.1,14.2-4.7,20.6-15.5c6.1-10.3,19.4-13.7,29.9-7.8c10.4,6,14,19.1,7.9,29.4c-13.6,23.1-36.3,37.2-59,36.9c-16.2-0.2-30-7.2-42.6-14.4l-1.3-0.8c-8.1-4.6-15.7-8.9-21.9-9.6c-3.5-0.4-18.2,1.2-20.9,9.7C85.5,160.7,76.9,166.5,67.7,166.5z"
            });
            g1.appendChild(squiggle1);
            g2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
            squiggle2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            setAttributes(squiggle2, {
                "class": "st1",
                "d": "M67.7,280c-2.2,0-4.4-0.3-6.6-1c-11.5-3.6-17.9-15.7-14.2-27c10.6-32.8,46.9-41.6,67.3-39.4c15.3,1.6,27.8,8.7,39,15l1.3,0.7c8,4.5,15.7,8.6,21.5,8.7c5.7,0.1,14.2-4.7,20.6-15.5c6.1-10.3,19.4-13.7,29.9-7.8c10.4,6,14,19.1,7.9,29.4c-13.6,23.1-36.3,37.2-59,36.9c-16.2-0.2-30-7.2-42.6-14.4l-1.3-0.8c-8.1-4.6-15.7-8.9-21.9-9.6c-3.5-0.4-18.2,1.2-20.9,9.7C85.5,274.1,76.9,280,67.7,280z"
            });
            g2.appendChild(squiggle2);
            svg.appendChild(g1);
            svg.appendChild(g2);
            break;
        case "3 squiggle":
            g1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
            squiggle1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            setAttributes(squiggle1, {
                "class": "st1",
                "d": "M67.7,116.6c-2.2,0-4.4-0.3-6.6-1c-11.5-3.6-17.9-15.7-14.2-27c10.6-32.8,46.9-41.6,67.3-39.4c15.3,1.6,27.8,8.7,39,15l1.3,0.7c8,4.5,15.7,8.6,21.5,8.7c5.7,0.1,14.2-4.7,20.6-15.5c6.1-10.3,19.4-13.7,29.9-7.8 c10.4,6,14,19.1,7.9,29.4c-13.6,23.1-36.3,37.2-59,36.9c-16.2-0.2-30-7.2-42.6-14.4l-1.3-0.8c-8.1-4.6-15.7-8.9-21.9-9.6c-3.5-0.4-18.2,1.2-20.9,9.7C85.5,110.8,76.9,116.6,67.7,116.6z"
            });
            g1.appendChild(squiggle1);
            g2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
            squiggle2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            setAttributes(squiggle2, {
                "class": "st1",
                "d": "M67.7,338.4c-2.2,0-4.4-0.3-6.6-1c-11.5-3.6-17.9-15.7-14.2-27c10.6-32.8,46.9-41.6,67.3-39.4c15.3,1.6,27.8,8.7,39,15l1.3,0.7c8,4.5,15.7,8.6,21.5,8.7c5.7,0.1,14.2-4.7,20.6-15.5c6.1-10.3,19.4-13.7,29.9-7.8c10.4,6,14,19.1,7.9,29.4c-13.6,23.1-36.3,37.2-59,36.9c-16.2-0.2-30-7.2-42.6-14.4l-1.3-0.8c-8.1-4.6-15.7-8.9-21.9-9.6c-3.5-0.4-18.2,1.2-20.9,9.7C85.5,332.5,76.9,338.4,67.7,338.4z"
            });
            g2.appendChild(squiggle2);
            g3 = document.createElementNS("http://www.w3.org/2000/svg", "g");
            squiggle3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            setAttributes(squiggle3, {
                "class": "st1",
                "d": "M67.7,227.5c-2.2,0-4.4-0.3-6.6-1c-11.5-3.6-17.9-15.7-14.2-27c10.6-32.8,46.9-41.6,67.3-39.4c15.3,1.6,27.8,8.7,39,15l1.3,0.7c8,4.5,15.7,8.6,21.5,8.7c5.7,0.1,14.2-4.7,20.6-15.5c6.1-10.3,19.4-13.7,29.9-7.8c10.4,6,14,19.1,7.9,29.4c-13.6,23.1-36.3,37.2-59,36.9c-16.2-0.2-30-7.2-42.6-14.4l-1.3-0.8c-8.1-4.6-15.7-8.9-21.9-9.6c-3.5-0.4-18.2,1.2-20.9,9.7C85.5,221.7,76.9,227.5,67.7,227.5z"
            });
            g3.appendChild(squiggle3);
            svg.appendChild(g1);
            svg.appendChild(g2);
            svg.appendChild(g3);
            break;
        default:
    }
    cardsDiv.appendChild(svg);
    return card;
}

/*
* remove an element from an array based on value.
*/
function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
        return ele != value;
    });
}

// check whether 3 attributes ar compatible (all the same or all different)
function attributes_compatible(a, b, c) {
    //    console.log("a: "+a+" b: "+b+" c: "+c);
    //    console.log((a === b && b === c) || (a !== b && a !== c && b !== c));
    return (a === b && b === c) || (a !== b && a !== c && b !== c);
}

// check if 3 cards make a set
function set_check(c1, c2, c3) {
    var result = true;
    if (!attributes_compatible(c1[0], c2[0], c3[0])) {
        result = false;
    }
    if (!attributes_compatible(c1[1], c2[1], c3[1])) {
        result = false;
    }
    if (!attributes_compatible(c1[2], c2[2], c3[2])) {
        result = false;
    }
    if (!attributes_compatible(c1[3], c2[3], c3[3])) {
        result = false;
    }
    return result;
}

//not used
function countSets(deck) {
    var count = 0;
    for (var i = 0; i < deck.length; i++) {
        for (var j = 0; j < deck.length; j++) {
            for (var k = 0; k < deck.length; k++) {
                if (deck[i] !== deck[j] && deck[j] !== deck[k] && deck[i] !== deck[k]) {
                    if (set_check(deck[i], deck[j], deck[k])) {
                        return [deck[i], deck[j], deck[k]];
                    }
                }
            }
        }
    }

}

/*
 * puts the hint class on 3 of the cards in the active deck to trigger
 * an animation
 */
function hint() {
    var numberArray = [];
    var flag = true;
    for (var i = 0; i < active.length && flag; i++) {
        for (var j = 0; j < active.length && flag; j++) {
            for (var k = 0; k < active.length && flag; k++) {
                if (i !== j && j !== k && i !== k) {
                    if (set_check(active[i], active[j], active[k])) {
                        console.log(i);
                        console.log(j);
                        console.log(k);
                        flag = false;
                        $("#"+i).toggleClass("hint");
                        $("#"+j).toggleClass("hint");
                        $("#"+k).toggleClass("hint");
                        setTimeout(function(){
                          $("svg").removeClass("hint");
                        },2000)
                    }
                }
            }
        }
    }
}

/*
 * returns a boolean: "are there any sets in the array someCards?".
 * used to see if we need to reshuffle the cards.
 */
function anySets(someCards){
  var flag = false;
  for (var i = 0; i < someCards.length && !flag; i++) {
      for (var j = 0; j < someCards.length && !flag; j++) {
          for (var k = 0; k < someCards.length && !flag; k++) {
              if (i !== j && j !== k && i !== k) {
                  if (set_check(someCards[i], someCards[j], someCards[k])) {
                    flag=true;
                  }
              }
          }
      }
  }
  return flag;
}

/*
 * reshuffle cards by combining active & deck,
 * shuffling deck, reprinting 12 cards
 */
function reshuffle(){
  while(active.length>0){
    deck.push(active.pop());
  }
  selected=[];
  $("svg").remove();
  shuffle(deck);
  for (var i = 0; i < 12; i++) {
      active.push(printCard(deck.pop(), i));
  }
}

/*
 * handle a card click:
 * - select/deselect a card
 * - check for set if 3 cards are selected.
 * - handle set/not set cases by triggering animation, and rearranging
 *   cards if necessary
 */
function cardClick() {
    $(this).toggleClass("selected");
    var cardID = $(this).attr("id");
    //select vs deselect
    if (!selected.includes(cardID)) {
        selected.push(cardID);
    } else {
        selected = arrayRemove(selected, cardID);
    }

    if (selected.length == 3) {
        var pair_check = set_check(active[selected[0]], active[selected[1]], active[selected[2]]);
        if (pair_check == true) {
            score++;
            //remove cards from page
            $(".selected").remove();
            //remove cards from arrays
            selected.sort(function(a, b){return b-a});
            active.splice(selected[0],1);
            active.splice(selected[1],1);
            active.splice(selected[2],1);
            selected=[];
            for (var i = 0; i < 3; i++) {
                active.push(printCard(deck.pop(), i));
            }
            //animation
            $("html").addClass("correct");
            setTimeout(function(){   $("html").removeClass("correct"); }, 3000);
        } else {
            score--;
            //animation
            $("html").addClass("incorrect");
            setTimeout(function(){   $("html").removeClass("incorrect"); }, 3000);
            //deselect
            $("svg").removeClass("selected");
            selected=[];

        }
        //update score
        $("#score").text(score);
        //rewrite id's
        for (var i = 1; i < 13; i++) {
            document.querySelector("svg:nth-child("+i+")").id=i-1;
        }
        if(!anySets(active.concat(deck))){
          $("body").prepend("<h1>you win!</h1>");
        }
        while(!anySets(active)){
          reshuffle();
          $("body").prepend("<p>reshuffled.</p>");
        }
    }
}

/*
 * for multiplayer mode.
 * get the number of players from the form input, and then print the next form
 */
function getNumber(){
  numPlayers=$("#numPlayers").val();
  $("form").remove();
  $("body").prepend("<form>");
  for (var i =0;i<numPlayers;i++){
    $("form").append("<label>player "+i+"'s name:</label>");
    $("form").append("<input type=\"text\" id="+i+">");
  }
  $("form").append("<button type=\"button\" onclick=\"getNames()\">play!</button></form>")
}

/*
 * for multiplayer mode.
 * get the names of players from the form input, and then
 * print the cards + player buttons
 */
function getNames(){
  $(".buttons").prepend("<img src=\"logo_small.svg\" alt=\"set logo\">")
  var pname;
  for (var i =0;i<numPlayers;i++){
    pname=$("#"+i).val();
    players[i]={name: pname, score: 0};
    $(".buttons").append("<h2 class=\"playerButton\" id="+pname+" onclick=\"\">"+pname+": 0</h2><br>");
  }
  $("form").remove();
  $(".buttons").append("<h2 id=\"help\" > <a href=\"instructions.html\">help</a> </h2><h2 id=\"quit\"> <a href=\"index.html\">quit</a> </h2>");
  loadCards();
}

//print 12 cards to the document
function loadCards(){
  for (var i = 0; i < 12; i++) {
      active.push(printCard(deck.pop(), i));
  }
}

var score = 0, active = [], selected = [], deck = createDeck(),players=[], numPlayers;
shuffle(deck);
$(document).ready(function(){
  $(document).on("click","svg",cardClick);
});
