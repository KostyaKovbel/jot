'use strict';

console.log(document.getElementById('form'))

document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()
    document.getElementById('form').reset();
  });