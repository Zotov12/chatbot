let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
let item = "";
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
btn1.addEventListener("click", function () {
if (tg.MainButton.isVisible) {
tg.MainButton.hide();
}
else {
tg.MainButton.setText("Вывести информацию по овену");
item = "1";
tg.MainButton.show();
}
});
btn2.addEventListener("click", function () {
if (tg.MainButton.isVisible) {
tg.MainButton.hide();
}
else {
tg.MainButton.setText("Вывести информацию по тельцу");
item = "2";
tg.MainButton.show();
}
});
Telegram.WebApp.onEvent("mainButtonClicked", function () {
tg.sendData(item);
});

web_app=WebAppInfo(url="https://zotov12.github.io/chatbot/")
keyboard = ReplyKeyboardMarkup(keyboard=[[KeyboardButton(text="знаки зодиака",web_app=web_app)]],resize_keyboard=True)

DISC = {
'1': 'Благоприятными для Овнов в этот день будут физические упражнения, развлечения и активный отдых. Звезды гарантируют успех в любых творческих начинаниях.Ваши увлечения и хобби дадут возможность получитьновый источник заработка. Если обстоятельства будутскладываться удачно, испытывая покровительствоВенеры, то вы обязательно станете центром вниманиялиц противоположного пола. Жизненный потенциал, ваше личное обаяние и сексуальность пребывают сегодняна самом высоком уровне и продолжают возрастать.Трезво оценивайте действительность и своивозможности. Будьте тверды в отстаивании убеждений ивзглядов. В этот 'День только откровенность и прямотапрепятствуют на пути получения прибыли. Сдерживайтесвои желания, 'постарайтесь сильно не красоваться.',
'2': 'В этот день новые действия и мысли по отношению к материальному благополучию будут у Тельцов результативными. День хорош для активного занятия спортом, а также коллективных мероприятий, где лидирующую позицию будете занимать только вы. Трудности в семейных отношениях и другие разногласия с партнером не исключены сегодня. Укротите свой нрав, постарайтесь не обижаться и забудьте об уязвленном самолюбии. Ваша энергия, находящаяся на самом пике, существенно повлияет на мировоззрение окружающих людей. Ждите неожиданной и приятной новости или выгодного предложения, которые нужно постараться использовать по максимуму исключительно для себя.',}

@dp.message_handler(content_types='web_app_data')
async def buy_process(web_app_message):
await bot.send_message(web_app_message.chat.id,
DISC[f'{web_app_message.web_app_data}'])
