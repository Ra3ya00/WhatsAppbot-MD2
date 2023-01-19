let name = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = xpRange(user.level, global.multiplier)
    let attachment = new MessageAttachment(images[user.level]);
    let message = `
╭━━━[ *დمستوىდ* ]━━━━⬣
┃დ *الاسم:* ${name} დ
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃დ *مستوى:* *${user.level}* დ
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃დ *رتبة:* ${user.role} დ
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃დ *اكس بي:* *${user.exp - min}/${xp}* დ
╰━━━〔 *${vs}* 〕━━━━━⬣

*تحتاج إلى ${max - user.exp} XP للارتقاء إلى المستوى التالي*
`.trim()
    m.channel.send(attachment, message);
}
