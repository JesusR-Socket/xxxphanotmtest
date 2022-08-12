/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");
if (stat == "partner1ban" | stat == "partner2ban"){
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balance4 = Libs.ResourcesLib.userRes("balance4");
var balance5 = Libs.ResourcesLib.userRes("balance5");
var balanceCount = Libs.ResourcesLib.userRes("count");
var balanceCount2 = Libs.ResourcesLib.userRes("count2");
var balanceCount3 = Libs.ResourcesLib.userRes("count3");
var balanceCount4 = Libs.ResourcesLib.userRes("count4");
var balanceCount5 = Libs.ResourcesLib.userRes("count5");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");

Bot.sendKeyboard("⏳ Renew your subscription,🔰 Upgrade your package,\n🛠 Tech. Support", "❌ Renew your subscription to continue ❌")
} else if (stat == "partner3ban"){
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balance4 = Libs.ResourcesLib.userRes("balance4");
var balance5 = Libs.ResourcesLib.userRes("balance5");
var balanceCount = Libs.ResourcesLib.userRes("count");
var balanceCount2 = Libs.ResourcesLib.userRes("count2");
var balanceCount3 = Libs.ResourcesLib.userRes("count3");
var balanceCount4 = Libs.ResourcesLib.userRes("count4");
var balanceCount5 = Libs.ResourcesLib.userRes("count5");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
Bot.sendKeyboard("⏳ Renew your subscription,🛠 Tech. Support", "❌ Renew your subscription to continue ❌")
} else if (stat == "partner1" | stat == "partner2"){
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balance4 = Libs.ResourcesLib.userRes("balance4");
var balance5 = Libs.ResourcesLib.userRes("balance5");
var balanceCount = Libs.ResourcesLib.userRes("count");
var balanceCount2 = Libs.ResourcesLib.userRes("count2");
var balanceCount3 = Libs.ResourcesLib.userRes("count3");
var balanceCount4 = Libs.ResourcesLib.userRes("count4");
var balanceCount5 = Libs.ResourcesLib.userRes("count5");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");

Bot.sendKeyboard("🔗 My link,💳 Balance\n👫 Partners,🛠 Tech. Support\n⏳ Renew your subscription,🔰 Upgrade package", "🌀Learn, invite and earn🌀")
} else if (stat == "partner3"){
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balance4 = Libs.ResourcesLib.userRes("balance4");
var balance5 = Libs.ResourcesLib.userRes("balance5");
var balanceCount = Libs.ResourcesLib.userRes("count");
var balanceCount2 = Libs.ResourcesLib.userRes("count2");
var balanceCount3 = Libs.ResourcesLib.userRes("count3");
var balanceCount4 = Libs.ResourcesLib.userRes("count4");
var balanceCount5 = Libs.ResourcesLib.userRes("count5");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");

Bot.sendKeyboard("🔗 My link,💳 Balance\n👫 Partners,🛠 Tech. Support\n⏳ Renew your subscription", "🌀Learn, invite and earn🌀")
} else if (stat=="user" | stat =="member"){
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");

Bot.sendKeyboard("🔋 Already paid,💸 I want to pay\n🧑🏻‍💻 Learn more", "🌀Learn, invite and earn🌀")
} else if (stat=="ban"){
var balance = Libs.ResourcesLib.userRes("balance");
var balance2 = Libs.ResourcesLib.userRes("balance2");
var balance3 = Libs.ResourcesLib.userRes("balance3");
var balance4 = Libs.ResourcesLib.userRes("balance4");
var balance5 = Libs.ResourcesLib.userRes("balance5");
var balanceCount = Libs.ResourcesLib.userRes("count");
var balanceCount2 = Libs.ResourcesLib.userRes("count2");
var balanceCount3 = Libs.ResourcesLib.userRes("count3");
var balanceCount4 = Libs.ResourcesLib.userRes("count4");
var balanceCount5 = Libs.ResourcesLib.userRes("count5");
var balanceAll = Libs.ResourcesLib.userRes("balanceAll");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");

Bot.sendKeyboard("🧑🏻‍💻 Узнать подробнее", "🌀Learn, invite and earn🌀")
}
if (user=="left"){
Bot.runCommand("/start");
}
