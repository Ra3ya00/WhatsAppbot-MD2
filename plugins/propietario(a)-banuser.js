let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${mg} الإبلاغ عن شخص ما لحظره\nمثل\n*${usedPrefix + command} @tag*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${mg} الإبلاغ عن شخص ما لحظره\nمثل\n*${usedPrefix + command} @tag*`
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `${eg} تم حظر 😱 المستخدم`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser|banu$/i
handler.group = true
handler.admin = true 
export default handler 
