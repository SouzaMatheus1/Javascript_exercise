function parimpar(){
    let number = document.getElementById('entrada').value;
    if(number % 2 == 0){
        alert("par");
    }else{
        alert("impar");
    }
}

function maiormenor(){
    let a = document.getElementById('valora').value;
    let b = document.getElementById('valorb').value;
    if(a > b){
        alert("O maior valor é o: " + a);
    }else{
        alert("O maior valor é o: " + b);
    }
}

function data(){
    let dia = new Date().toLocaleDateString('pt-BR');
    alert(dia);
}

function contagem(){
    for(var i = 0;i<255;i++){
        alert(i);
    }
}

function contagempar(){
    for(i = 0;i<255;i++){
        if(i % 2 == 0)
        {alert(i);}
    }
}

function contagemimpar(){
    for(i = 0;i<255;i++){
        if(i % 2 != 0)
        {alert(i);}
    }
}

function contagemregressiva(){
    for(i = 255;i>0;i--){
        console.log(i);
    }alert("Booyah!");
}

function maior15(){
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    if(number1 > 15 && number2 > 15){
        alert("Os dois valores são maiores que 15");
    }else if(number1 > 15 || number2 < 15){
        alert("O valor 2 é menor que 15");
    }else{
        alert("O valor 1 é menor que 15");
    }
}

function parimpar2(){
    let number1 = document.getElementById('par1').value;
    let number2 = document.getElementById('par2').value;
    if(number1 % 2 == 0 && number2 % 2 == 0){
        alert("Os dois números são pares");
    }else if(number1 % 2 == 0 || number2 % 2 != 0){
        alert("O primeiro número é par");
    }else if(number1 % 2 != 0 || number2 % 2 == 0){
        alert("O segundo número é par");
    }
}

function parabens(){
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    
    let aniversario = document.getElementById('aniversario').value;
    let [ano_aniversario, mes_aniversario, dia_aniversario] = aniversario.split('-');
    
    let dia_atual = new Date().toLocaleDateString();
    let [dia_hoje, mes_atual, ano_atual] = dia_atual.split('/');

    if(dia_aniversario == dia_hoje && mes_aniversario == mes_atual){
        alert("Feliz aniversario "+ nome + " " + sobrenome)
    }
}

function desafio(){
    let number = 1000000;
    let temp = 0;
    let maior = 0;

    for(let i=1000001;i>1;i--){
        number = i;
        temp = 0;
    while(number != 1){
        if(number % 2 == 0){
            number = number / 2;
            
        }else{
            number = (number*3) + 1;
        }temp += 1}
        if(temp > maior){maior = temp;var x = number}
    }console.log(x);
}