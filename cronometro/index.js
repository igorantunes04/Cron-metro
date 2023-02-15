let segundos = 00;
let mili = 00;
let minutos = 0;
let Interval;

//Pegando os id's
let appendMinutos = document.getElementById('min');
let appendSegundos = document.getElementById('segundos');
let appendMili = document.getElementById('mili');
let iniciar = document.getElementById('iniciar');
let parar = document.getElementById('parar');
let resetar = document.getElementById('resetar');

//Iniciar a cronômetragem...
    iniciar.onclick = function(){
        //A função será inicializada a cada 
	    Interval = setInterval(startTimer, 10);       
    }

//Parar a cronômetragem...
    parar.onclick =  function(){
        //ClearInterval desativa a função. Por isso, a variável "Interval", que recebeu a função startTime, quando for apertada pelo botão parar, será desativada.
        clearInterval(Interval);
    }

//Resetar a cronômetragem...
    resetar.onclick = function(){
        clearInterval(Interval);
        segundos = "0"; 
        mili = "0";
        appendSegundos.innerHTML = "0" + segundos +" :"; 
        appendMili.innerHTML = " 0" + mili; 
        appendMinutos.innerHTML = " "; 
        /*Colocou para as variáveis que pegaram o "id" de cada tag
        para receber essas variáveis. 
        Aquela parte do HTML, receberá essas váriaveis.
        Então, caso o botão reset for acionado, os segundos e os milis-
        segundos, receberão 00. No caso, resetado.
        */
    }
    
//Função para inicializar a cronômetragem...
    function startTimer(){
        //No caso, mili irá aumentar em 1, 2, 3, 4..
        mili++ 

        if(mili <= 9){
            appendMili.innerHTML = "0" + mili;
        /*Aqui é uma condição criada para que, quando os milissegundos
        sejam menores ou iguais a 9, ter o 0 na frente. Ex: 01, 02...09*/
        }

        if(mili > 9){
            appendMili.innerHTML = mili; 
            
        }

        if(mili > 99){
            /*Toda vez que os mili passar de 99, segundos ganha +1. E, portanto,mili terão que ser reiniciados... */ 
            segundos++    
            appendSegundos.innerHTML = "0" + segundos +" :";
            
            /*Toda vez que os mili passar de 99, ele será resetado. Por isso, receberá um "0"(string) e, em seguida, os mili em valor de 0. Mas claro que ele será rodado, por causa do mili++ */
            mili = 0;
            appendMili.innerHTML = "0" + mili; 
        }

        if(segundos > 9){
            appendSegundos.innerHTML = segundos +" :"; 
        }

        if(segundos > 59){
            segundos = 0;
            appendSegundos.innerHTML = "0" +segundos +" :";

            minutos++;
            appendMinutos.innerHTML = minutos +" :";
           
        }
    }
