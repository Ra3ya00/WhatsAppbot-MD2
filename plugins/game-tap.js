import fs from 'fs';

const timeout = 60000;
const poin = 500;

let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {};
    let id = m.chat;
    if (id in conn.tekateki) {
        conn.reply(m.chat, 'لا تزال هناك ألغاز لم تتم الإجابة عليها في هذه الدردشة ', conn.tekateki[id][0]);
        throw false;
    }
    let tekateki = JSON.parse(fs.readFileSync(`./src/game/acertij.json`));
    let json = tekateki[Math.floor(Math.random() * tekateki.length)];
    let _clue = json.جواب;
    let clue = _clue.replace(/[A-Za-z]/g, '_');
    let caption = `
ⷮ *${json.سوال}*

*• الوقت:* ${(timeout / 1000).toFixed(2)} ثانيه
*• بونو:* +${poin} Exp
`.trim();
    
    // Send the riddle image along with the caption
    conn.tekateki[id] = [
        await conn.reply(m.chat, caption, {
            type: 'photo',
            media: json.image
        }),
        json, poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.reply(m.chat, `انتهى الوقت !\n*جواب:* ${json.جواب}`, conn.tekateki[id][0]);
            delete conn.tekateki[id];
        }, timeout)
    ];
};

handler.help = ['acertij'];
handler.tags = ['game'];
handler.command = /^(acertij|كت|بب|adivinanza|tekateki)$/i

export default handler