let buttons = document.querySelectorAll('question-btn');
    
    function printMe(button){
      button.addEventListener('click',function(){
        let currentElement = this,
            getElement = currentElement.parentNode.parentNode;
            console.log('getElement');

      });
    
    };
    buttons.forEach(printMe());