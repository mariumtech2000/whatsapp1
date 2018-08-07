let whatsapp = [
{
	name:"Marium",
	number:"0022643233",
	email:"mmmm@gmail.com",
	status:"Life is born to live...Not to Survive.. ",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	messageCheck: "sent",
	img:"dp1.jpg"
},
{
	name:"Zakia",
	number:"009222033",
	email:"mmmm@gmail.com",
	status:"Dont be so quick to judge me..",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	messageCheck: "waiting",
	img:"dp4.jpg"
},
{
	name:"Fatima",
	number:"060220233",
	email:"mmmm@gmail.com",
	status:"Silence is the most powerful scream ",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	messageCheck: "waiting",
	img:"dp5.jpg"
},
{
	name:"Samina",
	number:"002322633",
	email:"mmmm@gmail.com",
	status:"Life is Beautiful",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	messageCheck: "seen",
	img:"dp6.jpg"
},
{

	name:"Neha",
	number:"00422523356",
	email:"mmmm@gmail.com",
	status:"Attitude is Everything",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	messageCheck: "sent",
	img:"dp8.jpg"
	
},
{
	name:"Hadia",
	number:"00225323353",
	email:"mmmm@gmail.com",
	status:"I dont trust Words,I trust Actions.",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	messageCheck: "sent",
	img:"dp9.jpg"
},
{
	name:"Maria",
	number:"0022643233",
	email:"mmmm@gmail.com",
	status:"Sometimes you win,Sometimes You learn...",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	messageCheck: "sent",
	img:"dp7.jpg"
},
{

	name:"kiran",
	number:"00222468823",
	email:"mmmm@gmail.com",
	status:"I am Unique",
	lastTime:"yesterday",
	messageCheck: "seen",
	lastMsg:"blah blah blah blah blah....",
	img:"dp10.jpg"
},
{
	name:"Urwa",
	number:"0022643233",
	email:"mmmm@gmail.com",
	status:"True Friends dont judge eachOther... ",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	messageCheck: "sent",
	img:"dp11.jpg"
},
{
	name:"Tehreem",
	number:"0022643233",
	email:"mmmm@gmail.com",
	status:"You still make me smile.",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	messageCheck: "sent",
	img:"dp12.jpg"
},
{
	name:"Insia",
	number:"0022643233",
	email:"mmmm@gmail.com",
	status:"Things ends but memories last forever.",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	messageCheck: "sent",
	img:"dp13.jpg"
},
{
	name:"Alisha",
	number:"00922303",
	email:"mmmm@gmail.com",
	status:"I am online Always",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	messageCheck: "sent",
	img:"dp2.jpg"

},
{
	name:"Saira",
	number:"002822933",
	email:"mmmm@gmail.com",
	status:"I am good enough person to forgive You",
	lastTime:"yesterday",
	lastMsg:"blah blah blah blah blah....",
	messageCheck: "seen",
	img:"dp3.jpg"
}
];


function intilizer(){
	const contactlistEL = document.querySelector(".all");
	for (let i = 0; i < whatsapp.length; i++) {

		let icon;
		if (whatsapp[i].messageCheck ==='seen') {
			icon="check-double";
		}else if (whatsapp[i].messageCheck === 'sent') {
			icon ="check";
		} else {
			icon = "clock";
		}

		contactlistEL.innerHTML += `

		<section class="person-item" onclick="changeDetails(${i})">
		<div class="person-img" style="background-image: url(images/${whatsapp[i].img});"></div>
		<div class="detail">
		<div class="centered ">
		<p class="name">${whatsapp[i].name}</p>

		<div class="icon1">
		<i class="fas fa-${icon}"></i>
		<p class="msg">${whatsapp[i].lastMsg}</p>
		</div>
		</div>
		<div>
		<p class="time">${whatsapp[i].lastTime}</p>
		</div>
		</div>
		</section>


		`
	}
}

function changeDetails(indexNumb) {
	document.querySelector("#show-img").style.backgroundImage = `url(images/${whatsapp[indexNumb].img})`;
	document.querySelector("#name").innerHTML = whatsapp[indexNumb].name;
	document.querySelector("#numb").innerHTML =`<i class="fas fa-phone" style="color: green; font-size:30px;margin-right: 13px"></i> ${whatsapp[indexNumb].number}`;
	document.querySelector("#email").innerHTML =`<i class="far fa-envelope" style="color: red; font-size:30px;margin-right: 13px"></i>${whatsapp[indexNumb].email}`;
	document.querySelector(".status").innerHTML = whatsapp[indexNumb].status;
}



