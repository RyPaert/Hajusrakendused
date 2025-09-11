let givenProfile = "";
let profileName = "";
let profileId = "";
let profileLink = "";
let profileRepos = "";

function renderPage() {
    document.getElementById("app").innerHTML = `
    <div>
        <h1>Github Profile Viewer</h1>
        <p>Please enter profile name:</p>
        <input />
        <div class="content">
            <h1 id="name">Name: ${profileName}</h1>
            <p id="id">Id: ${profileId}</p>
            <p id="repos">Public repos: ${profileRepos}</p>
            <p id="url">Link: <a href="${profileLink}" target="_blank">/users/ ${profileName}</a></p>
        </div>
    </div>
    `;
    const inputElement = document.querySelector("Input");
    inputElement.addEventListener("change", updateValue);
}

renderPage();

function fetchProfile() {
    const reqHeaders = new Headers();
    reqHeaders.set("Authorization", "" 
    );
    const options = {
      headers: reqHeaders,
    };
    
    // Pass init as an "options" object with our headers.
    const req = new Request("https://api.github.com/users/" + givenProfile, options);
    
    fetch(req)
    .then((res)=>res.json())
    .then((data) => {
        console.log(data);
        profileName = data.login;
        profileId = data.id;
        profileLink = data.html_url;
        profileRepos = data.public_repos;

        renderPage();
    });
}


function updateValue(event) {
    givenProfile = event.target.value;
    fetchProfile();
}