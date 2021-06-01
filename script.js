// This makes it so that when you click the button, the text changes to my name.
document.getElementById('button').addEventListener('click', displayMessage)

function displayMessage () {
  document.getElementById('paragraph').innerHTML = 'Hannah'
}
