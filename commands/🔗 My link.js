/*CMD
  command: 🔗 My link
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "");
if (stat == "partner1ban" | stat == "partner2ban" | stat == "partner3ban" | stat == "ban"){
 Bot.runCommand("main_menu");
} else {
let reflink = Libs.ReferralLib.currentUser.getRefLink("XXXPHANTOM_BOT", "Bot");

Bot.sendMessage("🔗 Invite link:\n" + reflink);
}

