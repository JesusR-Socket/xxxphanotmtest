/*CMD
  command: 💰STANDART💰
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "");

if (User.getProperty("buy") == 7){
 User.setProperty("buy", 2);
 Bot.sendKeyboard("✅ I paid,\n❌ Изменить способ оплаты", "Нажмите ✅ I paid для дальнейших действий\n☎️ По всем вопросам пишите: @XXXPHANTOM_SUPPORT");
}else {
Bot.sendKeyboard("💳 Card,💎 USDT,\n❌ Back", "⭕️ Choose payment method:");
if (stat == "partner1" | stat == "partner1ban"){
 User.setProperty("buy", 4);
} else {
 User.setProperty("buy", 2);
}
}
