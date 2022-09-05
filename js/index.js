// DOM elements

const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name2 = document.getElementById('name'),
focus = document.getElementById('focus')

//show time

function showTime() {
    let today = new Date();
    hour = today.getHours();
    min = today.getMinutes();
    secs = today.getSeconds();

    // am or pm

    const amPm = hour >= 12 ? 'PM' : 'AM'
    
    //12 hour format

    hour = hour%12 || 12;

    //output the time

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(secs)} ${amPm}`;
    
    setTimeout(showTime, 1000);
}

function addZero(n){
    return (parseInt(n,10) < 10  ? '0': '') + n;
}


function setBgGreet(){
    let today = new Date();
    hour = today.getHours();

    if(hour < 12){
     //morning
      document.body.style.backgroundImage = "url('../img/morning.jpg')";
      greeting.textContent = 'Good Morning';
    }else if(hour < 18){
      //afternoon
      document.body.style.backgroundImage = "url('../img/afternoon.webp')";
      greeting.textContent = 'Good Afternoon';
    }else{
        //evening
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        greeting.textContent = 'Good Night';
        document.body.style.color = 'white';
    }
}

function get_name() {
    
    if(localStorage.getItem('name2') === null){
        name2.textContent = '[Enter Name]';
    }else{
        name2.textContent = localStorage.getItem('name2');
    }
}

function set_name(var3) {
    if(var3.type === 'keypress'){
    // enter is pressed
    if(var3.which == 13 || var3.keyCode == 13)
    {
        localStorage.setItem('name2', var3.target.innerText);
        name2.blur();
    }
    }else{
        localStorage.setItem('name2', var3.target.innerText);
    }
}

function get_focus() {
    
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]';
    }else{
        focus.textContent = localStorage.getItem('focus');
    }
}

function set_focus(var3) {
    if(var3.type === 'keypress'){
    // enter is pressed
    if(var3.which == 13 || var3.keyCode == 13)
    {
        localStorage.setItem('focus', var3.target.innerText);
        focus.blur();
    }
    }else{
        localStorage.setItem('focus', var3.target.innerText);
    }
}
name2.addEventListener('keypress',set_name);
name2.addEventListener('blur', set_name);
focus.addEventListener('keypress',set_focus);
focus.addEventListener('blur', set_focus);


showTime();
setBgGreet();
get_name();
get_focus();