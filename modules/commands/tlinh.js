﻿const fs = require("fs");
module.exports.config = {
name: "tlinh",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "tlinh=)",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat linhad",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tlinh")==0 || (event.body.indexOf("tlinh")==0)) {
		var msg = {
				body: " admin linh !",
				attachment: fs.createReadStream(__dirname + `/noprefix/thuylinh.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
