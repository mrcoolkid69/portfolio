
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

    <th>
    <p>Contact</p>
    </th>

    </tr>
    <tr>
    <td>
    <a href = "/">
        <p>Home</p>
    </a>
    <a href = "/websites">
        <p>Websites</p>
    </a>
    <a href = "/contact">
        <p>Contact</p>
    </a>
    </td>

    <td>
    <a href = "https://ethaniscool.w3spaces.com"target="_blank">
        <p>Ethan Is Cool</p>
    </a>

  <td>
    
  </td>
    </tr>
    </table>`;
}

loadfooter();