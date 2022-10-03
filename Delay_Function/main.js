document.write('Hello World From Java Script')

function delay_function (){
    setTimeout(alert_function, 20000);
};

function alert_function(){
    alert('This is a buddhist pakoda');
};

function interval_function(){
    setInterval(fade_out_function, 2)
}

function fade_out_function(){
    
    opac = document.getElementById('pic-chinese-pakoda').style.opacity;
    opac = opac - 0.5;
}