
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
            <h1>Projects</h1>
            <ul>
                <li>
                    <a href = "https://ethaniscool.w3spaces.com"target="_blank">
                        <p>Ethan Is Cool</p>
                    </a>
                </li>
                <li>
                    <a href = "https://mrcoolkid69.github.io/responsive/"target="_blank">
                        <p>Responsive</p>
                    </a>
                </li>
            </ul>
    </div>
    `;
}

loadfooter();