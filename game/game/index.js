import { Game } from "./game.js";

window.onload = function () {
    const heads = document.getElementsByTagName("head");
    if (heads && heads.length > 0) {
        const requireScripts = [
            "game/game.js",
        ];

        for (let i = 0; i < requireScripts.length; i++) {
            var script = document.createElement("script");
            script.setAttribute("type", "module");
            script.setAttribute("src", requireScripts[i]);
            heads[0].appendChild(script);
        }
    }

    const canvas = document.createElement("canvas");
    canvas.id = "gameWindow";
    canvas.width = window.innerWidth;
    canvas.height =  window.innerHeight;

    const ctx = canvas.getContext("2d");

    let game = new Game(canvas, ctx);
    document.body.append(canvas);

    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        game.resizeWindow(window.innerWidth, window.innerHeight);
    }

    function draw() {
        game.render();
        requestAnimationFrame(draw);
    }
      
    draw();
}

function setCookie(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie =
        name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
}

function getCookie(name) {
    var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return value ? value[2] : null;
}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
}