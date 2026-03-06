// Youtube Subscribe Button
function SubscribeButton(){
  // get the button. 
  const subscribeButton = document.querySelector('.js-youtube-button');

  if (subscribeButton.innerText === 'Subscribe'){
    subscribeButton.innerText = 'Subscribed';
    // add a new class to an button thus when a button is clicked it will add a new class 'is-subscribed';
    subscribeButton.classList.add('is-subscribed-button')

  }else {
    subscribeButton.innerText = 'Subscribe';
    subscribeButton.classList.remove('is-subscribed-button')
  }

}

//Amazon Shipping Button
// HandleKeydown event listener 

function handleKeydownEvent(event){
   if(event.key === 'Enter'){
    amazonShipping()
    }
}

function amazonShipping(){
  const inputElement = document.querySelector('.js-cost-input');
  let numberValue = Number(inputElement.value);

  if(numberValue <= 40){
    numberValue += 10; 
  }else{
    numberValue; 
  }
  
  // display the cost, grab the html element
  document.querySelector('.js-total-cost').innerHTML = ` $${numberValue}`; 
}


