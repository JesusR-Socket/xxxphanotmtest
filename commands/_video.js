/*CMD
  command: /video
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: send video
  keyboard: 
  aliases: 
CMD*/

Bot.setProperty({name: "video2", value: request.video.file_id})
