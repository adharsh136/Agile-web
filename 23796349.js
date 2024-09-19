/**To highlight the section name on the nav bar when clicked (not hover) */
var navbar = document.getElementsByClassName("navbar")[0];
var links = navbar.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) { 
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }

/**Function to implement simple AJAX in Secxtion 1 */
function simpleAJAX() {

    fetch('https://valorant-api.com/v1/agents/dade69b4-4f5a-8528-247b-219e5a1facd6')
    .then(response => response.json())
    .then(data => {
        var agentName = data.data.displayName;
        var agentDesc = data.data.description;
        var agentImg = data.data.displayIcon;
      document.getElementById("agentName").innerHTML = "Name: " + agentName;
      document.getElementById("agentDesc").innerHTML = "Description: " + agentDesc;
      document.getElementById("agentImg").src = agentImg.replace(/"/g,'');
    })
    .catch(error => console.error('Error:', error));

    var x = document.getElementById("agentImg");
    if (x.hasAttribute('hidden')){
        x.removeAttribute('hidden');
    } 
}

/**Function to reveal and hide data after a button press in Section 2 */
function div_block_reveal() {
    var x = document.getElementsByClassName("five_block")[0].children;
    for (var i = 0; i < x.length; i++) {
      if (x[i].hasAttribute('hidden')) {
        x[i].removeAttribute('hidden');
      } else {
        x[i].setAttribute('hidden', '');
      }
    }
    var button = document.getElementById("reveal");
    if (button.innerHTML === "Reveal") {
      button.innerHTML = "Hide";
    } else {
      button.innerHTML = "Reveal";
    }
  }

/*Clock code in Section3*/ 
setInterval(my_time, 1000);

function my_time() {
  let d = new Date();
  document.getElementById("time").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}