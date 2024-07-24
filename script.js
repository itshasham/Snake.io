// // Constants and variables
// let scr = 0;
// let game = new Audio('theme.mp3');
// let turn = new Audio('turns1.mp3');
// let over = new Audio('over1.mp3');
// let eat=new Audio('eaten.mp3');
// let direction = { x: 0, y: 0 };
// let inputDir = { x: 0, y: 0 };
// let foods = { x: 2, y: 7 };
// let speed = 5;
// let lastPaintTime = 0;
// let snakeArr = [{ x: 13, y: 15 }];






// // Game initialization
// function main(ctime) {
//     window.requestAnimationFrame(main);
//     if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
//         return;
//     }
//     lastPaintTime = ctime;
//     gameEngine();
// }

// // Check for collisions
// function isCollapse(sarr) {
//     const head = sarr[0];
//     for (let i = 1; i < sarr.length; i++) {
//         if (sarr[i].x === head.x && sarr[i].y === head.y) {
//             return true;
//         }
        
//     }
//     if(head.x>=18 || head.x<=0 || head.y>=18 || head.y<=0){
//         game.pause();
//     return true;
//     }
//     return false;
// }
// let his=localStorage.getItem("hscore")
// hscore.innerHTML="High Score : ",his;

// // Game engine
// function gameEngine() {
//     // Check for collision
//     if (isCollapse(snakeArr)) {
//         over.play();
//         inputDir = { x: 0, y: 0 };
//         alert("Game Over. Press Any Key");
//         snakeArr = [{ x: 12, y: 15 }];
        
//         scr = 0;
//     }

//     // Update the snake's position
//     const head = { ...snakeArr[0] };
//     snakeArr.pop(); // Remove the tail
//     head.x += inputDir.x;
//     head.y += inputDir.y;
//     snakeArr.unshift(head); // Add the updated head

//     // Display the snake
//     const board = document.getElementById('board');
//     board.innerHTML = "";
//     snakeArr.forEach((e, index) => {
//         const snakeElement = document.createElement('div');
//         snakeElement.style.gridRowStart = e.y;
//         snakeElement.style.gridColumnStart = e.x;
//         if (index === 0) {
//             snakeElement.classList.add('head');
//         } else {
//             snakeElement.classList.add('snakee');
//         }
//         board.appendChild(snakeElement);
//     });

//     // Displaying food
//     const foodElement = document.createElement('div');
//     foodElement.style.gridRowStart = foods.y;
//     foodElement.style.gridColumnStart = foods.x;
//     foodElement.classList.add('food');
//     board.appendChild(foodElement);

    
// if(his==null)
// {
//     let h=0;
//     localStorage.setItem("hscore",JSON.stringify(h));
// }
//     // If the snake eats the food, update the score and create a new food
//     if (snakeArr[0].y === foods.y && snakeArr[0].x === foods.x) {
//         eat.play();
//         scr++;
//         if(scr>his)
//         {
//             h=scr;
//             localStorage.setItem("hscore",JSON.stringify(h));
//             hscore.innerHTML="High Score : "+ scr;
//         }
//         else if(scr<his)
//         {
//             score.innerHTML="Score : "+scr ;
//         }
        
//         snakeArr.unshift({x:snakeArr[0].x+inputDir.x,y:snakeArr[0].y+inputDir.y});
        
//         let a = 2, b = 16;
//         foods = {
//             x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random())
//         };
//         // Increase the score
//     }
// }

// // Start the game loop
// window.requestAnimationFrame(main);

// // Event listener for controlling the snake
// window.addEventListener('keydown', e => {
//     game.play();
//     switch (e.key) {
//         case "ArrowUp":
//             turn.play();
//             inputDir.x = 0;
//             inputDir.y = -1;
//             break;

//         case "ArrowDown":
//             turn.play();
//             inputDir.x = 0;
//             inputDir.y = 1;
//             break;

//         case "ArrowRight":
//             turn.play();
//             inputDir.x = 1;
//             inputDir.y = 0;
//             break;

//         case "ArrowLeft":
//             turn.play();
//             inputDir.x = -1;
//             inputDir.y = 0;
//             break;

//         default:
//             break;
//     }
// });

// Constants and variables
let scr = 0;
let game = new Audio('theme.mp3');
let turn = new Audio('turns1.mp3');
let over = new Audio('over1.mp3');
let eat = new Audio('eaten.mp3');
let direction = { x: 0, y: 0 };
let inputDir = { x: 0, y: 0 };
let foods = { x: 2, y: 7 };
let speed = 7;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }];

// Game initialization
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    let hi = localStorage.getItem("hscore");
        hscore.innerHTML="High Score : "+hi;
    gameEngine();
}

// Check for collisions
function isCollapse(sarr) {
    const head = sarr[0];
    for (let i = 1; i < sarr.length; i++) {
        if (sarr[i].x === head.x && sarr[i].y === head.y) {
            return true;
        }
    }
    if (head.x >= 18 || head.x <= 0 || head.y >= 18 || head.y <= 0) {
        game.pause();
        return true;
    }
    return false;
}

// Game engine
function gameEngine() {
    // Check for collision
    if (isCollapse(snakeArr)) {
        over.play();
        inputDir = { x: 0, y: 0 };
        alert("Game Over. Press Any Key");
        snakeArr = [{ x: 12, y: 15 }];

        scr = 0;
        score.innerHTML = "Score: " + scr;
        let hi = localStorage.getItem("hscore");
        hscore.innerHTML="High Score : "+hi;
    }

    // Update the snake's position
    const head = { ...snakeArr[0] };
    snakeArr.pop(); // Remove the tail
    head.x += inputDir.x;
    head.y += inputDir.y;
    snakeArr.unshift(head); // Add the updated head

    // Display the snake
    const board = document.getElementById('board');
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add('head');
        } else {
            snakeElement.classList.add('snakee');
        }
        board.appendChild(snakeElement);
    });

    // Displaying food
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = foods.y;
    foodElement.style.gridColumnStart = foods.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);

    // If the snake eats the food, update the score and create a new food
    if (snakeArr[0].y === foods.y && snakeArr[0].x === foods.x) {
        eat.play();
        scr++;
        let his = localStorage.getItem("hscore");
        if (his === null) {
            his = 0;
        } else {
            his = parseInt(his); // Parse the high score as a number
        }

        if (scr > his) {
            localStorage.setItem("hscore", JSON.stringify(scr));
            hscore.innerHTML = "High Score: " + scr;
        } 
         score.innerHTML = "Score: " + scr;
        

        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });

        let a = 2, b = 16;
        foods = {
            x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random())
        };
    }
}

// Start the game loop
window.requestAnimationFrame(main);

// Event listener for controlling the snake
window.addEventListener('keydown', e => {
    game.play();
    switch (e.key) {
        case "ArrowUp":
            turn.play();
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            turn.play();
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowRight":
            turn.play();
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        case "ArrowLeft":
            turn.play();
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        default:
            break;
    }
});
