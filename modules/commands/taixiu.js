module.exports.config = {
    name: "taixiu",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "ChÆ¡i tĂ i xá»‰u",
    commandCategory: "Giáº£i trĂ­",
    usages: "[tĂ i/xá»‰u]",
   on ({
    ];
)   const fs = global.nodemodule["fs-le['axios'];
    const fs = global.nodemodule["fs-le['axios'];
    const fs = global.nodemodule["fs-le['axios'];
    const fs = global.nodemodule["fs-extra"];
    const dataMoney = await Currencies.getData(event.senderID);
    const moneyUser = dataMoney.money
    if (!args[0]) {
        return api.sendMessage("Báº¡n pháº£i cÆ°á»£c tĂ i hoáº·c xá»‰u...", event.threadID, event.messageID)
    }
    const choose = args[0]
    if (choose != 'tĂ i' && choose != 'xá»‰u'tĂ i hoáº·c xá».sendMessage("Chá»‰ Ä‘áº·t cÆ°á»£c tĂ i hoáº·c xá»‰u!", event.threadID, event.messageID)
    }
    const money = args[1]
    if (money < 50 || isNaN(money)) return api.sendMessage("Má»©c Ä‘áº·t cÆ°á»£c cá»§a báº¡n khĂ´ng phĂ¹ há»£p hoáº·c dÆ°á»›i 50$!!!", event.thr) api.sendMessage(`â¡ï¸Sá» if (moneyUser < money) api.sendMessage(`â¡ï¸Sá»‘ dÆ° báº¡n khĂ´ng Ä‘á»§ ${money}$ Ä‘á»ƒ cĂ³ thá»ƒ chÆ¡i`, event.threfo/v1/taixiu.php?bet=t%ios.get(`https://simsimi.info/v1/taixiu.php?bet=t%ios.get(`https://simsimi.info/v1/taixiu.php?bet=t%C3%A0i`);
        var data = res.data;
   me = var ketqua = data.ketqua
        var ketquaGame = ketqua.slice(0, 3)
        if (choose == ketquaGame) {
            pathus = __dirname + `/cache/${event.senderID}.png`
            var img = (await axios.get(`${data.image}`, {
                responseType: "arrayb`/cache/${event.senderID}.png`
        _dirname + `/cache/${event.senderID}.png`
        _dirname + `/cache/${event.senderID}.png`
        _dirname + `/cache/${event.senderID}.png`
        _dirname + `/cache/${event.senderID}.png`
        _dirname + `/cache/${event.senderID}.png`
        _dirname + `/cache/${event.senderID}.png`
        _dirname + `/cache/${event.senderID}.png`
        _dirname +  = (await axios.senderID}.png`
            var img   (await axios.get(`${data.image}`, {
                responseType: "arraybufferge}`, {
                responseType: "arraybufferge}`, {
                responseType: "arraybufferge}`, {
                responseType: "arraybufferge}`, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(pathus, Buffer.from(img, "ey(event.senderID, parseInt(money))
          eMoney(event.senderID, parseInt(money))
            return api.sendMessage({
                body: `Báº¡n Ä‘Ă£ thua\nMáº¥t: ${money}$\nKáº¿t quáº£: ${ketqua.charAt(0).toUpperCase() + ketqua.slice(1)}`,
                attachment: fs.createReadStream(__dirname + `/cache/${event.senderID}.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${event.senderID}.png`), event.messageID)
        }
    } catch {
        return api.sendMessage('ÄĂ£ cĂ³ lá»—i xáº£y ra, vui lĂ²ng thá»­ láº¡i sau!!!', event.threadID, event.messageID);
    }
}
  }