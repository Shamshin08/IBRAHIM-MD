const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' }) 


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ngoyaibraah@gmail.com"
global.location="Bungoma,Kenya."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/ibrahimaitech/IBRAHIM-MD/tree/main";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/JE3gJsV15ly9ViU6lgw0GD";
global.website=process.env.GURL || "https://www.youtube.com/@ibrahimmdgpt" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fdeb9bdbfae04a6b62dd4.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349153355436";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/fdeb9bdbfae04a6b62dd4.jpg",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "25471077266,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://ibrahim-tech-1-4a7321f212d3.herokuapp.com/";

module.exports = {

  menu: process.env.MENU || "A17_MD", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©ⁱᵇʳᵃʰⁱᵐ ᵗᵉᶜʰ💥90✴" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Ibrahim",
  packname: process.env.PACK_NAME || "👑",
  botname : process.env.BOT_NAME  || " 𝗜𝗕𝗥𝗔𝗛𝗜𝗠-ᵐᵈ",
  ownername:process.env.OWNER_NAME|| "It'x 𝗜𝗕𝗥𝗔𝗛𝗜𝗠",

  sessionName:process.env.SESSION_ID || "PANTHER;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0sxWkx0enNVTGx2NzN5dElxQ2pOWjlxNU9iZVdLQ01FYXJVTDdNUk1Hcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVc5RFAzMjBic29ReDRsYmF6TVc2Z3RNS3dGVGlZdytqbEVUdnNjSFhTdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQ29RczRvS2tCZ2FBeWFFcC9zNkI5b2RLNXlDTGd5dWpOQ09tQlhLSEUwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxSTQ0MFZGMFdSSjV4dlFYMHAveFAzb29mcC9JejhyV3FoVnF1cVFzandjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFPTUdtVElJSmlLRTJGdzR6SHAzck9FQldsaXpBWjNmY05JM29JQWNRRmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkkrTW9Nc2pJZldZWXg2OEs1OGtHb1dHT1NRWVpVeUp4VzMwY2ZncUdLU3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0pjS3RORUU1Y0Yza3BjTHpiK1p6Nk5kcGh2M2tQMGUxZ2I1ZWRWK1NsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiampkR1dMdzA1MDZDc08vSDlORUxvaGxLallPelZ5ZWpxWlJBWVNBYWNEaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkV3VFNlaHAzN3J3S0pDb2NrT3hHNG56eFU3L21wejZWMTcvbWRnQTRsU0pWdkdKc2R6bWRpZVNKN0t4V3VJQzlHVk5aWWgxT3grYVo4OUdOeFBMTGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUwLCJhZHZTZWNyZXRLZXkiOiJVdm9YbEJuWTFmck5jcFlFNHFCd2RwclNxMmRyTDRYQW51WHJYT3V0UXNRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPTlF0U2g1TVMwaWtJTFEzVkJhdjJ3IiwicGhvbmVJZCI6ImRhZTI3MTgxLWRiZWMtNDAwOC05NDBkLWJjYWNjNTYyMzZmNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvRHhYSVBsMEhIS1hzMzNMN05kdnI0M3k5VFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFRFaUJqQWRyWDI2TTlTVVExc0tNWVRsWUhjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjY5OVJSN1JBIiwibWUiOnsiaWQiOiIyMzQ5MTUzMzU1NDM2OjExQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNoYW1zaGluIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNcXFtdndFRUpiWnI3RUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJUZkhBcURqRWMyVysyaW9zWENjbGVHR09VTlY5bWhaYzRqK25CeHU3RW1VPSIsImFjY291bnRTaWduYXR1cmUiOiI4L2RDSHg0aUlPYkFma3ZSMU1YUUpIbFp6YUF1bWZFUkd0eXBjM0hLVFdPdUpRTUdkaEd3enJIWmV3UytWTk0zTnAvSThyNk10aTFsaGhJTzkrTTVCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYjNJNVo1eGMxSkFuRFoxM2pMUWIvRGt5a3FVNEJpdkVDaGltMVd4cHdnYjd4MzBYWit3dS9JdFZpdnFGY0paMXBMSS9VZUpoL3gvdUFCejUyeThzZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTUzMzU1NDM2OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlUzeHdLZzR4SE5sdnRvcUxGd25KWGhoamxEVmZab1dYT0kvcHdjYnV4SmwifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTQxNTQ2NTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSkppIn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "ADAM",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
