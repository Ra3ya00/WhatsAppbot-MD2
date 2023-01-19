import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `[❗] أدخل طلبا أو أمرا لاستخدام وظيفة CHATGPT\n\n❏ مثال على الطلبات والأوامر\n❏ ${usedPrefix + command} انعكاس على سلسلة Netflix Merlina 2022\n❏ ${usedPrefix + command} التعليمات البرمجية في JS للعبة الورق`
try {
m.reply('*[❗] انتظر لحظة عندما*')
let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch {
throw `*[❗] خطأ ، اعد المحاوله*`
}}
handler.command = ['openai', 'chatgpt', 'ia', 'robot']
export default handler