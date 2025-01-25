const cards = document.querySelectorAll('.card>h1');
const mainLetters= document.querySelectorAll('.card>h1>span');
const btn = document.querySelector('.btn')
const boxCard = document.querySelectorAll('.card');
let cardLeft = document.querySelector('.cardLeft')
let points = document.querySelector('.points')
let col = document.querySelectorAll('.col')
let body = document.querySelector('.game-body');
let popUp = document.querySelector('.pop-up')
//randomise the letters everytime you enter the game

const letters = ['A','B','C','D','E','F','G','H','A','B','C','D','E','F','G','H']
let number = Math.floor(Math.random() * 8);
let randomNumbersA= [];
let randomNumbersB= [];
let randomNumbers=[];
let colSize= [];
let tempCol = [];
let check = '';
let num = 0;
let cleft = 16;
points.innerText = num;
cardLeft.innerText = cleft;
let colRan = 0;

const colRandom = ()=> {
  //this algorith is called The Fisher-Yates shuffle algorithm it generates random numbers making sure that none is repeated
  function generateRandomNumbers(min, max, count) {
    // Create an array of numbers from min to max
    const numbers = Array.from({ length: max - min + 1 }, (v, k) => k + min);
    
    // Fisher-Yates shuffle algorithm
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // Return the first 'count' numbers from the shuffled array
    return numbers.slice(0, count);
}

  for(let i = 0 ; i < 4 ; i++)
    {
     
      tempCol.push(col[i]);

    }
    col.forEach( c =>{
      c = tempCol[generateRandomNumbers(0,4,1)];
    })
    tempCol = [];
}


const rendomnise = ()=>{

        for(let i = 0 ; i < 8 ;i++ ){  
                    do{
                        number = Math.floor(Math.random() * 8);
                        check =randomNumbersA.includes(number)
                    }
                    while(check)
                  randomNumbersA[i] = number;
                  randomNumbers[i] = randomNumbersA[i];

                }

                for(let i = 8 ; i < 16 ;i++ ){  

                  do{
                      number = Math.floor(Math.random() * 8);
                      check = randomNumbersB.includes(number)
                  }
                  while(check)
               
                randomNumbersB[i] = number;
                randomNumbers[i] = randomNumbersB[i];
                
               
              }
              
               for(let s = 0 ; s < 16 ; s++)
                {
                  
                  mainLetters[s].innerText = letters[randomNumbers[s]];
                 
                }
                 
}
let cardStore = [];


const disableCards = ()=>{
  cards.forEach(card =>{
    card.style.pointerEvents = 'none'
  })
  console.log('disabled')
}

const enableCards = ()=>{
  cards.forEach(card =>{
    card.style.pointerEvents = 'auto'
  })
  console.log('enabled')
}


btn.addEventListener('click' , ()=>{
  // 
  enableCards();
   popUp.style.visibility = 'hidden'
  body.style.backgroundColor ="#fff"
  rendomnise();
  randomNumbers= [];
  randomNumbersB= [];
  randomNumbersA= [];
  colRandom();
  console.log(randomNumbers);
  btn.innerText = 'Restart'
  cards.forEach((card)=>{
  card.style.color = '#023047';
  card.style.border = `#8ECAE6 .2rem solid`;
  card.style.transform= 'rotateY(360deg)';
  card.style.backgroundColor = '#FB8500'
  })
  cardStore = []
  num = 0;
  cleft = 16;
  points.innerText = num;
  cardLeft.innerText = cleft;
  mainLetters.forEach(l=>{
    l.style.visibility = 'hidden'
  })

  
})


const letterAnime =(l)=>{
  l.firstElementChild.style.color =
  l.firstElementChild.style.transition= '.5s ease';
}

cards.forEach(box => {
  
  box.addEventListener('click',()=>{
    enableCards();
    box.style.transition= '.5s ease';
    // 
    box.firstChild.style.transition= '.5s ease';
    box.style.transform= 'rotateY(180deg)';
    
    if(cardStore.length == 0){ 
        
        cardStore.push(box.firstChild) ;
        box.style.backgroundColor = '#023047'
        setTimeout(()=>{
        box.firstChild.style.color = '#8ECAE6'
        box.firstChild.style.visibility = 'visible'
        
    },400)
        
        box.style.border = `#8ECAE6 .2rem solid`;
        box.style.pointerEvents = 'none'
        console.log(cardStore[0].innerText);
        
    }
    else{
      box.firstChild.style.visibility = 'visible'      
        console.log(box.firstChild.textContent,'box')
        console.log(cardStore[0].innerText,'array');
        if(cardStore[0].innerText === box.firstChild.textContent)
          { 
            enableCards();
            box.style.backgroundColor = '#023047'
            setTimeout(()=>{  
              box.firstChild.style.color = '#FB8500';
              box.firstChild.style.visibility = 'visible'
          },400)
            cardStore[0].style.color = '#FB8500';
            box.style.border = `#FFB703 .2rem solid`;
            cardStore[0].parentElement.style.border = `#FFB703 .2rem solid`;
         
            num = num +10;
            points.innerText = num;
            cardStore= [];
            cleft = cleft - 2;
            cardLeft.innerText = cleft;
            let timer =0;
                      if(cardLeft.innerText == 0)
                        {
                          setTimeout(()=>{
                              body.style.backgroundColor ="#023047"
                              cards.forEach(card=>{
                                card.style.backgroundColor ="#023047"
                                card.firstChild.style.color ="#023047"
                                card.style.border ="none"
                                card.firstChild.style.pointerEvents  ="none" 
                                card.style.pointerEvents ="none" 
                              })
                             
                              setTimeout(()=>{
                                popUp.style.visibility = 'visible'
                                popUp.style.top = '50%'
                                popUp.style.transform = 'translate(-50% , -50%) scale(1)'
                                
                            },500)
                          },3000)
                         
                            setInterval(()=>{
                              timer += 100;
                                popUp.style.transform = `translate(-50% ,-${timer}) scale(1`
                            },3500)
                       
                        } 
          }
      else{
        
                  box.firstChild.style.color = 'red'
                  box.style.border = `red .2rem solid`;
                  box.style.backgroundColor = '#023047';
                  cardStore[0].style.color = 'red'  
                  cardStore[0].parentElement.style.border ="red solid"                
                  disableCards();

                  setTimeout(()=>{
                  cardStore[0].style.color = '#FB8500'
                  box.firstChild.style.color = '#FB8500' 
                  box.style.transition= '.5s ease';
                  box.style.transform= 'rotateY(360deg)';
                  cardStore[0].parentElement.style.transition= '.5s ease';
                  cardStore[0].parentElement.style.transform= 'rotateY(360deg)';
                  cardStore[0].parentElement.style.backgroundColor = '#FB8500'  
                  box.style.backgroundColor ='#FB8500'
                  box.firstChild.style.visibility = 'hidden';
                  cardStore[0].style.visibility = 'hidden';
                  cardStore[0].parentElement.style.border = `0rem`;
                  box.style.border = `0rem`;
                  num = num - 5 ;
                  points.innerText = num;
                  cardStore= [];
                  enableCards();
                                            
                  },2000)

                                       
                
                  
                    
          }
          
    }
  })
})

