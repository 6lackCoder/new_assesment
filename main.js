const url = "https://randomuser.me/api/";

const picture = document.querySelector("img");
const fullName = document.querySelector("#fullname");
const phone = document.querySelector('#phone')
const email = document.querySelector('#email')
const gender = document.querySelector('#gender')
const home = document.querySelector('#address')

const getData = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      picture.src = `${data.results[0].picture.medium}`;
      fullName.textContent += ` ${data.results[0].name.title}. ${data.results[0].name.first} ${data.results[0].name.last}.`;
      phone.textContent += ` ${data.results[0].phone}.`
      email.textContent += ` ${data.results[0].email}.`
      gender.textContent += ` ${data.results[0].gender.toUpperCase()}.`
      home.textContent += ` ${data.results[0].location.street.number}, ${data.results[0].location.street.name} street, ${data.results[0].location.state}, ${data.results[0].location.country}.`

    });
};

getData();
