

const defaultBtn = document.getElementById("default-theme");
const darkBtn = document.getElementById("dark-theme");
const lightBtn = document.getElementById("light-theme");
const invertBtn = document.getElementById("inverted-theme");


defaultBtn.addEventListener("click", () => {
    changeStyle("default");
});

darkBtn.addEventListener("click", () => {
    changeStyle("dark");
});

lightBtn.addEventListener("click", () => {
    changeStyle("light");
});

invertBtn.addEventListener("click", () => {
    changeStyle("inverted");
});


function changeStyle(theme) {
    localStorage.setItem("theme", theme);
    loadStyles();
    console.log(theme);
}

function loadStyles() {
    let style = localStorage.getItem("theme");
    if (style === "defualt") {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', style);
    }
}
loadStyles();


function loadfooter() {
    document.getElementsByTagName("footer")[0].innerHTML = `
    <div>
        <h1>Pages</h1>
        <ul>
            <li>
                <a href = "index.html">
                    <p>Home</p>
                </a>
            </li>
            <li>
                <a href = "sites.html">
                    <p>Websites</p>
                </a>
            </li>
            <li>
                <a href = "contact.html">
                    <p>Contact</p>
                </a>
            </li>
        </ul>

        </div>
        <div>
            <h1>Latest Projects</h1>
            <ul>
                <li>
                    <a href = "https://ethaniscool.w3spaces.com"target="_blank">
                        <p>Ethan Is Cool</p>
                    </a>
                </li>
                <li>
                    <a href = "https://mrcoolkid69.github.io/tools/"target="_blank">
                        <p>Tools</p>
                    </a>
                </li>
            </ul>
    </div>
    `;
}

loadfooter();