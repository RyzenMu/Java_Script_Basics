document.write("<h3>Hello From JS file</h3>")

function fadeOut()
{
    intervalID = setInterval(hide, 300);
}

function hide()
{
    var img = document.getElementById('flower');
    opacity = Number(window.getComputedStyle(img).getPropertyValue('opacity'));
    if (opacity > 0)
    {
        opacity = opacity - 0.02;
        img.style.opacity = opacity;
        console.log(opacity)
    }
    else
    {
        clearInterval(intervalID);
    }
}

function fadeIn()
{
    intervalID = setInterval(show, 300);
}

function show()
{
    var img = document.getElementById('flower');
    opacity = Number(window.getComputedStyle(img).getPropertyValue('opacity'));
    if (opacity < 1)
    {
        opacity = opacity + 0.02;
        img.style.opacity = opacity;
        console.log(opacity)
    }
    else
    {
        clearInterval(intervalID);
    }
}