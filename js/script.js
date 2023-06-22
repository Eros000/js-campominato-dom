const myButton = document.querySelector('button');




myButton.addEventListener ('click', function (){

    const myContainer = document.querySelector('.grid-container');
    myContainer.innerHTML = ''

    for (let index = 1; index <= 100; index++) {
    
        const myCell = document.createElement ('div');
        myCell.classList.add('cell');
        myCell.append(index)
    
        myCell.addEventListener ('click', function (){
    
            this.classList.toggle('active');
            console.log(this.innerHTML)
    
        });

        myContainer.append(myCell);
    }

});








