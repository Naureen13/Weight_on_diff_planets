var planets = [
  { planet: "sun", weighs: 27 },
    { planet: "mercury", weighs: 0.38 },
    { planet: "venus", weighs: 0.91 },
    { planet: "earth", weighs: 1 },
    { planet: "mars", weighs: 0.38 },
    { planet: "jupiter", weighs: 2.34 },
    { planet: "saturn", weighs: 1.06 },
    { planet: "uranus", weighs: 0.92 },
    { planet: "neptune", weighs: 1.19 },
  ];


function calculateWeight(userWeight, planetName){
  if(userWeight==""){
   window.alert("PLEASE ENTER YOUR WEIGHT");
   return 0;``
  }
    for(var i=0;i<planets.length;i++){
        if (planets[i].planet == planetName) {
            return (planets[i].weighs * userWeight);
          }
    }
}

const panels = document.getElementsByClassName('rotate');
for(const panel of panels){
  panel.addEventListener('click', showSelected);
}        
    function showSelected(event){
      var userWeight = document.getElementById('wt').value;
      var planetName = event.target.id;
      var result = calculateWeight(userWeight, planetName);
      if(result!=0){

        document.getElementById('message').innerHTML = 'If you were on ' + planetName + ', you would weigh ' + result + ' Kgs!'; 
      }
      
    }

    