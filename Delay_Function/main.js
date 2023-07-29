document.write('Hello Worljd From Java Script')

function delay_function (){
    setTimeout(alert_function, 2000);
};

function alert_function(){
    alert('This is a buddhist pakoda');
};

function interval_function(){
    setInterval(fade_out_function, 2)
}

function fade_out_function(){
    
    image = document.getElementById('pic-chinese-pakoda').style.opacity = 0.2
}
