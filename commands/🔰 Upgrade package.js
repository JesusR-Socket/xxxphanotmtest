/*CMD
  command: 🔰 Upgrade package
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "");
if (stat == "partner3ban"){
 Bot.runCommand("main_menu");
} else {
if (stat == "partner1" | stat == "partner1ban"){
 Bot.sendKeyboard("💎PREMIUM💎,\n💰STANDART💰,\n‼️ How are the packages different?,\n❌ Back","⭕️ Choose which package you want to upgrade to:");
} else if (stat == "partner2" | stat == "partner2ban"){
 Bot.sendKeyboard("💎PREMIUM💎,\n‼️ How are the packages different?,\n❌ Back","⭕️ Choose which package you want to upgrade to:");
}
}
