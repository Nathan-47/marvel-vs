'use strict';

  // Hide HUD
  const openHud = function () {
    document.querySelector('.userHud').classList.add('openHidden');
  }


  // Hide the heading, logo and select screen sprites when battle begins
  const hideElements = function () {
    document.querySelector('.main-heading').classList.add('hidden');
    document.getElementById('select-sprites').classList.add('hidden');    
    document.querySelector('.header img').classList.add('hidden');
    // document.querySelector('.faq-btn').classList.add('hidden');
    document.getElementById('hud-items').classList.add('hidden'); // hide items button
    document.getElementById('hud-logo').classList.add('hidden'); // hide logo
  }


  const fightInit = function () {
  // hide search button when fight starts
  const hideSearch = document.getElementById('start-fight');
//   console.log(hideSearch)

  hideSearch.addEventListener('click', function(e) {
  document.getElementById('opponent-search').classList.add('hidden');
  document.getElementById('hud-items').classList.remove('hidden'); // hide items button
  document.getElementById('hud-logo').classList.remove('hidden'); // hide logo
  })
  }
