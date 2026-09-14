
function loadfooter() {
    document.getElementsByTagName("footer")[0].innerHTML = `
    <table>
    <tr>
    <th>
    <p>Pages</p>
    </th>

    <th>
    <p>Projects</p>
    </th>

    </tr>
    <tr>
    <td>
    <a href = "index.html">
        <p>Home</p>
    </a>
    <a href = "websites.html">
        <p>Websites</p>
    </a>
    <a href = "contact.html">
        <p>Contact</p>
    </a>
    </td>

    <td>
    <a href = "https://ethaniscool.w3spaces.com"target="_blank">
        <p>Ethan Is Cool</p>
    </a>
    <a href = "https://mrcoolkid69.github.io/responsive/"target="_blank">
        <p>Responsive</p>
    </a>

    </tr>
    </table>`;
}

loadfooter();