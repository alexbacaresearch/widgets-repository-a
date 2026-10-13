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