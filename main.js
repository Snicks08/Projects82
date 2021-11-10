myCanvas = document.getElementById("myCanvas")

ctx = myCanvas.getContext("2d")

var color = "Black"

var width_of_line = 1

var radius = 200

var mp = ""

myCanvas.addEventListener("mousedown", mouseisdown)

var last_positionofx
var last_positionofy

var current_x
var current_y

function mouseisdown(e)
{
    mp = "mouseDown"

    color = document.getElementById("color").value

    width_of_line = document.getElementById("linewidth").value

    radius = document.getElementById("radius").value

    last_positionofx = e.clientX - myCanvas.offsetLeft
    last_positionofy = e.clientY - myCanvas.offsetTop
}

myCanvas.addEventListener("mousemove", mouse_move)

function mouse_move(r)
{
    current_x = r.clientX - myCanvas.offsetLeft
    current_y = r.clientY - myCanvas.offsetTop

    if (mp=="mouseDown")
    {
        ctx.strokeStyle=color
        ctx.lineWidth=width_of_line
        ctx.moveTo(last_positionofx, last_positionofy)
        ctx.beginPath()
        ctx.arc(current_x, current_y, radius, 0, 2 * Math.PI)
        ctx.stroke()
    }
    last_positionofx=current_x
    last_positionofy=current_y
}

myCanvas.addEventListener("mouseup", mouse_up)

function mouse_up(t)
{
    mp="mouseUp"
}

function clearareas()
{
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height)
}