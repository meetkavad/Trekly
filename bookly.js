const input = document.querySelector('.search-inputs');
const form = document.querySelector('.search-bar');
const print = document.querySelector('.no-place-class');

form.addEventListener('submit', e=>{
  e.preventDefault();
  var places = document.querySelectorAll('.place');
  const store = input.value;
  
  if (store === "" ||store === " " ||store === "  " ||store === "   " ||store === "    " ||store === "     "  ){
    for(i =0 ; i<places.length ; i++)
    places[i].style.display = "none";
    
    print.innerHTML="please enter your desired destination!";
  }


  else{
  var i,t=0;
  for(i =0 ; i<places.length ; i++)
  {
    if(places[i].classList.contains(store))
    {
        places[i].style.display = " block";
        t=1;
        print.innerHTML = " ";
    }
    else
      places[i].style.display = "none";
  }
  
  if(t!=1)
  {
  print.innerHTML = "Not Available for Booking. Please check our list of <a href=\"index.html#section2\">available destinations</a>";
  print.classList.add('print-not-available-message');
  }
}
})



