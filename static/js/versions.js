/* vars */
var latest = 2.2;
var versions = [
  1.0, 1.1, 1.2,
  2.0, 2.1, 2.2
];
var i;
var links;
var current;

/* version list */
for (i = 0; i < versions.length; i++) {
    links += '<li><a href="' + ((versions[i] === latest) ? "/" : versions[i] * 10) + '">Version ' + versions[i].toFixed(1) + '</a></li>';
}

/* current */
if ( window.location.pathname === "/" || window.location.pathname === "/index" || window.location.pathname === "/index.html") {
  current = latest.toFixed(1);
} else {
  current = (Number(window.location.pathname.replace("/", "").replace(".html", "")) / 10).toFixed(1);
}

/* boxsm */
var content = `
This specification is aimed to give Ops a better overlook of how their field agents have deployed the involved portals, or to be able to give simple instructions to agents on field how to deploy the resonators and mods.
            <table>
                <tr>
                    <td>Currently displaying:</td>
                    <td>v${current}</td>
                </tr>
                <tr>
                    <td>Latest Version:</td>
                    <td>v${latest}</td>
            </table>
            <h2>Links</h2>
            <ul class="ulno">
              <li>
                  Other Versions
                  <ul class="ulno" id="links">
                      ${links.replace("undefined", "")}
                  </ul>
              </li>
              <li>
                  <a href="#">ISDS generator</a> - Under Construction
              </li>
              <li>
                  <a href="https://github.com/svbeon/isds">GitHub</a>
              </li>
              <li>
                  <a href="ircs://chat.freenode.net:6697/isds">#isds on freenode</a>
              </li>
         </ul>
        <span class="spec noborder">Not officially affiliated with Ingress or Niantic Labs.</span>
       `;


/* exec */
(function() {
  document.getElementsByClassName("box sm")[0].innerHTML = content;
})();