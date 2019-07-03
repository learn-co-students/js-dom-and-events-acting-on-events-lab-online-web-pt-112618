function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input')

function retrieveEmployeeInformation() {
	return input.value
}

function addNewElementAsLi() {
	let eeName = retrieveEmployeeInformation()
	document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${eeName}</li>`)
	//insertAdjacentHTML takes 2 arguments: (position, text to append to the DOM at the specified position)
}

function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]') //set variable submit to the submit button
  submit.addEventListener('click', function(event){
    addNewElementAsLi() //once the submit button is clicked, it will then append an LI
    resetInput() //reset the form to get ready to accept a new name
  })
}

function clearEmployeeListOnLinkClick(){
  let link = document.querySelector('a')
  let ul = document.querySelector('ul')
  link.addEventListener('click', function(event){
    ul.innerHTML = ''
  })
}

function resetInput(){
  document.querySelector('input').value = ''
}