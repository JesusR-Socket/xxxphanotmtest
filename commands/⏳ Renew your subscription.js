/*CMD
  command: ⏳ Renew your subscription
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("⚠️Renewing a subscription for 30 days costs *50* USDT\n\nYou can upgrade your package, thus it will be considered as a subscription renewal.")

Bot.sendKeyboard("💳 Write off balance,💸 Pay,\n❌ Back","⭕️ Choose payment method:")
