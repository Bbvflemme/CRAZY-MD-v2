const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
process.env.OWNER_NUMBER = process.env.OWNER_NUMBER || '24165506084'
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Krishna:pss968048@cluster0.4rfuzro.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'crazycvv@gmail.com'
global.github = 'https://github.com/CrazyPrince/CRAZY-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '24165506084'
global.devs = '237620114013';
global.website = 'https://github.com/CrazyPrince/CRAZY-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/984e15c49561a5dd9d112.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'Crazy Bot' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'CRAZY MD' : process.env.OWNER_NAME,"destruction"
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,"{"noiseKey":{"private":{"type":"Buffer","data":"2GCHBbQA7VAtm13L1TOxvWlwYHdN2W1krfI33LePlEE="},"public":{"type":"Buffer","data":"8u1Y5Jw/sRz36voCfd2M9/f0M9jMPR7gUxrCtECF9CU="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"8DE+pPkUv86C87NVosWyeGMM0HBZ0Nzzvy5aK+EbyXE="},"public":{"type":"Buffer","data":"fVmc5bB1bJN9OSxkIol8uK9c/K7nIxN0Bj//uiqcjGQ="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"yGiYzUr0SPwJRiFcc4qVZLuLb/Vwnqx/+Z2GCghVH0I="},"public":{"type":"Buffer","data":"FysMPu1h+eGvQURiUz6GI6Hl6d5R/iYn6WH0grSs0g8="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"4GCZw70milsS1iJxLGon14ddf0HEI9cVGI/syljWNHs="},"public":{"type":"Buffer","data":"NJAlKrbuii4UL87KVtY8o8tv0+r3q68NU+wt0pxpdAM="}},"signature":{"type":"Buffer","data":"GQX8dulW+V+emBUIGOMSK7a01DV+0+hJ3izztFROC/652CdSsZfaE1Qm34TK8NYkQiiVNANCDl460r1VwDFuig=="},"keyId":1},"registrationId":167,"advSecretKey":"7we/tTaJ0ZMCIS9QJgh4lhPByWBrbioigDLU11KOD+E=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"j2kio3MHRg-HMd-oMGwrKA","phoneId":"9937363e-4f32-4078-8c20-ff59d8196589","identityId":{"type":"Buffer","data":"GLEyz8kJD0qgTBUy9nbFZu0wctk="},"registered":true,"backupToken":{"type":"Buffer","data":"hgMTRUshBOxgmiW2lYApJwrm0Tc="},"registration":{},"pairingCode":"NTA5FZ69","me":{"id":"24105858972:7@s.whatsapp.net","name":"ᵈᵉˢᵗʳᵘᶜᵗᵒʳ𝐷𝛯𝑆𝑇𝑅𝑈𝐶𝑇𝛩𝑅"},"account":{"details":"COSRt/0BEITTqbUGGAEgACgA","accountSignatureKey":"phbK2syz+J4fQJDCBYEuCQx+8HNKQZJ95rI8FDLBnBU=","accountSignature":"9cfCGPiD7EHVXXVLJw7aju5STS5PCGJF79shY4r8C67C15UMHYbp44BQh+p2QpH56zd90aRBwJGymn/YAqF1BA==","deviceSignature":"IrHy7bA/MNhZHude4w1BB0C3fk1qT9QsKjO1AIJxYF4OZeuyLTgoHbuQk86kWxEQWLOYl6i/pEb3KD+nINkYhQ=="},"signalIdentities":[{"identifier":{"name":"24105858972:7@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BaYWytrMs/ieH0CQwgWBLgkMfvBzSkGSfeayPBQywZwV"}}],"platform":"smba","lastAccountSyncTimestamp":1722444179,"myAppStateKeyId":"AAAAACho"}"
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'CRAZY_MD' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'Secktor-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,"."
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hey bruh, I,m Crazy  Md...Alive Now...' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'CRAZY',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE,
  LG: process.env.LG === undefined ? 'false' : process.env.LG,
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
