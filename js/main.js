
document.querySelector('.start-btn').addEventListener('click', getFetch)

  //Start of function to clear out data from input form 
  function clearField() {
    document.querySelector("input").value = ""
  }
  //End of function to clear out data from input form 

function getFetch(){

  const charactername = document.querySelector('input').value
  const url = `https://supermario-api-1.herokuapp.com/api/${charactername}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('.funfact').innerText = data.funFact
        clearField()

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

