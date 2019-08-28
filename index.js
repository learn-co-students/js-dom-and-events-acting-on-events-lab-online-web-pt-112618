function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input')

function retrieveEmployeeInformation(){
    return input.value
}

function addNewElementAsLi(){
    let employeeName = retrieveEmployeeInformation()
    document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${employeeName}</li>`)
}

function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', function(event){
    addNewElementAsLi()
    document.querySelector('input').value = ''
  })
}

function clearEmployeeListOnLinkClick(){
  let link = document.querySelector('a')
  let ul = document.querySelector('ul')
  link.addEventListener('click', function(event){
    ul.innerHTML = ''
  })
}
