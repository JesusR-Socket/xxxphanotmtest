/*CMD
  command: 🔋 Already paid
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

Bot.sendKeyboard("🔮ПРЕМИУМ ПОЖИЗНЕННЫЙ🔮,\n💎ПРЕМИУМ💎,\n💰STANDART💰,\n⚔️НАЧИНАЮЩИЙ⚔️,\n❌ Вернуться,‼️ Чем отличаются пакеты","⭕️ Выберите пакет который Вы оплатили:");
User.setProperty("buy", 7);
