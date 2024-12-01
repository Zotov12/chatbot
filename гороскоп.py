import telebot
from telebot import types
import random
bot = telebot.TeleBot('7424083547:AAF63GaWuLZBdUZCHrs7a3cuD5hypEvGHWA')
@bot.message_handler(content_types=['привет'])
def get_text_messages(message):
    if message.text == "привет":
        # Пишем приветствие
        bot.send_message(message.from_user.id,"Привет, сейчас я расскажу тебе гороскоп на сегодня.")

first = ["Сегодня — идеальный день для новых начинаний."]
second = ["Но помните, что даже в этом случае нужно не забывать"]
second_add = ["отношения с друзьями и близкими.","работу и деловые"]
third = ["Злые языки могут говорить вам обратное, но сегодня их слушать не нужно.","Знайте, что успех благоволит только настойчивым, поэтому посвятите этот день воспитанию духа.","Даже если вы не сможете уменьшить влияние ретроградного Меркурия, то хотя бы доведите дела до конца.","Не нужно бояться одиноких встреч — сегодня то самое время, когда они значат многое.","Если встретите незнакомца на пути — проявите участие, и тогда эта встреча посулит вам приятные хлопоты."]
#bot.polling(non_stop=True)
keyboard = types.InlineKeyboardMarkup()
 # По очереди готовим текст и обработчик для каждого знака зодиака
key_oven = types.InlineKeyboardButton(text='Овен', callback_data='zodiac')
 # И добавляем кнопку на экран
keyboard.add(key_oven)
key_telec = types.InlineKeyboardButton(text='Телец', callback_data='zodiac')
keyboard.add(key_telec)
key_bliznecy = types.InlineKeyboardButton(text='Близнецы', callback_data='zodiac')
keyboard.add(key_bliznecy)
 # Показываем все кнопки сразу и пишем сообщение о выборе
@bot.message_handler(content_types=['text'])
def get_text_messages(message):
     bot.send_message(message.from_user.id, text='Выбери свой знак зодиака', reply_markup=keyboard)

callback_data = 'zodiac'
# Обработчик нажатий на кнопки
@bot.callback_query_handler(func=lambda call: True)
def callback_worker(call):
   if call.data == "zodiac":
      # Формируем гороскоп
      msg = random.choice(first) + ' ' + random.choice(second) + ' ' + random.choice(second_add) + ' ' + random.choice(third)
      # Отправляем текст в Телеграм
      bot.send_message(call.message.chat.id, msg)
     # Запускаем постоянный опрос бота в Телеграме
bot.polling(none_stop=True, interval=0)


