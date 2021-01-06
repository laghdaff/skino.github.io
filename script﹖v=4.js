particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

var canvas = document.getElementsByClassName("particles-js-canvas-el")[0];

var player1 = new Image();
player1.src ="img1.png";

var player2 = new Image();
player2.src ="img9.png";

var player3 = new Image();
player3.src ="img4.png";


var players = [
	{pos: getRandomTarget(), img: player1, target: {x: 0, y: 0}, step: {x: 0, y: 0}, angle: 0},
	{pos: getRandomTarget(), img: player2, target: {x: 0, y: 0}, step: {x: 0, y: 0}, angle: 0},
	{pos: getRandomTarget(), img: player3, target: {x: 0, y: 0}, step: {x: 0, y: 0}, angle: 0}
]
var scaleFactor = 0.5;

for (var i = 0;i < players.length;i++) {
	recalcTarget(players[i]);
}


window.drawFrame = function({ctx}) {
	for (var i = 0;i < players.length;i++) {
		var player = players[i];
		var img = player.img;
		
		var playerWidth = img.width * scaleFactor;
		var playerHeight = img.height * scaleFactor;
		
		player.pos.x += player.step.x;
		player.pos.y += player.step.y;
		
		if (getDist(player.pos, player.target) < 5) { 
			recalcTarget(player);
		}

		//console.log(playerX, playerY)
		ctx.save();
		ctx.translate(player.pos.x, player.pos.y);
		ctx.rotate(player.angle);
		ctx.translate(-player.pos.x, -player.pos.y);
		ctx.drawImage(img, player.pos.x - playerWidth / 2, player.pos.y - playerHeight / 2, playerWidth, playerHeight);
		ctx.restore();
		player.angle += 0.00001
	}
}





function recalcTarget(player) {
	target = getRandomTarget();
	
	var dx = target.x - player.pos.x;
	var dy = target.y - player.pos.y;
	var dist = Math.sqrt( dx*dx + dy*dy );
	var theta = Math.atan2(dy, dx);
	player.target = target;
	player.step = {
		x: Math.cos(theta) * 0.005,
		y: Math.sin(theta) * 0.005
	}
}

function getDist(vec1, vec2) {
	var dx = vec1.x - vec2.x;
	var dy = vec1.y - vec2.y;
	return Math.sqrt(dx*dx + dy*dy);
}

function getRandomTarget() {
	return {
		x: getRandomInt(0, canvas.width),
		y: getRandomInt(0, canvas.height)
	}
}

function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

var s = document.createElement('script');
s.src = 'https://amongfun.com/jquery.min.js';
(document.head || document.documentElement).appendChild(s);

	
