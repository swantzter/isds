var latest = "1.0";
var versions = [
  { version: "1.0", link: "/" },
]
var i;
var links;

for	(i = 0; i < versions.length; i++) {
    links += '<li><a href="' + versions[i].link + '">Version ' + versions[i].version + '</a></li>';
}

(function() {
  document.getElementById("links").innerHTML = links.replace("undefined", "");
  document.getElementById("latest").innerHTML = "v" + latest;
})();