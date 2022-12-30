const projectName = "Speed Cube"
const projectDescription = "Supere seus limites e tenha controle do seu progreço, conheça nosso app."
const storeLink = "https://play.google.com/store/apps/details?id=com.rslima.speed_cube"
function appName() {
    document.write(projectName)
};
function appDescription() {
    document.write(projectDescription)
};

function openStore() {
    document.write("<a href=\"" + storeLink + "\">" +
        "<img src=\"assets/images/playstore.png\"  />" +
        "<div><span>Baixe Agora</span><strong>Google Play</strong></div></a > ")
};
