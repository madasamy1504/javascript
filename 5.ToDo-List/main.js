let inputBox = document.getElementById('inputBox'),
    updateBotton = document.getElementById('submit'),
    addElement = document.getElementById('addElement'),
    olEle = document.getElementById('olEle');

   function update(e){
         e.preventDefault();
    let inputBoxValue = inputBox.value,
        liEle = document.createElement('li'),
        spanEle = document.createElement('span'),
        doneEle = document.createElement('a'),
        editEle = document.createElement('a'),
        deleteEle = document.createElement('a');
        doneEle.setAttribute('href','#');
        editEle.setAttribute('href','#');
        deleteEle.setAttribute('href','#');
        doneEle.innerHTML = 'Done';
        editEle.innerHTML = 'Edit';
        deleteEle.innerHTML = 'Delete';
        spanEle.innerHTML = inputBoxValue;
        liEle.appendChild(spanEle);
        liEle.appendChild(doneEle);
        liEle.appendChild(editEle);
        liEle.appendChild(deleteEle);
        olEle.append(liEle);

        
        doneEle.addEventListener('click',updateDone);
        editEle.addEventListener('click',updateEdit);
        deleteEle.addEventListener('click',updateDelete);
        //console.log(doneEle);


       //console.log(addElement);

    };
    
    function updateDone(){
        spanEle.classList.add = ('.done');
       console.log(spanEle); 
    };
    function updateEdit(){
        
    };
    function updateDelete(){
        
    };
    
    updateBotton.addEventListener('click',update);
    