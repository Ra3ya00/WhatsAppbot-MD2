import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
المشرف
*Wa.me/+213784391714* 
*Wa.me/+213674234020*
*---------------------*
*الايميل*
*ahmedelbakour@iissdontoninotricase.net*
*المالك*
*${asistencia}*

🧡 *هذه هي جهات الاتصال الخاصة بك*`.trim()  
let buttonMessage= {
'document': { url: `${md}` },
'mimetype': `application/${document}`,
'fileName': ` •⊰『 𝒚𝒖𝒏𝒂 𝒃𝒐𝒕 』⊱• `,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': `${md}`,
'mediaType': 2,
'previewType': 'pdf',
'title': 'Super Bot WhatsApp',
'body': wm,
'thumbnail': fs.readFileSync('./media/menus/Menu3.jpg'),
'sourceUrl': yt }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '🎁 تبرع'}, type: 1}, 
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: '🧸 الأوامر '}, type: 1}, 
{buttonId: `${usedPrefix}allmenu`, buttonText: {displayText: 'جميع الأوامر'}, type: 1}],
'headerType': 6 }

await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
await conn.sendKontak(m.chat, global.owner, m, { contextInfo: { externalAdReply :{
    showAdAttribution: true,
//await conn.sendContact(m.chat, `${owner[0][0]}`, m)//, 
//await conn.sendContact(m.chat, conn.getName(owner[0][0]+'@s.whatsapp.net', m)
  
let pp = './media/menus/Menu2.jpg'
let str = `${wm}`
let oficial = 'ان واجهتك مشكلة لا تتردد في الاتصال بي'
await conn.sendHydrated2(m.chat, str, oficial, pp, 'https://github.com/ahmed1p7', 'YUNA-MD', 'https://www.instagram.com/a_e_b_2003', 'انستغرام', [
['☘ قائمة ', '/menu'],
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|مالك|dueño|dueña|propietaria|dueño|creadora|creador)$/i
export default handler 
