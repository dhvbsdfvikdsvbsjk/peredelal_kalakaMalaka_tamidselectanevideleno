let risu = document.querySelector('select');
let rene = document.getElementById("memi");
let lm = document.getElementById("momo");
let iput = document.querySelector('.koe');
document.getElementById('iroha').disabled = true;
let button = document.querySelector('button');
document.getElementById('suzu').disabled = true;
let o = document.querySelector('.aqua');
let d = document.querySelector('.shion');
let t = document.querySelector('.hakos');
let e = iput.value;
let oplata = document.getElementById('iroha');
let yu = document.getElementById("suzu").value;
let dlc;
let dni = document.getElementById("baelz").value;
let vm = document.getElementById("vm").value;
let km = document.getElementById("km").value;
let vo = document.getElementById("vo").value;
let Janu = document.getElementById("ia").value;
let Fevr = document.getElementById("fe").value;
let Mart = document.getElementById("ma").value;
let Apri = document.getElementById("ap").value;
let Mai = document.getElementById("mai").value;
let Inu = document.getElementById("in").value;
let Ilu = document.getElementById("il").value;
let Avg = document.getElementById("av").value;
let Sent = document.getElementById("se").value;
let Oktb = document.getElementById("ok").value;
let Noya = document.getElementById("no").value;
let Dekb = document.getElementById("de").value;
const moo = document.getElementById('baelz');
moo.addEventListener('keydown', function(event) {
	// Разрешаем: backspace, delete, tab и escape
	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
		// Разрешаем: Ctrl+A
		(event.keyCode == 65 && event.ctrlKey === true) ||
		// Разрешаем: home, end, влево, вправо
		(event.keyCode >= 35 && event.keyCode <= 39)) {
		
		// Ничего не делаем
		return;
	} else {
		// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
			event.preventDefault();
		}
	}
});


document.getElementById("memi").onclick = function ()
{
    if(rene.value === (vm.value = 'Весёлый мяч'))
    {
        /*
        document.getElementById("beya").value = 2000;
        */
        dlc = 2000;
        console.log(dlc);
    }
    else if (rene.value == (km.value = 'Каляка-маляка'))
    {
        /*
        document.getElementById("beya").value = 3000;
        */
        dlc = 3000;
        console.log(dlc);
    }
    else if (rene.value === (vo.value = 'Вокал'))
    {
        /*
        document.getElementById("beya").value = 2500;
        */
        dlc = 2500;
        console.log(dlc);
    }
}
/*
document.getElementById("memi").addEventListener('click' , () => {
    let eye = rene.value;
    document.getElementById("memi").innerHTML = eye;
});
*/
document.getElementById("momo").onclick = function () 
{
    if (risu.value === (Janu.value = 'Январь') 
    || risu.value === (Fevr.value = 'Февраль') 
    || risu.value === (Dekb.value = 'Декабрь'))
    {
        document.getElementById("suzu").value = 600;
         yu = 600;
        console.log(risu.value);
    }
    else if(risu.value === (Inu.value = 'Июнь') 
    || risu.value === (Ilu.value = 'Июль') 
    || risu.value === (Avg.value = 'Август'))
    {
        document.getElementById("suzu").value = 300;
        yu = 300;
    }
    else if((risu.value === (Mart.value = 'Март')) 
    || (risu.value === (Apri.value = 'Апрель'))
    || (risu.value === (Mai.value = 'Май'))
    || (risu.value === (Sent.value = 'Сентябрь'))
    || (risu.value === (Oktb.value = 'Октябрь'))
    || (risu.value === (Noya.value = 'Ноябрь')))
    {
        document.getElementById("suzu").value = 400;
        yu = 400;
    }
}

button.onclick = function () {  
    /* 
    document.getElementById("iroha").value = yu + dni;  
    */
    
   if(Math.sign(document.getElementById("baelz").value) === 1){
       if(dlc === 2000 || dlc === 3000 || dlc === 2500)
       {     
        oplata.value = document.getElementById("baelz").value * yu + dlc; 
       }
       else{
        oplata.value = document.getElementById("baelz").value * yu;
       }
    

}else if(Math.sign(document.getElementById("baelz").value) === -1){
    alert("Число меньше нуля");
}else{
    alert("Кол-во дней отсутвует или неверно");
}  
}
document.getElementById("laplase").onclick = function () {
    document.getElementById("iroha").value = "";
    document.getElementById("momo").value = "";
    document.getElementById("suzu").value = "";
    document.getElementById("beya").value = "";
    document.getElementById("baelz").value = "";
    dlc = "";
    console.log(dlc);
}