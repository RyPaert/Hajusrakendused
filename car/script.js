const myJson = [
    {
      Car: {
        Color: "Rose red",
        "Tinted windows": false,
        "Wheels": 4,
        "Roof cargo": false,
        Entertainment: [
            "FM Radio",
            "MP3, MP4 and MKV player",
            "Harman/Kardon speakers"
        ],
        Accessories: [
          "Satnav",
          "Cruise Control"
        ]      
      },
      // Car: {
      //   Color: "Navy blue",
      //   "Tinted windows": true,
      //   "Wheels": 4,
      //   "Roof cargo": null,
      //   Entertainment: [
      //       "FM Radio",
      //       "MP3, MP4 and MKV player",
      //       "Harman/Kardon speakers"
      //   ],
      //   Accessories: [
      //     "Satnav",
      //     "Cruise Control"
      //   ]      
      // }
    }
  ];
  let resultDiv = `<div id="json"><h1>Car Properties</h1>`
  for (const car of myJson) {
    resultDiv += `
    <section>
      <p>Color: ${myJson[0].Car.Color}</p>
      <p>Tinted windows: ${myJson[0].Car['Tinted windows'] ? 'Yes' : 'No'}</p>
      <p>Wheels: ${myJson[0].Car.Wheels}</p>
      <p>Roof Cargo: ${myJson[0].Car['Roof cargo'] ??'No'}</p>
      <p>Entertainment: ${myJson[0].Car.Entertainment}</p>
      <p>Accessories: ${myJson[0].Car.Accessories}</p>
    </section>
    `
  }

  document.getElementById("app").innerHTML = resultDiv


  // document.getElementById("app").innerHTML = `
  // <div id="json">
  //   <h1>Car properties</h1>
  //   <p>Color: ${myJson[0].Car.Color}</p>
  //   <p>Tinted windows: ${myJson[0].Car['Tinted windows'] ? 'Yes' : 'No'}</p>
  //   <p>Wheels: ${myJson[0].Car.Wheels}</p>
  //   <p>Roof Cargo: ${myJson[0].Car['Roof cargo'] ? 'Yes' : 'No'}</p>
  //   <p>Entertainment: ${myJson[0].Car.Entertainment}</p>
  //   <p>Accessories: ${myJson[0].Car.Accessories}</p>
  // </div>
  // `;
  