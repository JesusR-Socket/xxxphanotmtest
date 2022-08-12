/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(chat.chat_type != "private"){
return;
}
else {
function hello(message) {
var greetings = "";
}

Bot.sendMessage("*🙋🏻‍♂️Hi, I'm a bot of the unique XXX PHANTOM community.\n\n⚙️With the help of the bot, you will learn more about the community itself, about the training program, etc.\nYou will understand how you can start earning money using the bot and cryptocurrencies.\n\ n⚠️The bot has the most generous and thoughtful recommendation system in 5 levels with a payout to the network of 90%💰\n\nWithdrawal to a card or your crypto wallet💵\n\nEven top network companies do not have such payments.\n\n👇Press LEARN MORE👇*")


function doTouchOwnLink() {
Bot.sendMessage("*Вы не можете пригласить самого себя ❌*");
}

function doAttracted(channel) {
hello("Referal: " + channel);
}

function doAtractedByUser(refUser) {
hello("");
refUser = Libs.ReferralLib.getAttractedBy().telegramid;
Bot.setProperty("referral:"+user.telegramid,refUser,"string");
}

function doAlreadyAttracted(){
Bot.sendMessage("*Вы уже запустили бота ❌*");
}

var trackOptions = {
onTouchOwnLink: doTouchOwnLink,
onAttracted: doAttracted,
onAtractedByUser: doAtractedByUser,
onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);
Bot.runCommand("check");
}
