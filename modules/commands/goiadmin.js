﻿module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100018806512683") {
    var aid = ["100018806512683"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["chính đang có việc dm mày tag cc t dã chết cụ m cho bố m cứu chết cha ông nội m bh dkm 😏"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }