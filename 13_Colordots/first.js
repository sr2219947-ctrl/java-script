document.body.addEventListener("click", (event) => { //if we want tto hover circle in center than event is not in use but if when we click point cursor anywhere on screen and want circle form center initially then evnet and 25 px from top and left used 
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.textContent = "Hi";
    const x = event.clientX;
    const y = event.clientY;
    circle.style.left = `${x - 25}px`
    circle.style.top = `${y - 25}px`
    const color = ["red", "blue", "orange", "pink", "skyblue", "yellow", "wheat", "purple"];
    circle.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
    const messages = ['Hi', 'Hello', 'Welcome', 'Hey there', 'Hola'];
    circle.textContent = messages[Math.floor(Math.random() * messages.length)];

    document.body.appendChild(circle);
    setTimeout(() => {
        circle.remove();
    }, 5000)
})