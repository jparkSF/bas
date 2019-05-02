const imageData = {
  "001": "Invisible Connection",
  "002": "Bare Magazine",
  "003": "Golden Gate Bridge",
  "004": "Cotogna",
  "005": "Sightglass Coffee Co",
  "006": "The Mill",
  "007": "",
  "008": "",
  "009": "",
  "010": "",
  "011": "Saint Frank",
  "012" : "Arch Geo",
  "013" : "Part of Life",
  "014" : "Joshua Tree",
  "015" : "Six Crisp Days",
  "016" : "The Apartment by the Line",
  "017" : "",
  "018" : "Griffith Observatory",
  "019" : "",
  "020" : "Eames House",
  "021" : "Mixed Business LA",
  "022" : "",
  "023" : "Dana",
  "024" : "Joshu+Vela",
  "025" : "Song Tea & Ceramics",
  "026" : "Maggie",
  "027" : "",
  "028" : "Luvhaus",
  "029" : "",
  "030" : "",
  "031" : "Molly Markman",
  "032" : "Trojan Point",
  "033" : "Golden Gate Bridge",
  "034" : "SORT",
  "035" : "Six Crisp Days",
  "036" : ""
   
}

$(document).ready(function(){
  const totalNumOfImage = Object.keys(imageData).length
  const mediaElement = $('.medias')
  
  for (let i = totalNumOfImage; i >= 1; i--){
    const padCounter = i.toString().padStart(3,'0')
    
    mediaElement.append(
      `
        <div class="media">
          <div class="inner-content">
            <img class="fade-in" src="assets/img/main/${padCounter}.jpg" style="display: block;">
            <span>${imageData[padCounter] === undefined ? "" : imageData[padCounter]}</span>
            </img>
          </div>
        </div>
      `
    )
  }

  $('img.fade-in').hide();
  $('img.fade-in').each(function (i) {
    if (this.complete) {
      $(this).fadeIn();
    } else {
      $(this).load(function () {
        $(this).fadeIn();
      });
    }
  });

  
})
