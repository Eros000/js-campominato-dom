const myButton = document.querySelector('button');




myButton.addEventListener ('click', function (){

    const myContainer = document.querySelector('.grid-container');
    myContainer.innerHTML = ''

    

    for (let index = 1; index <= 100; index++) {
    
        const myCell = document.createElement ('div');
        myCell.classList.add('cell');
        myCell.append(index)
    
        myCell.addEventListener ('click', function (){
    
            if(myCell == randomMines()){
                myCell.classList.toggle('mine');
                console.log(this.innerHTML)
            }
            else{
                myCell.classList.toggle('active');
                console.log(this.innerHTML)
            }
    
        });

    
        myContainer.append(myCell);
    }


    

    

});




/* 
    FUNCTIONS
*/
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function randomMines () {

    const mine = 16;
    const randomMines = [];

    let index = 0;
    while (randomMines.length < mine) {
        const aNumber = randomNumber(1, 100);
        console.log('aNumber', aNumber, typeof aNumber);

        if (!randomMines.includes(aNumber)) {
            randomMines.push(aNumber);
        }

        index++;
    }

    console.log('randomMines', randomMines, typeof randomMines);
    console.log('Per riempire l\'array ci sono volute', index, 'esecuzioni');
}

