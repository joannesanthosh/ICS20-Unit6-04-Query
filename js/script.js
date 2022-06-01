/* Created by: Joanne Santhosh
 * Created on: Apr 2022
 * This file contains the JS functions for index.html
 */

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit6-04-Query/sw.js", {
    scope: "/ICS20-Unit6-04-Query/",
  })
}

/**
 * This function calculates the volume of a sphere
 */
window.onload = function() {
  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get('radius')
  console.log(radius)

  // process
  const volume = (4 / 3 * Math.PI * (radius * radius * radius))
  const dimensions = "<ul>\n<li>radius = " + radius + "</li>\n</ul>" 

  // output
  document.getElementById("dimensions").innerHTML = dimensions
  document.getElementById("answers").innerHTML = 'The volume is:' + volume + 'cm³'
}
