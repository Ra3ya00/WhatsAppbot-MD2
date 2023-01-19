/*let toM = (a) => '@' + a.split('@')[0]

function handler(m, { groupMetadata }) {
  if (m.command === 'ugly' || m.command === 'formarparejas' || m.command === 'الاغبا') {
    let ps = groupMetadata.participants.map((v) => v.id)
    let a = ps.getRandom()
    let b
    do {
      b = ps.getRandom()
    } while (b === a)
    m.reply(
      `*أبشع الناس في المجموعة:*\n*${toM(a)}  و ${toM(b)}*`,
      null,
      {
        mentions: [a, b],
      }
    )
  } else if (m.command === 'اجمل') {
    let ps = groupMetadata.participants.map((v) => v.id)
    let a = ps.getRandom()
    let b
    do {
      b = ps.getRandom()
    } while (b === a)
    m.reply(
      `*أجمل شخصين في قروب* :\n*${toM(a)}  و ${toM(b)}*`,
      null,
      {
        mentions: [a, b],
      }
    )
  }
}

handler.help = ['ugly', 'الاغبا', 'اجمل']
handler.tags = ['main', 'fun']
handler.command = ['ugly', 'formarparejas', 'الاغبا', 'اجمل']
handler.group = true
*/