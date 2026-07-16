import {characters} from "./data/characters.js";
import {houses} from "./data/houses.js";
import {rooms} from "./data/rooms.js";


let player={

name:"",

gender:"girl",

hair:"Коричневе",

style:"Червоне",

house:null

};



menu();



function menu(){


game.innerHTML=`

<div class="card">

<h1>
☀️ Літо і Дитинство
</h1>


<p>
Мультиплеєрний літній симулятор міста
</p>


<button onclick="create()">
🎮 Почати
</button>


</div>

`;


}


window.create=function(){


game.innerHTML=`

<div class="card">


<h2>
👤 Створення героя
</h2>


<input id="name"
placeholder="Ім'я">


<br><br>


<button onclick="gender('girl')">
👧 Дівчинка
</button>


<button onclick="gender('boy')">
👦 Хлопчик
</button>


<h2>
${player.gender==="girl"?"👗":"👕"} Одяг
</h2>


<div id="colors"></div>


<h2>
💇 Зачіска
</h2>


<div id="hair"></div>



<div class="avatar">
${player.gender==="girl"?"👧":"👦"}
</div>



<button onclick="chooseHouse()">
Далі ➡️
</button>


</div>

`;



loadOptions();


}



window.gender=function(g){

player.gender=g;

create();

}



function loadOptions(){


colors.innerHTML="";

characters.colors.forEach(c=>{

colors.innerHTML+=`

<button onclick="player.style='${c}'">

${c}

</button>

`;

});



hair.innerHTML="";


characters.hair.forEach(h=>{


hair.innerHTML+=`

<button onclick="player.hair='${h}'">

${h}

</button>


`;

});


}



window.chooseHouse=function(){


player.name=document.querySelector("#name").value;


game.innerHTML=`

<div class="card">


<h2>
🏡 Вибери будинок
</h2>


<div class="houses">


${houses.map((h,i)=>`

<button class="house"
onclick="selectHouse(${i})">

${h}

</button>


`).join("")}


</div>


<button onclick="roomsPage()">
Створити кімнату
</button>


</div>

`;

}


window.selectHouse=function(i){

player.house=i;

alert("Будинок вибрано!");

}



window.roomsPage=function(){


game.innerHTML=`

<div class="card">

<h2>
🏠 Кімнати
</h2>


<input placeholder="Назва кімнати">


<br>


<button>
Створити
</button>


<h3>
Доступні кімнати:
</h3>


${rooms.map(r=>`

<p>
🌞 ${r}
</p>

`).join("")}


</div>

`;

}
