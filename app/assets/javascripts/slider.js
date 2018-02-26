$(document).ready(function(){
  $('div#abilitySkills').carousel({
    interval:false
  })
});

function leftSlide(){
  $('div#abilitySkills').carousel('next');
}

function rightSlide(){
    $('div#abilitySkills').carousel('prev')
}
