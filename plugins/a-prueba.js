/*import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, isBotAdmin }) => { 
let txt = ''
let group = m.chat
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@s.whatsapp.net') + conn.groupInviteCode(jid) && chat.isChats)) 
txt += `\n
π ${await conn.getName(jid)}
β¦ ${await conn.getName(jid)}\n
*CREADOR(A):* ` + `${PhoneNumber ? `${PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')}` : '*Creador no encontrado*'}` == undefined ? '' : '*Creador no encontrado*' + '\n' +
`${PhoneNumber.length > 17 ? `*Creador no encontrado*` : `*Wa.me/${jid.split`@`[0]}*`}\n` + `*Id:* ${metada_gp.id}` + `Nombre:* ${metada_gp.subject}` + `Creacion:* ${DateNumberxd(metada_gp.creation)}` + `Owner:* @${metada_gp.owner.split("@")[0]} + `Enlace:* https://chat.whatsapp.com/${__xd}` +
`${chat?.metadata?.read_only ? 'β *SIN ESTAR AQUΓ | NO*' : 'β *SIGO AQUΓ | YES*'}\n\n`

m.reply(`*${gt} ESTΓ EN ESTOS GRUPOS*
*IS IN THESE GROUPS:*
${txt}`.trim())
//conn.sendHydrated(m.chat, txt, wm, null, 'https://github.com/GataNina-Li/GataBot-MD', 'πππ©ππ½π€π©-ππΏ', null, null, [
//['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '.menu'],
//['πΎπͺππ£π©ππ¨ πππππππ‘ππ¨ | πΌπππ€πͺπ£π©π¨ β', '/cuentasgb']
//], m,)
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(prueba9)$/i
handler.exp = 30
export default handler*/