// shuffles an array
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
// creates a deck of 81 cards. attributes are controlled here
function createDeck(){
    var i,j,k,p=0,q,cardArray=[];
    var colors = ["blue","yellow","purple"];
    var textures = ["solid","empty","dotted"];
    var numbers = ["1","2","3"];
    var shapes = ["oval","diamond","squiggle"]
    for(i=0;i<81;i++){
      cardArray[i]=[]
    }
    for(i=0;i<3;i++){
      for(j=0;j<3;j++){
        for(k=0;k<3;k++){
          for(q=0;q<3;q++){
            cardArray[p]=[colors[i],textures[j],numbers[k],shapes[q]];
            p++;
          }
        }
      }
    }
    return cardArray;
}
//sets a bunch of attributes so I don't have to keep calling setAttribute
function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
/*
* prints a single card (svg element) to the document in div#cards
* also returns the card back
*/
function printCard(card,cardID){
    var cardsDiv = document.getElementById("cards");
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var cardclass = card[0]+" "+card[1];
    svg.setAttribute("class",cardclass);
    svg.setAttribute("id",cardID);
    setAttributes(svg,{
      "version":"1.1",
      "xmlns":"http://www.w3.org/2000/svg",
      "xmlns:xlink":"http://www.w3.org/1999/xlink",
      "xmlns:a":"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/",
      "x":"0px",
      "y":"0px",
      "viewBox":"0 0 283 382",
      "style":"enable-background:new 0 0 283 382;",
      "xml:space":"preserve"
    });
    var defs = document.createElementNS("http://www.w3.org/2000/svg","defs");
    svg.appendChild(defs);
    var pattern = document.createElementNS("http://www.w3.org/2000/svg","pattern");
    setAttributes(pattern,{
      "id":"circles-6",
      "patternUnits":"userSpaceOnUse",
      "width":"10",
      "height":"10"
    });
    defs.appendChild(pattern);
    var image = document.createElementNS("http://www.w3.org/2000/svg","image");
    image.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd3aGl0ZScgLz4KICA8Y2lyY2xlIGN4PSczLjUnIGN5PSczLjUnIHI9JzMuNScgZmlsbD0nYmxhY2snLz4KPC9zdmc+Cg==")
    setAttributes(image,{
      "x":"0",
      "y":"0",
      "width":"10",
      "height":"10"
    });
    pattern.appendChild(image);
    var cardBorder = document.createElementNS("http://www.w3.org/2000/svg","path");
    setAttributes(cardBorder,{
      "class":"st0",
      "d":"M256.8,377H26.2C14.5,377,5,367.5,5,355.8V26.2C5,14.5,14.5,5,26.2,5h230.6c11.7,0,21.2,9.5,21.2,21.2v329.6C278,367.5,268.5,377,256.8,377z"
    });
    svg.appendChild(cardBorder);
    var oval1,oval2,oval3,diamond1,diamond2,diamond3,squiggle1,squiggle2,squiggle3,g1,g2,g3;
    var numshape = card[2]+" "+card[3];
    switch (numshape) {
      case "1 oval":
        oval1 = document.createElementNS("http://www.w3.org/2000/svg","path");
        setAttributes(oval1,{
          "class":"st1",
          "d":"M197.9,225.7H85.2c-19.1,0-34.5-15.4-34.5-34.5v0c0-19.1,15.4-34.5,34.5-34.5h112.7c19.1,0,34.5,15.4,34.5,34.5v0C232.4,210.3,216.9,225.7,197.9,225.7z"
        });
        svg.appendChild(oval1);
        break;
      case "2 oval":
        oval2 = document.createElementNS("http://www.w3.org/2000/svg","path");
        setAttributes(oval2,{
          "class":"st1",
          "d":"M197.9,170.7H85.2c-19.1,0-34.5-15.4-34.5-34.5v0c0-19.1,15.4-34.5,34.5-34.5h112.7c19.1,0,34.5,15.4,34.5,34.5v0C232.4,155.2,216.9,170.7,197.9,170.7z"
        });
        oval1 = document.createElementNS("http://www.w3.org/2000/svg","path");
        setAttributes(oval1,{
          "class":"st1",
          "d":"M197.9,277.1H85.2c-19.1,0-34.5-15.4-34.5-34.5v0c0-19.1,15.4-34.5,34.5-34.5h112.7c19.1,0,34.5,15.4,34.5,34.5v0C232.4,261.6,216.9,277.1,197.9,277.1z"
        });
        svg.appendChild(oval1);
        svg.appendChild(oval2);
        break;
      case "3 oval":
        oval1 = document.createElementNS("http://www.w3.org/2000/svg","path");
        setAttributes(oval1,{
          "class":"st1",
          "d":"M197.9,123.2H85.2c-19.1,0-34.5-15.4-34.5-34.5v0c0-19.1,15.4-34.5,34.5-34.5h112.7c19.1,0,34.5,15.4,34.5,34.5v0C232.4,107.8,216.9,123.2,197.9,123.2z"
        });
        oval2 = document.createElementNS("http://www.w3.org/2000/svg","path");
        setAttributes(oval2,{
          "class":"st1",
          "d":"M197.9,328.2H85.2c-19.1,0-34.5-15.4-34.5-34.5v0c0-19.1,15.4-34.5,34.5-34.5h112.7c19.1,0,34.5,15.4,34.5,34.5v0C232.4,312.8,216.9,328.2,197.9,328.2z"
        });
        oval3 = document.createElementNS("http://www.w3.org/2000/svg","path");
        setAttributes(oval3,{
          "class":"st1",
          "d":"M197.9,225.7H85.2c-19.1,0-34.5-15.4-34.5-34.5v0c0-19.1,15.4-34.5,34.5-34.5h112.7c19.1,0,34.5,15.4,34.5,34.5v0C232.4,210.3,216.9,225.7,197.9,225.7z"
        });
        svg.appendChild(oval1);
        svg.appendChild(oval2);
        svg.appendChild(oval3);
        break;
      case "1 diamond":
        diamond1 = document.createElementNS("http://www.w3.org/2000/svg","polygon");
        setAttributes(diamond1,{
          "class":"st1",
          "points":"141.8,147.5 43.1,190.3 141.2,234.2 239.9,191.5"
        });
        svg.appendChild(diamond1);
        break;
      case "2 diamond":
        diamond1 = document.createElementNS("http://www.w3.org/2000/svg","polygon");
        setAttributes(diamond1,{
          "class":"st1",
          "points":"141.8,92.6 43.1,135.3 141.2,179.3 239.9,136.6 "
        });
        diamond2 = document.createElementNS("http://www.w3.org/2000/svg","polygon");
        setAttributes(diamond2,{
          "class":"st1",
          "points":"141.8,199 43.1,241.8 141.2,285.7 239.9,243 "
        });
        svg.appendChild(diamond1);
        svg.appendChild(diamond2);
        break;
      case "3 diamond":
        diamond1 = document.createElementNS("http://www.w3.org/2000/svg","polygon");
        setAttributes(diamond1,{
          "class":"st1",
          "points":"141.8,41 43.1,83.8 141.2,127.7 239.9,85"
        });
        diamond2 = document.createElementNS("http://www.w3.org/2000/svg","polygon");
        setAttributes(diamond2,{
          "class":"st1",
          "points":"141.8,147.5 43.1,190.3 141.2,234.2 239.9,191.5"
        });
        diamond3 = document.createElementNS("http://www.w3.org/2000/svg","polygon");
        setAttributes(diamond3,{
          "class":"st1",
          "points":"141.8,254 43.1,296.8 141.2,340.7 239.9,298"
        });
        svg.appendChild(diamond1);
        svg.appendChild(diamond2);
        svg.appendChild(diamond3);
        break;
      case "1 squiggle":
        g1 = document.createElementNS("http://www.w3.org/2000/svg","g");
        squiggle1 = document.createElementNS("http://www.w3.org/2000/svg","path");
        setAttributes(squiggle1,{
          "class":"st1",
          "d":"M67.7,227.5c-2.2,0-4.4-0.3-6.6-1c-11.5-3.6-17.9-15.7-14.2-27c10.6-32.8,46.9-41.6,67.3-39.4c15.3,1.6,27.8,8.7,39,15l1.3,0.7c8,4.5,15.7,8.6,21.5,8.7c5.7,0.1,14.2-4.7,20.6-15.5c6.1-10.3,19.4-13.7,29.9-7.8c10.4,6,14,19.1,7.9,29.4c-13.6,23.1-36.3,37.2-59,36.9c-16.2-0.2-30-7.2-42.6-14.4l-1.3-0.8c-8.1-4.6-15.7-8.9-21.9-9.6c-3.5-0.4-18.2,1.2-20.9,9.7C85.5,221.7,76.9,227.5,67.7,227.5z"
        });
        g1.appendChild(squiggle1);
        svg.appendChild(g1);
        break;
      case "2 squiggle":
        g1 = document.createElementNS("http://www.w3.org/2000/svg","g");
        squiggle1 = document.createElementNS("http://www.w3.org/2000/svg","path");
        setAttributes(squiggle1,{
          "class":"st1",
          "d":"M67.7,166.5c-2.2,0-4.4-0.3-6.6-1c-11.5-3.6-17.9-15.7-14.2-27c10.6-32.8,46.9-41.6,67.3-39.4c15.3,1.6,27.8,8.7,39,15l1.3,0.7c8,4.5,15.7,8.6,21.5,8.7c5.7,0.1,14.2-4.7,20.6-15.5c6.1-10.3,19.4-13.7,29.9-7.8c10.4,6,14,19.1,7.9,29.4c-13.6,23.1-36.3,37.2-59,36.9c-16.2-0.2-30-7.2-42.6-14.4l-1.3-0.8c-8.1-4.6-15.7-8.9-21.9-9.6c-3.5-0.4-18.2,1.2-20.9,9.7C85.5,160.7,76.9,166.5,67.7,166.5z"
        });
        g1.appendChild(squiggle1);
        g2 = document.createElementNS("http://www.w3.org/2000/svg","g");
        squiggle2 = document.createElementNS("http://www.w3.org/2000/svg","path");
        setAttributes(squiggle2,{
          "class":"st1",
          "d":"M67.7,280c-2.2,0-4.4-0.3-6.6-1c-11.5-3.6-17.9-15.7-14.2-27c10.6-32.8,46.9-41.6,67.3-39.4c15.3,1.6,27.8,8.7,39,15l1.3,0.7c8,4.5,15.7,8.6,21.5,8.7c5.7,0.1,14.2-4.7,20.6-15.5c6.1-10.3,19.4-13.7,29.9-7.8c10.4,6,14,19.1,7.9,29.4c-13.6,23.1-36.3,37.2-59,36.9c-16.2-0.2-30-7.2-42.6-14.4l-1.3-0.8c-8.1-4.6-15.7-8.9-21.9-9.6c-3.5-0.4-18.2,1.2-20.9,9.7C85.5,274.1,76.9,280,67.7,280z"
        });
        g2.appendChild(squiggle2);
        svg.appendChild(g1);
        svg.appendChild(g2);
        break;
      case "3 squiggle":
        g1 = document.createElementNS("http://www.w3.org/2000/svg","g");
        squiggle1 = document.createElementNS("http://www.w3.org/2000/svg","path");
        setAttributes(squiggle1,{
          "class":"st1",
          "d":"M67.7,116.6c-2.2,0-4.4-0.3-6.6-1c-11.5-3.6-17.9-15.7-14.2-27c10.6-32.8,46.9-41.6,67.3-39.4c15.3,1.6,27.8,8.7,39,15l1.3,0.7c8,4.5,15.7,8.6,21.5,8.7c5.7,0.1,14.2-4.7,20.6-15.5c6.1-10.3,19.4-13.7,29.9-7.8 c10.4,6,14,19.1,7.9,29.4c-13.6,23.1-36.3,37.2-59,36.9c-16.2-0.2-30-7.2-42.6-14.4l-1.3-0.8c-8.1-4.6-15.7-8.9-21.9-9.6c-3.5-0.4-18.2,1.2-20.9,9.7C85.5,110.8,76.9,116.6,67.7,116.6z"
        });
        g1.appendChild(squiggle1);
        g2 = document.createElementNS("http://www.w3.org/2000/svg","g");
        squiggle2 = document.createElementNS("http://www.w3.org/2000/svg","path");
        setAttributes(squiggle2,{
          "class":"st1",
          "d":"M67.7,338.4c-2.2,0-4.4-0.3-6.6-1c-11.5-3.6-17.9-15.7-14.2-27c10.6-32.8,46.9-41.6,67.3-39.4c15.3,1.6,27.8,8.7,39,15l1.3,0.7c8,4.5,15.7,8.6,21.5,8.7c5.7,0.1,14.2-4.7,20.6-15.5c6.1-10.3,19.4-13.7,29.9-7.8c10.4,6,14,19.1,7.9,29.4c-13.6,23.1-36.3,37.2-59,36.9c-16.2-0.2-30-7.2-42.6-14.4l-1.3-0.8c-8.1-4.6-15.7-8.9-21.9-9.6c-3.5-0.4-18.2,1.2-20.9,9.7C85.5,332.5,76.9,338.4,67.7,338.4z"
        });
        g2.appendChild(squiggle2);
        g3 = document.createElementNS("http://www.w3.org/2000/svg","g");
        squiggle3 = document.createElementNS("http://www.w3.org/2000/svg","path");
        setAttributes(squiggle3,{
          "class":"st1",
          "d":"M67.7,227.5c-2.2,0-4.4-0.3-6.6-1c-11.5-3.6-17.9-15.7-14.2-27c10.6-32.8,46.9-41.6,67.3-39.4c15.3,1.6,27.8,8.7,39,15l1.3,0.7c8,4.5,15.7,8.6,21.5,8.7c5.7,0.1,14.2-4.7,20.6-15.5c6.1-10.3,19.4-13.7,29.9-7.8c10.4,6,14,19.1,7.9,29.4c-13.6,23.1-36.3,37.2-59,36.9c-16.2-0.2-30-7.2-42.6-14.4l-1.3-0.8c-8.1-4.6-15.7-8.9-21.9-9.6c-3.5-0.4-18.2,1.2-20.9,9.7C85.5,221.7,76.9,227.5,67.7,227.5z"
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

function selectCard(cardID){
  selected.push(active[cardID]);
}

var active=[],selected=[];
var deck = createDeck();
shuffle(deck);
for (var i = 0;i<12;i++){
  active[i] = printCard(deck.pop(),i);
}
