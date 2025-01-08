document.getElementById('colorButton').addEventListener('click',changeColor );
function changeColor(){
    const colors=['yellow','red','green','brown'];
    const randomColor=colors[Math.floor(Math.random()* colors.length)];
document.body.style.backgroundColor = randomColor;
}