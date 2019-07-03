function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()



function retrieveEmployeeInformation() {
  return document.getElementsByTagName('input')[0].value;
}

function addNewElementAsLi() {
  let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();

  document.querySelector('.employee-list').appendChild(li)
}

function addNewLiOnClick() {
  document.querySelector('input[type="submit"]').addEventListener('click', function() {
    addNewElementAsLi();
    document.querySelector('input').value = "";
  })
}

function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function() {
    document.querySelector('.employee-list').innerHTML = "";
  })
}
