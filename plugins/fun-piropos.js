/* By https://github.com/DIEGO-OFC/DORRAT-BOT-MD */
let handler  = async (m, { conn, usedPrefix, command }) => {
conn.sendHydrated(m.chat, `━━━━━[ *اكتب* ]━━━━⬣\n┃ *_${pickRandom(global.piropo)}_*\n━━━━━━[ ${vs} ]━━━━━⬣`, wm, null, md, '════ •『 𝒚𝒖𝒏𝒂 𝒃𝒐𝒕 』• ════', null, null, [
['تب سريع', `${usedPrefix}يي`]
], m,)}

handler.help = ['يي']
handler.tags = ['fun']
handler.command = /^يي/i
handler.fail = null
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
global.piropo = ["فيجيتا","غوكو","شيسوي","ايتاتشي","ناروتو","كيلوا","لوفي زورو سانجي","زاراكي ايزن توسين","ناروتو ساسكي كاكاشي","مادارا اوبيتو","هاشيراما توبيراما","انزاي دازاي","هاغومورو","سوكونا يوجي","كاكاشي هاتاكي","فوغاكو اوتشيها","ناروتو اوزوماكي","غارب لوفي ايس سابو","اكاينو اوكيجي كيزارو","كيلوا غون","اوميني","سيلفا زينو نيترو","استا يامي","كيسكي يوروتشي ايتشيغو","ساروتوبي دانزو","فوجيتورا","نامي روبين","هيماواري هيناتا","ستارك جريمجو نيل","الوكا","شينو كيبا","روك لي مايت غاي","ايتاشي ساسكي","كونان ناغاتو ياهيكو","جيرايا تسونادي","ساي اينو","شينرا","ثوركيل ثورفين ثورز","اشيلاد","لاو ميهوك زورو","تيتش ادوارد","ناكا اوتشيها","هيروزين ساروتوبي","مونكي دي لوفي","كارين","موريا","اشورا هامورا","انيوشا كاجومي","ديدارا ساسوري","روجر رايلي","تانجيرو نيزيكو","زينيتسو اينوسكي","زيك ايرين","ميكاسا اني","ليفاي اكيرمان","ايروين مايكي","مايكي دراكن","هيسوكا","ارمين","هاتسوني ميكو","كورو","اوراهارا كيسكي","شينوبو كاناو","كيسامي اكاشي","كوزان"]