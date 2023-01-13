export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('bots') || m.text.includes('jadibot')) return !0
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
if (bot.antiPrivate && !isOwner && !isROwner) {
await m.reply(`*[❗] مرحبا @${m.sender.split`@`[0]}*, يحظر التحدث إلى الروبوت الخاص \nفقط إذا كان يريد أن يجعلك روبوتا.\nارسل الأمر :  .serbot\nاذا تم حظرك عن طريق الخطء المرجو التكلم مع المالك: https://wa.me/+393271166550?text=مرحبا\n\n*انضم إلى المجموعة لاستخدام يونا بوت ${nn}*`, false, { mentions: [m.sender] })
handler.group = true
return !1
}}