// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const mes = document.querySelector('#modal')

// Your JavaScript code goes here!
function grabHearts() {
  let hearts = document.querySelectorAll(".like-glyph")
  hearts.forEach(addListener)
}

function addListener(heart) {
  heart.addEventListener("click", function(event) {
    mimicServerCall()
    .then(changeDom(event)
      // if (event.target.innerText === EMPTY_HEART) {
      //   event.target.innerText = FULL_HEART
      // }
      // if (event.target.innerText === FULL_HEART) {
      //   event.target.innerText = EMPTY_HEART
      // }
    )
    .catch(function(error){
      setTimeout(errorMessage(mes), 50000)
    })
  })
}

function changeDom(event) {
  if (event.target.innerText === EMPTY_HEART) {
    event.target.innerText = FULL_HEART
    event.target.style.color = "red"
  } else {
    event.target.innerText = EMPTY_HEART
    event.target.style.color = ""
  }
}

function errorMessage(mes) {
  alert("something went wrong!")
}

grabHearts()

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
