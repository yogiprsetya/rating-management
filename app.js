var apiHost = 'https://us-central1-ratingsystem-d54ce.cloudfunctions.net/app'
// var apiHost = 'http://localhost:5000/ratingsystem-d54ce/asia-south1/app'

let rate = (slug, i) => {
  fetch(`${apiHost}/rating/${slug}`, {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then((res) => {
    res.json().then(data => {
      document.getElementsByClassName("rate")[i].innerHTML += (data.reduce((a, b) => a + b) / data.length).toFixed(2)
      document.getElementsByClassName("jml")[i].innerHTML += data.length
    }).catch((err) => {
        console.log(err);
    })
  })
}

function getRate() {
  fetch(`${apiHost}/rated`, {
    method: 'GET',
    async: 1,
  }).then((res) => res.json()).then(data => {
    for (var i = 0; i < data.length; i++) {
      rate(data[i], i)
      document.getElementById("body").innerHTML += `
        <tr>
          <td>${i + 1}</td>
          <td><a href="https://lagudaerah.id/${data[i]}" target="blank">${data[i]}</a></td>
          <td class="rate"></td>
          <td class="jml"></td>
        </tr>
      `
    }
  }).catch((err) => console.log(err))
}

window.onload = getRate;
