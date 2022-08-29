const card1 = document.createElement('div');
const card2 = document.createElement('div');
const card3 = document.createElement('div');
card1.setAttribute('class', 'card__cat--back');
card2.setAttribute('class', 'card__dog--back');
card3.setAttribute('class', 'card__mouse--back')
const game = document.getElementById('game');
game.appendChild(card1);
game.appendChild(card2);
game.appendChild(card3);

const classImages = ['card__cat--back', 'card__dog--back', 'card__mouse--back']


    
let score = 0;
let clicked = 0;

card1.addEventListener('click', (e) => {
    e.preventDefault();
    clicked+=1
    let clickedd = document.getElementById('clicked');
    clickedd.innerText = clicked;
    const numRandom = Math.floor(Math.random()*3)

        if(e.target.className === 'card--front'){
            card1.setAttribute('class', classImages[numRandom]);
            card1.style.boxShadow = "grey 4px 4px 10px"
            if(card2.className === classImages[numRandom] && card3.className === classImages[numRandom]){
                //console.log("You win")
                score+=1;
                let result = document.getElementById("score");
                result.innerText = score;
                
                

            }
        }else{
            card1.setAttribute('class', 'card--front');
            card1.style.boxShadow = "none"

        }

        if(score === 3 && clicked <30){
          const win = document.getElementById("win");
          win.innerText = 'Congratulations! You win.';
          if(clicked === 30){
            buildButton();
            }
        }

        if(clicked  === 30){
          const end = document.getElementById("end");
          end.innerText = 'You clicked 30 times. Try again!';
          buildButton(); 
          score = 0;
        

         

        }

})

card2.addEventListener('click', (e) => {
    e.preventDefault();
    clicked+=1
    let clickedd = document.getElementById('clicked');
    clickedd.innerText = clicked;
    const numRandom = Math.floor(Math.random()*3)

        if(e.target.className === 'card--front'){
            card2.setAttribute('class', classImages[numRandom]);
            card2.style.boxShadow = "grey 4px 4px 10px"

            if(card1.className === classImages[numRandom] && card3.className === classImages[numRandom]){
                score+=1;
                let result = document.getElementById("score");
                result.innerText = score;
              


            }

        }else{
            card2.setAttribute('class', 'card--front')
            card2.style.boxShadow = "none"

        }

        if(score === 3 && clicked < 30){
          const win = document.getElementById("win");
          win.innerText = 'Congratulations! You win.';
          if(clicked === 30){
            buildButton();
            }
        }

        if(clicked  === 30){
          const end = document.getElementById("end");
          end.innerText = 'You clicked 30 times. Try again!';
          buildButton();
          score = 0;

         
        }

})
card3.addEventListener('click', (e) => {
    e.preventDefault();
    clicked+=1
    let clickedd = document.getElementById('clicked');
    clickedd.innerText = clicked;
    const numRandom = Math.floor(Math.random()*3)

        if(e.target.className === 'card--front'){
            card3.setAttribute('class', classImages[numRandom]);
            card3.style.boxShadow = "grey 4px 4px 10px"

            if(card1.className === classImages[numRandom] && card2.className === classImages[numRandom]){
                score+=1;
                let result = document.getElementById("score");
                result.innerText = score;
                
            }

        }else{
            card3.setAttribute('class', 'card--front')
            card3.style.boxShadow = "none"
        }

        if(score === 3 && clicked < 30){
          const win = document.getElementById("win");
          win.innerText = 'Congratulations! You win.';
          if(clicked === 30){
          buildButton();
          }
        }

        if(clicked  === 30){
          const end = document.getElementById("end");
          end.innerText = 'You clicked 30 times. Try again!';
          buildButton()
          score =0;
        
          
        }

})


function buildButton(){
  const btn = document.getElementById('btn');
  const button = document.createElement('button');
  button.innerText = 'New Game';
  btn.appendChild(button);
  button.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.reload();
  }) 
}



