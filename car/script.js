const myJson = [
    {
      Car: {
        Color: "Rose red",
        "Tinted windows": true
      }
    }
  ];
  document.getElementById("app").innerHTML = `
  <div id="json">
    <h1>Car properties</h1>
    <p>Color: ${myJson[0].Car.Color}</p>
    <p>Tinted windows: ${myJson[0].Car['Tinted windows'] ? 'Yes' : 'No'}</p>
    <p
  </div>
  `;
  