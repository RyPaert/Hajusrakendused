const myJson = [
    {
      Car: {
        Color: "Rose red",
        "Tinted windows": false,
        "Wheels": 4,
        "Roof cargo": null,
        Entertainment: [
            "FM Radio",
            "Apple CarPlay/Android Auto",
            "Bowers & Wilkins Premium Sound speakers"
        ]        
      }
    }
  ];
  document.getElementById("app").innerHTML = `
  <div id="json">
    <h1>Car properties</h1>
    <p>Color: ${myJson[0].Car.Color}</p>
    <p>Tinted windows: ${myJson[0].Car['Tinted windows'] ? 'Yes' : 'No'}</p>
    <p>Wheels: ${myJson[0].Car.Wheels}</p>
    <p>Roof Cargo: ${myJson[0].Car["Roof cargo"]? 'null' : 'thule'}</p>
    <p>Entertainment: ${myJson[0].Car.Entertainment}</p>
  </div>
  `;
  