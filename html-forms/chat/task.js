/* Первыйвариант без прокурти и автоматического ответа
const chatWidget = document.querySelector('.chat-widget');
const input = document.querySelector('.chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
let messageUser;

const date = new Date();
let time = date.getHours() + ':' + date.getMinutes();

const robotMessages = [
    'Кто тут?',
    'Где ваша совесть?',
    'Мы ничего не будем вам продавать!',
    'К сожалению, все операторы заняты. Не пишите нам больше!',
    'Добрый день! До свидания!',
    'Вы не купили ни одного товара для того, что бы так разговаривать!'
]

const index = () => {
    return Math.floor(Math.random() * robotMessages.length);
}

const showMessage = function(time, message, classUser) {
    messages.innerHTML += `
        <div class="message ${classUser}">
            <div class="message__time">${time}</div>
            <div class="message__text">${message}</div>
        </div>
    `;
}

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

input.addEventListener('input', () => {
    messageUser = input.value;
});

input.addEventListener('keyup', (e) => {
    e.preventDefault();
    if(e.key === 'Enter' && input.value !== '') {
    showMessage(time, input.value, 'message_client');  
    input.value = '';
    setTimeout(() => {
      showMessage(time, robotMessages[index()]);
    }, 1000);
  } 
});
*/
const sideOnClick = e => {
	document
		.getElementsByClassName("chat-widget")[0]
		.classList.add("chat-widget_active");

	botMessages = [
    "Кто тут?",
    "Мы ничего не будем вам продавать",
    "Где ваша совесть?",
    "Вы не купили ни одного товара, чтобы так с нами разговаривать!",
    "К сожалению, все операторы сейчас заняты. Не пишите нам больше!",
  	"Я уже отвечал на этот вопрос!",
	"Добрый день! До свидания!",
	"Учись правильно задавать вопросы!",
	];

	const messages = document.querySelector(".chat-widget__messages");
	const input = document.querySelector(".chat-widget__input");

	const pushMessage = (msg, client) => {
		let d = new Date();
		let localTime = d.toLocaleTimeString("ru-RU", {
			timeStyle: "short"
		});
		messages.innerHTML += `
            <div class="message ${client ? "message_client" : ""}">
              <div class="message__time">${localTime}</div>
              <div class="message__text">
                ${msg}
              </div>
            </div>
          `;
		if (client) input.value = "";

		messages.parentElement.scrollTo({
			top: 10000000,
			behavior: 'smooth'
		});
	};

	const pushRandomBotMessage = () => {
		setTimeout(() => {
			let randomIndex = Math.round(Math.random() * (botMessages.length - 1));
			pushMessage(botMessages[randomIndex]);
		}, 1000);
	}

	let timerID = 0;

	const inputOnKeyPressed = e => {
		if (timerID) clearTimeout(timerID);
		if (e.keyCode == 13) {
			if (!input.value == "") {
				pushMessage(input.value, true);
				pushRandomBotMessage();
			}
		}
		timerID = setTimeout(() => {
			pushMessage("Чего молчишь? Уснул?")
		}, 30000);
	};

	setTimeout(() => {
		pushMessage("Чё надо?")
	}, 1000);

	input.addEventListener("keydown", inputOnKeyPressed, false);
};

document
	.getElementsByClassName("chat-widget__side")[0]
	.addEventListener("click", sideOnClick, false);

