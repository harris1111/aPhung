module.exports.config = {
	name: "tikvideo",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "KhánhMilo",
	description: "Tải video tik tok xóa logo",
	commandCategory: "media",
	usages: "[url]",
	cooldowns: 10,
	dependencies: {
		"tiktok-scraper": "",
		"axios": "",
		"fs-extra": ""
	}
	
};

const _0x3a1d=['.mp4','threadID','join','name','createReadStream','tiktok-scraper','\x27https://www.tiktok.com/@','item','3hcjhJR','messageID','getVideoMeta','617137feuBrB','1XZkHUo','GET','utf-8','2082412fd5msh902a44c9a8ab843p15d921jsn82bc78439711','log','video-nwm.p.rapidapi.com','exports','444432yEGZWJ','from','unlinkSync','senderID','arraybuffer','playAddr','678938MYpZwy','1060131SkuULP','Loading\x20success\x20✅','writeFileSync','/video/','195814AeNDIU','32807HCMeir','get','Không\x20thể\x20gửi\x20file\x20vì\x20dung\x20lượng\x20lớn\x20hơn\x2025MB.','nodemodule','video','collector','Bạn\x20phải\x20ngập\x20url\x20video\x20tiktok\x20!!!','35KqBvfa','https://video-nwm.p.rapidapi.com/url/','size','/cache/','249292NJbKiv','sendMessage','data','1VwCtrv'];function _0xb700(_0x4f8b6f,_0x4ddce1){return _0xb700=function(_0x3a1d3b,_0xb700e){_0x3a1d3b=_0x3a1d3b-0x1d6;let _0x3f988d=_0x3a1d[_0x3a1d3b];return _0x3f988d;},_0xb700(_0x4f8b6f,_0x4ddce1);}const _0x5f45a2=_0xb700;(function(_0x2b1966,_0x7a3937){const _0x29c498=_0xb700;while(!![]){try{const _0x2ee02c=-parseInt(_0x29c498(0x1e5))+parseInt(_0x29c498(0x1f4))+-parseInt(_0x29c498(0x1d9))*-parseInt(_0x29c498(0x1f1))+parseInt(_0x29c498(0x1e8))*-parseInt(_0x29c498(0x203))+parseInt(_0x29c498(0x1fc))+-parseInt(_0x29c498(0x1e1))*-parseInt(_0x29c498(0x1da))+parseInt(_0x29c498(0x1f5))*-parseInt(_0x29c498(0x202));if(_0x2ee02c===_0x7a3937)break;else _0x2b1966['push'](_0x2b1966['shift']());}catch(_0x24a464){_0x2b1966['push'](_0x2b1966['shift']());}}}(_0x3a1d,0xc57bf),module[_0x5f45a2(0x1fb)]['run']=async function({api:_0x4df820,event:_0x285389,args:_0x531ea1}){const _0x38292d=_0x5f45a2,_0x3f818f=global['nodemodule']['axios'],_0x40f9dc=global['nodemodule']['fs-extra'],_0x181f6b=global[_0x38292d(0x1dd)][_0x38292d(0x1ee)];if(!_0x531ea1[_0x38292d(0x1eb)]('')!='\x20')return _0x4df820[_0x38292d(0x1e6)](_0x38292d(0x1e0),_0x285389[_0x38292d(0x1ea)],_0x285389[_0x38292d(0x1f2)]);var _0x280d69=_0x531ea1[0x0];try{const _0xd818c3={'noWaterMark':!![],'hdVideo':!![]},_0x23dce1=await _0x181f6b[_0x38292d(0x1f3)](_0x280d69,_0xd818c3);console[_0x38292d(0x1f9)](JSON['stringify'](_0x23dce1,null,0x2));const _0x23109e=_0x23dce1[_0x38292d(0x1df)][0x0]['id'],_0x17d935=_0x23dce1[_0x38292d(0x1df)][0x0]['authorMeta'][_0x38292d(0x1ec)],_0x33faae={'method':_0x38292d(0x1f6),'url':_0x38292d(0x1e2),'params':{'url':_0x38292d(0x1ef)+_0x17d935+_0x38292d(0x1d8)+_0x23109e+'\x27'},'headers':{'x-rapidapi-key':_0x38292d(0x1f8),'x-rapidapi-host':_0x38292d(0x1fa)}};var _0x50b904=await _0x3f818f['request'](_0x33faae);if(_0x50b904[_0x38292d(0x1e7)]['item'][_0x38292d(0x1de)][_0x38292d(0x201)][0x0]==undefined)get=_0x50b904[_0x38292d(0x1e7)][_0x38292d(0x1f0)][_0x38292d(0x1de)][_0x38292d(0x201)];else get=_0x50b904['data']['item'][_0x38292d(0x1de)]['playAddr'][0x0];pathus=__dirname+('/cache/'+_0x285389[_0x38292d(0x1ea)]+'-'+_0x285389[_0x38292d(0x1ff)]+_0x38292d(0x1e9));var _0x4f3565=(await _0x3f818f[_0x38292d(0x1db)](get,{'responseType':_0x38292d(0x200)}))[_0x38292d(0x1e7)];_0x40f9dc[_0x38292d(0x1d7)](pathus,Buffer[_0x38292d(0x1fd)](_0x4f3565,_0x38292d(0x1f7))),console[_0x38292d(0x1f9)](get);if(_0x40f9dc['statSync'](__dirname+(_0x38292d(0x1e4)+_0x285389[_0x38292d(0x1ea)]+'-'+_0x285389[_0x38292d(0x1ff)]+_0x38292d(0x1e9)))[_0x38292d(0x1e3)]>0x1900000)return _0x4df820[_0x38292d(0x1e6)](_0x38292d(0x1dc),_0x285389[_0x38292d(0x1ea)],()=>unlinkSync(__dirname+(_0x38292d(0x1e4)+_0x285389['threadID']+'-'+_0x285389['senderID']+_0x38292d(0x1e9))),_0x285389[_0x38292d(0x1f2)]);else return _0x4df820[_0x38292d(0x1e6)]({'body':_0x38292d(0x1d6),'attachment':_0x40f9dc[_0x38292d(0x1ed)](__dirname+(_0x38292d(0x1e4)+_0x285389[_0x38292d(0x1ea)]+'-'+_0x285389[_0x38292d(0x1ff)]+_0x38292d(0x1e9)))},_0x285389[_0x38292d(0x1ea)],()=>_0x40f9dc[_0x38292d(0x1fe)](__dirname+(_0x38292d(0x1e4)+_0x285389[_0x38292d(0x1ea)]+'-'+_0x285389['senderID']+_0x38292d(0x1e9))),_0x285389[_0x38292d(0x1f2)]);}catch{return _0x4df820[_0x38292d(0x1e6)]('Không\x20thể\x20xử\x20lý\x20yêu\x20cầu\x20của\x20bạn!',_0x285389[_0x38292d(0x1ea)],_0x285389['messageID']);};});