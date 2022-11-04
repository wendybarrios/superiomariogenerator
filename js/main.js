
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const charactername = document.querySelector('input').value
  const url = `https://supermario-api-1.herokuapp.com/api/${charactername}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('p').innerText = data.funFact

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

