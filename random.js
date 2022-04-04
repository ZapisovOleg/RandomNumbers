function randomNumbers(){
    let numberRand = Math.floor(Math.random()*100);
    for(i=0;i<10;i++){
        let userNumber = prompt('Введите Ваше число');
        if(userNumber == numberRand) return alert('Вы угадали число' + " " + 'за' + " " + i +" " + 'попыток');
        else if(userNumber>numberRand){
            alert('Вы ввели большее число');
        }
        else if(userNumber<numberRand){
            alert('Вы ввели меньшее число');
        }
    }
    return alert('Вы не угадали число');
}
randomNumbers();