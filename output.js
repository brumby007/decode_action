//Tue Jul 23 2024 02:09:13 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0xe4ee23 = "卡夫享",
  _0x59750a = _0x41e775(_0xe4ee23),
  _0x14f68c = 1,
  _0x1c17bc = _0x59750a.isNode() ? require("./sendNotify") : "";
let _0x415f7 = "",
  _0x41bc12,
  _0x42cde4 = ["\n", "@", "&"],
  _0x10a847 = "kfxtoken",
  _0x258a62 = (_0x59750a.isNode() ? process.env[_0x10a847] : _0x59750a.getdata(_0x10a847)) || "",
  _0x19d9f8 = [],
  _0x360d2b = 0,
  _0x4ceea6 = 0,
  _0x44b91f = "赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董梁杜阮蓝闵席季麻强",
  _0x1a509e = ["先生", "小姐"],
  _0x25cb43 = ["北京市", "上海市"],
  _0x161a45 = [["东城", "东城", "朝阳", "海淀", "房山", "顺义"], ["黄埔", "徐汇", "长宁", "静安", "虹口", "闵行"]],
  _0x29dc10 = [],
  _0x30a8aa = [],
  _0x1e1d86 = "",
  _0x80e2f1 = 1.02,
  _0x54bde7 = 0,
  _0x36fba8 = "kfx",
  _0x124150 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x2783ec = "https://127.0.0.1/";
class _0x1168ef {
  constructor(_0x3d6936) {
    this.index = ++_0x360d2b;
    this.token = _0x3d6936;
    this.valid = false;
    this.type = "";
  }
  async getUserInfo(_0x4637a9 = 0) {
    let _0x59bc5e = "https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/getUserInfo",
      _0x2f5d2b = "",
      _0x425de4 = _0x3de037(_0x59bc5e, this.token, _0x2f5d2b);
    await _0x4b65ed("get", _0x425de4);
    let _0x32d88e = _0x41bc12;
    if (!_0x32d88e) {
      return;
    }
    if (_0x32d88e.error_code == 0) {
      if (_0x4637a9 == 0) {
        this.valid = true;
        this.nickname = _0x5842ba(_0x32d88e.data.nickname);
        this.phone = _0x5842ba(_0x32d88e.data.memberInfo.phone);
        this.member_id = _0x5842ba(_0x32d88e.data.member_id);
        this.score = _0x5842ba(_0x32d88e.data.memberInfo.score);
        this.hasInfo = _0x32d88e.data.propertiesInfo ? true : false;
        if (_0x30a8aa.join("&").indexOf(this.member_id) == -1) {
          _0x30a8aa.push(this.member_id);
        }
        console.log("账号[" + this.index + "] " + this.phone + " " + this.nickname + " 登录成功");
      } else {
        _0x4637a9 == 1 && (this.score = _0x5842ba(_0x32d88e.data.memberInfo.score), _0x415f7 += "账号[" + this.phone + "] " + this.nickname + " 积分余额：" + this.score + "\n");
      }
    } else {
      console.log("账号[" + this.index + "]登录失败: " + _0x32d88e.msg);
    }
  }
  async updateUserInfo() {
    let _0x554682 = _0x4c617e(_0x44b91f),
      _0x2539b9 = _0x4c617e(_0x44b91f),
      _0x58c8fd = _0x4c617e(_0x1a509e),
      _0x52dd9f = Math.floor(Math.random() * 30) + 1970,
      _0x1b32fa = _0x43aada(Math.floor(Math.random() * 11) + 1, 2, "0"),
      _0x4dcd32 = _0x43aada(Math.floor(Math.random() * 27) + 1, 2, "0"),
      _0x5eac31 = Math.floor(Math.random() * _0x25cb43.length),
      _0xe48d51 = _0x25cb43[_0x5eac31],
      _0x972600 = _0x4c617e(_0x161a45[_0x5eac31]),
      _0x2e041f = Math.floor(Math.random() * 2000) + 1,
      _0x3ece6e = "https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/updateUserInfo",
      _0x3ebead = "avatar=&gender=male&phone=&code=&birthday=" + _0x52dd9f + "-" + _0x1b32fa + "-" + _0x4dcd32 + "&name=" + encodeURIComponent(_0x554682 + _0x58c8fd) + "&province=" + encodeURIComponent(_0xe48d51) + "&city=" + encodeURIComponent(_0x972600 + "区") + "&job=" + encodeURIComponent("厨师长") + "&restaurant_name=" + encodeURIComponent(_0x554682 + _0x2539b9 + "餐厅") + "&restaurant_detail=" + encodeURIComponent(_0x972600 + _0x2e041f + "号") + "&restaurant_type=" + encodeURIComponent("西餐厅") + "&restaurant_size=" + encodeURIComponent("20桌以下") + "&cooking_style=" + encodeURIComponent("西式快餐") + "&restaurant_buying_role=" + encodeURIComponent("参与人") + "&common_salt=" + encodeURIComponent("[\"卡夫亨氏\"]"),
      _0x30fcaf = _0x3de037(_0x3ece6e, this.token, _0x3ebead);
    await _0x4b65ed("post", _0x30fcaf);
    let _0x60fb89 = _0x41bc12;
    if (!_0x60fb89) {
      return;
    }
    _0x60fb89.error_code == 0 ? console.log("账号[" + this.index + "]完善信息成功") : console.log("账号[" + this.index + "]完善信息失败: " + _0x60fb89.msg);
  }
  async dailySign() {
    let _0x5a5c0f = "https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/dailySign",
      _0x533f2b = "{}",
      _0x469703 = _0x3de037(_0x5a5c0f, this.token, _0x533f2b);
    await _0x4b65ed("post", _0x469703);
    let _0x3b5e16 = _0x41bc12;
    if (!_0x3b5e16) {
      return;
    }
    _0x3b5e16.error_code == 0 ? console.log("账号[" + this.index + "]签到成功") : console.log("账号[" + this.index + "]签到失败: " + _0x3b5e16.msg);
  }
  async getCookbookIndex() {
    let _0x156916 = "https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/getCookbookIndex",
      _0x823893 = "page=1&pagesize=20",
      _0x1e8632 = _0x3de037(_0x156916, this.token, _0x823893);
    await _0x4b65ed("post", _0x1e8632);
    let _0x3c7223 = _0x41bc12;
    if (!_0x3c7223) {
      return;
    }
    _0x3c7223.error_code == 0 ? _0x29dc10 = _0x3c7223.data.chineseCookbook.data : console.log("账号[" + this.index + "]查询菜单列表失败: " + _0x3c7223.msg);
  }
  async recordScoreShare(_0x1986a0, _0x555ca1) {
    let _0x4ca638 = "https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/recordScoreShare",
      _0x47674f = "cookbook_id=" + _0x1986a0 + "&invite_id=" + _0x555ca1,
      _0x16fa02 = _0x3de037(_0x4ca638, this.token, _0x47674f);
    await _0x4b65ed("post", _0x16fa02);
    let _0x2fe49c = _0x41bc12;
    if (!_0x2fe49c) {
      return;
    }
    console.log("账号[" + this.index + "]助力[" + _0x555ca1 + "]: " + _0x2fe49c.msg);
  }
  async exchangeIntegralNew() {
    let _0x259238 = this.type;
    if (_0x259238 * 10 > this.score) {
      return;
    }
    let _0x3e643d = "";
    if (_0x259238 == 2) {
      _0x3e643d = "value=" + encodeURIComponent("京东E卡2元") + "&phone=&type=" + encodeURIComponent("视频卡");
    } else {
      if (_0x259238 == 10 || _0x259238 == 20) {
        _0x3e643d = "value=" + encodeURIComponent("全网" + _0x259238 + "元话费") + "&phone=" + this.phone + "&type=" + encodeURIComponent("话费") + "&memberId=" + this.member_id;
      } else {
        return;
      }
    }
    let _0x312285 = "https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/exchangeIntegralNew",
      _0x5bee9e = _0x3de037(_0x312285, this.token, _0x3e643d);
    await _0x4b65ed("post", _0x5bee9e);
    let _0x30938e = _0x41bc12;
    if (!_0x30938e) {
      return;
    }
    _0x30938e.error_code == 0 ? (console.log("账号[" + this.index + "]兑换结果: " + _0x30938e.msg), _0x415f7 += "账号[" + this.index + "]兑换结果: " + _0x30938e.msg + "\n") : console.log("账号[" + this.index + "]兑换失败: " + _0x30938e.msg);
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await _0x49b601();
  } else {
    await _0x17a4f4();
    if (_0x54bde7 == false) {
      return;
    }
    await _0x57bddf();
    if (!(await _0x1bc790())) {
      return;
    }
    console.log("\n=============== 登录 ===============");
    for (let _0x441408 of _0x19d9f8) {
      await _0x441408.getUserInfo(0);
      await _0x59750a.wait(500);
    }
    let _0x4cb30f = _0x19d9f8.filter(_0x43b37c => _0x43b37c.valid);
    for (let _0x30e6b2 of _0x19d9f8.filter(_0x38543b => _0x38543b.valid == false)) {
      _0x415f7 += "账号[" + _0x30e6b2.index + "]token已失效\n";
    }
    if (_0x4cb30f.length == 0) {
      await _0x54af65();
      return;
    }
    console.log("\n=============== 签到 ===============");
    for (let _0x5993b7 of _0x4cb30f) {
      await _0x5993b7.dailySign();
    }
    console.log("\n=============== 完善信息 ===============");
    for (let _0x21bacf of _0x4cb30f.filter(_0x27a3d1 => _0x27a3d1.hasInfo == false)) {
      await _0x21bacf.updateUserInfo();
    }
    let _0x58d7a8 = _0x4c617e(_0x4cb30f);
    await _0x58d7a8.getCookbookIndex();
    for (let _0x3e0c69 of _0x4cb30f) {
      console.log("\n=============== 账号" + _0x3e0c69.index + "去互助 ===============");
      let _0x6f6a18 = _0xa790d(_0x30a8aa);
      for (let _0x496aac of _0x6f6a18.filter(_0x558f5b => _0x3e0c69.member_id != _0x558f5b)) {
        let _0x1446a1 = _0x4c617e(_0x29dc10);
        await _0x3e0c69.recordScoreShare(_0x1446a1.id, _0x496aac);
      }
    }
    console.log("\n=============== 查询积分 ===============");
    for (let _0x2ced1c of _0x4cb30f) {
      await _0x2ced1c.getUserInfo(1);
    }
    await _0x54af65();
  }
})().catch(_0x342254 => _0x59750a.logErr(_0x342254)).finally(() => _0x59750a.done());
function _0x5842ba(_0x5011ef) {
  return _0x5011ef ? _0x5011ef : "";
}
function _0x4c617e(_0x123471) {
  return _0x123471[Math.floor(Math.random() * _0x123471.length)];
}
function _0xa790d(_0x3be69b) {
  let _0x1538fc = _0x3be69b.length;
  for (let _0x257865 = 0; _0x257865 < _0x1538fc - 1; _0x257865++) {
    let _0x9ae7f8 = parseInt(Math.random() * (_0x1538fc - _0x257865)),
      _0xf46841 = _0x3be69b[_0x9ae7f8];
    _0x3be69b[_0x9ae7f8] = _0x3be69b[_0x1538fc - _0x257865 - 1];
    _0x3be69b[_0x1538fc - _0x257865 - 1] = _0xf46841;
  }
  return _0x3be69b;
}
function _0x1bc790() {
  if (_0x258a62) {
    let _0x2d069d = _0x42cde4[0];
    for (let _0x22967f of _0x42cde4) {
      if (_0x258a62.indexOf(_0x22967f) > -1) {
        _0x2d069d = _0x22967f;
        break;
      }
    }
    for (let _0x23203c of _0x258a62.split(_0x2d069d)) {
      if (_0x23203c) {
        _0x19d9f8.push(new _0x1168ef(_0x23203c));
      }
    }
    _0x4ceea6 = _0x19d9f8.length;
  } else {
    console.log("未找到CK: " + _0x10a847);
    return false;
  }
  console.log("共找到" + _0x4ceea6 + "个账号");
  return true;
}
async function _0x49b601() {
  if ($request.url.indexOf("getUserInfo") > -1) {
    let _0x5ed699 = $request.headers.token;
    _0x258a62 ? _0x258a62.indexOf(_0x5ed699) == -1 ? (_0x258a62 = _0x258a62 + "\n" + _0x5ed699, _0x59750a.setdata(_0x258a62, "kfxtoken"), ckList = _0x258a62.split("\n"), _0x59750a.msg(_0xe4ee23 + (" 获取第" + ckList.length + "个kfxtoken成功: " + _0x5ed699))) : console.log(_0xe4ee23 + (" 找到重复的token: " + _0x5ed699)) : (_0x59750a.setdata(_0x5ed699, "kfxtoken"), _0x59750a.msg(_0xe4ee23 + (" 获取第1个kfxtoken成功: " + _0x5ed699)));
  }
}
async function _0x54af65() {
  if (!_0x415f7) {
    return;
  }
  notifyBody = _0xe4ee23 + "运行通知\n\n" + _0x415f7;
  _0x14f68c == 1 ? (_0x59750a.msg(notifyBody), _0x59750a.isNode() && (await _0x1c17bc.sendNotify(_0x59750a.name, notifyBody))) : console.log(notifyBody);
}
async function _0x175e72(_0x28b0ec) {
  if (!PushDearKey) {
    return;
  }
  if (!_0x28b0ec) {
    return;
  }
  console.log("\n============= PushDear 通知 =============\n");
  console.log(_0x28b0ec);
  let _0x1de459 = {
    url: "https://api2.pushdeer.com/message/push?pushkey=" + PushDearKey + "&text=" + encodeURIComponent(_0x28b0ec),
    headers: {}
  };
  await _0x4b65ed("get", _0x1de459);
  let _0xc4530e = _0x41bc12,
    _0x10021d = _0xc4530e.content.result == false ? "失败" : "成功";
  console.log("\n========== PushDear 通知发送" + _0x10021d + " ==========\n");
}
async function _0x17a4f4(_0x5ec0a8 = 0) {
  let _0x3919fd = {
    url: _0x124150
  };
  await _0x4b65ed("get", _0x3919fd);
  let _0x36f1c9 = _0x41bc12;
  if (!_0x36f1c9) {
    if (_0x5ec0a8 < NUM_MAX_RETRY) {
      await _0x17a4f4(++_0x5ec0a8);
    }
    return;
  }
  _0x36f1c9?.["code"] == 0 && (_0x36f1c9 = JSON.parse(_0x36f1c9.data.file.data));
  _0x36f1c9?.["commonNotify"] && _0x36f1c9.commonNotify.length > 0 && _0x152384(_0x36f1c9.commonNotify.join("\n") + "\n");
  _0x36f1c9?.["commonMsg"] && _0x36f1c9.commonMsg.length > 0 && console.log(_0x36f1c9.commonMsg.join("\n") + "\n");
  if (_0x36f1c9[_0x36fba8]) {
    let _0x2f4863 = _0x36f1c9[_0x36fba8];
    _0x2f4863.status == 0 ? _0x80e2f1 >= _0x2f4863.version ? (_0x54bde7 = true, _0x2783ec = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x36fba8 + ".json", console.log(_0x2f4863.msg[_0x2f4863.status]), console.log(_0x2f4863.updateMsg), console.log("现在运行的脚本版本是：" + _0x80e2f1 + "，最新脚本版本：" + _0x2f4863.latestVersion)) : console.log(_0x2f4863.versionMsg) : console.log(_0x2f4863.msg[_0x2f4863.status]);
  } else {
    console.log(_0x36f1c9.errorMsg);
  }
}
async function _0x57bddf(_0x40827b = 0) {
  let _0x2db5ad = {
    url: _0x2783ec
  };
  await _0x4b65ed("get", _0x2db5ad);
  let _0x57c6ca = _0x41bc12;
  if (!_0x57c6ca) {
    if (_0x40827b < NUM_MAX_RETRY) {
      await _0x57bddf(++_0x40827b);
    }
    return;
  }
  _0x57c6ca?.["code"] == 0 && (_0x57c6ca = JSON.parse(_0x57c6ca.data.file.data));
  _0x1e1d86 = _0x57c6ca.invite[_0x57c6ca.inviteIdx];
  for (let _0x461231 of _0x57c6ca.helpCode) {
    if (_0x461231) {
      _0x30a8aa.push(_0x461231);
    }
  }
  return;
}
function _0x3de037(_0x4aa1b3, _0x5dd647, _0x39aa50 = "") {
  const _0x3fa0d9 = {
    Host: "fscrm.kraftheinz.net.cn",
    "Accept-Encoding": "gzip, deflate, br",
    Connection: "keep-alive",
    Accept: "*/*",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.17(0x18001129) NetType/WIFI Language/zh_CN",
    token: _0x5dd647,
    "Accept-Language": "zh-CN,zh-Hans;q=0.9"
  };
  let _0x4a19e3 = {
    url: _0x4aa1b3,
    headers: _0x3fa0d9,
    timeout: 40000
  };
  if (_0x39aa50) {
    _0x4a19e3.body = _0x39aa50;
  }
  return _0x4a19e3;
}
async function _0x4b65ed(_0x5ce2bb, _0x4727bb) {
  _0x41bc12 = null;
  _0x5ce2bb == "post" && (_0x4727bb.headers["Content-Type"] = "application/x-www-form-urlencoded", _0x4727bb.headers["Content-Length"] = _0x4727bb.body.length);
  return new Promise(_0x377cc8 => {
    _0x59750a[_0x5ce2bb](_0x4727bb, async (_0x2e81e8, _0x2d7867, _0x2cf42e) => {
      try {
        if (_0x2e81e8) {
          console.log(_0x5ce2bb + "请求失败");
          console.log(JSON.stringify(_0x2e81e8));
          _0x59750a.logErr(_0x2e81e8);
        } else {
          if (_0x5ca793(_0x2cf42e)) {
            _0x41bc12 = JSON.parse(_0x2cf42e);
          }
        }
      } catch (_0x3cd55e) {
        _0x59750a.logErr(_0x3cd55e, _0x2d7867);
      } finally {
        _0x377cc8();
      }
    });
  });
}
function _0x5ca793(_0x556fe8) {
  try {
    if (typeof JSON.parse(_0x556fe8) == "object") {
      return true;
    } else {
      console.log(_0x556fe8);
    }
  } catch (_0x3a0a7c) {
    console.log(_0x3a0a7c);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function _0x3b2d56(_0xc41ad5, _0x2c33e6) {
  return _0xc41ad5 < _0x2c33e6 ? _0xc41ad5 : _0x2c33e6;
}
function _0x467872(_0xb69aa7, _0x5b77d0) {
  return _0xb69aa7 < _0x5b77d0 ? _0x5b77d0 : _0xb69aa7;
}
function _0x43aada(_0xa83d51, _0x358e37, _0x33d4db = "0") {
  let _0x4f14cf = String(_0xa83d51),
    _0x584545 = _0x358e37 > _0x4f14cf.length ? _0x358e37 - _0x4f14cf.length : 0,
    _0x1e27f1 = "";
  for (let _0x4a1d4f = 0; _0x4a1d4f < _0x584545; _0x4a1d4f++) {
    _0x1e27f1 += _0x33d4db;
  }
  _0x1e27f1 += _0x4f14cf;
  return _0x1e27f1;
}
function _0x2d5d58(_0x19287e = 12) {
  let _0x339fb4 = "abcdef0123456789",
    _0x194c23 = _0x339fb4.length,
    _0x4bf28a = "";
  for (i = 0; i < _0x19287e; i++) {
    _0x4bf28a += _0x339fb4.charAt(Math.floor(Math.random() * _0x194c23));
  }
  return _0x4bf28a;
}
function _0x152384(_0x579cd6) {
  console.log(_0x579cd6);
  _0x415f7 += _0x579cd6;
  _0x415f7 += "\n";
}
var _0x6b486 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function (_0x580d47) {
    var _0x9df826 = "";
    var _0x26567f, _0x3c3c8c, _0x2bdeb3, _0xc90a22, _0x5eeec8, _0x5a1ae5, _0x4ed616;
    var _0x1abdbf = 0;
    _0x580d47 = _0x6b486._utf8_encode(_0x580d47);
    while (_0x1abdbf < _0x580d47.length) {
      _0x26567f = _0x580d47.charCodeAt(_0x1abdbf++);
      _0x3c3c8c = _0x580d47.charCodeAt(_0x1abdbf++);
      _0x2bdeb3 = _0x580d47.charCodeAt(_0x1abdbf++);
      _0xc90a22 = _0x26567f >> 2;
      _0x5eeec8 = (_0x26567f & 3) << 4 | _0x3c3c8c >> 4;
      _0x5a1ae5 = (_0x3c3c8c & 15) << 2 | _0x2bdeb3 >> 6;
      _0x4ed616 = _0x2bdeb3 & 63;
      if (isNaN(_0x3c3c8c)) {
        _0x5a1ae5 = _0x4ed616 = 64;
      } else {
        isNaN(_0x2bdeb3) && (_0x4ed616 = 64);
      }
      _0x9df826 = _0x9df826 + this._keyStr.charAt(_0xc90a22) + this._keyStr.charAt(_0x5eeec8) + this._keyStr.charAt(_0x5a1ae5) + this._keyStr.charAt(_0x4ed616);
    }
    return _0x9df826;
  },
  decode: function (_0x238503) {
    var _0x2b5d8e = "";
    var _0x4e0190, _0x338390, _0x101838;
    var _0x2579f4, _0x1de7cd, _0x86e73b, _0x308f75;
    var _0x2a3e5a = 0;
    _0x238503 = _0x238503.replace(/[^A-Za-z0-9+/=]/g, "");
    while (_0x2a3e5a < _0x238503.length) {
      _0x2579f4 = this._keyStr.indexOf(_0x238503.charAt(_0x2a3e5a++));
      _0x1de7cd = this._keyStr.indexOf(_0x238503.charAt(_0x2a3e5a++));
      _0x86e73b = this._keyStr.indexOf(_0x238503.charAt(_0x2a3e5a++));
      _0x308f75 = this._keyStr.indexOf(_0x238503.charAt(_0x2a3e5a++));
      _0x4e0190 = _0x2579f4 << 2 | _0x1de7cd >> 4;
      _0x338390 = (_0x1de7cd & 15) << 4 | _0x86e73b >> 2;
      _0x101838 = (_0x86e73b & 3) << 6 | _0x308f75;
      _0x2b5d8e = _0x2b5d8e + String.fromCharCode(_0x4e0190);
      _0x86e73b != 64 && (_0x2b5d8e = _0x2b5d8e + String.fromCharCode(_0x338390));
      _0x308f75 != 64 && (_0x2b5d8e = _0x2b5d8e + String.fromCharCode(_0x101838));
    }
    _0x2b5d8e = _0x6b486._utf8_decode(_0x2b5d8e);
    return _0x2b5d8e;
  },
  _utf8_encode: function (_0xd90b4f) {
    _0xd90b4f = _0xd90b4f.replace(/rn/g, "n");
    var _0x153d48 = "";
    for (var _0x441827 = 0; _0x441827 < _0xd90b4f.length; _0x441827++) {
      var _0x4d4a26 = _0xd90b4f.charCodeAt(_0x441827);
      if (_0x4d4a26 < 128) {
        _0x153d48 += String.fromCharCode(_0x4d4a26);
      } else {
        _0x4d4a26 > 127 && _0x4d4a26 < 2048 ? (_0x153d48 += String.fromCharCode(_0x4d4a26 >> 6 | 192), _0x153d48 += String.fromCharCode(_0x4d4a26 & 63 | 128)) : (_0x153d48 += String.fromCharCode(_0x4d4a26 >> 12 | 224), _0x153d48 += String.fromCharCode(_0x4d4a26 >> 6 & 63 | 128), _0x153d48 += String.fromCharCode(_0x4d4a26 & 63 | 128));
      }
    }
    return _0x153d48;
  },
  _utf8_decode: function (_0x3d0b47) {
    c1 = c2 = 0;
    var _0x3d2fe0 = "",
      _0x45102c = 0,
      _0xa3392c = c1;
    while (_0x45102c < _0x3d0b47.length) {
      _0xa3392c = _0x3d0b47.charCodeAt(_0x45102c);
      if (_0xa3392c < 128) {
        _0x3d2fe0 += String.fromCharCode(_0xa3392c);
        _0x45102c++;
      } else {
        _0xa3392c > 191 && _0xa3392c < 224 ? (c2 = _0x3d0b47.charCodeAt(_0x45102c + 1), _0x3d2fe0 += String.fromCharCode((_0xa3392c & 31) << 6 | c2 & 63), _0x45102c += 2) : (c2 = _0x3d0b47.charCodeAt(_0x45102c + 1), c3 = _0x3d0b47.charCodeAt(_0x45102c + 2), _0x3d2fe0 += String.fromCharCode((_0xa3392c & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x45102c += 3);
      }
    }
    return _0x3d2fe0;
  }
};
function _0x1e4a3b(_0x472abe) {
  function _0x353b38(_0x264482, _0x3ac84e) {
    return _0x264482 << _0x3ac84e | _0x264482 >>> 32 - _0x3ac84e;
  }
  function _0xf1cbc2(_0x560e1a, _0x2f83aa) {
    var _0x193bb0, _0x12a9e6, _0x2ea7c5, _0x454074, _0x534221;
    _0x2ea7c5 = 2147483648 & _0x560e1a;
    _0x454074 = 2147483648 & _0x2f83aa;
    _0x193bb0 = 1073741824 & _0x560e1a;
    _0x12a9e6 = 1073741824 & _0x2f83aa;
    _0x534221 = (1073741823 & _0x560e1a) + (1073741823 & _0x2f83aa);
    return _0x193bb0 & _0x12a9e6 ? 2147483648 ^ _0x534221 ^ _0x2ea7c5 ^ _0x454074 : _0x193bb0 | _0x12a9e6 ? 1073741824 & _0x534221 ? 3221225472 ^ _0x534221 ^ _0x2ea7c5 ^ _0x454074 : 1073741824 ^ _0x534221 ^ _0x2ea7c5 ^ _0x454074 : _0x534221 ^ _0x2ea7c5 ^ _0x454074;
  }
  function _0x3677ff(_0x19d5f9, _0x3c8402, _0x1ac3b5) {
    return _0x19d5f9 & _0x3c8402 | ~_0x19d5f9 & _0x1ac3b5;
  }
  function _0x58efb7(_0x24b2e0, _0x5a1e3a, _0x1ccf0c) {
    return _0x24b2e0 & _0x1ccf0c | _0x5a1e3a & ~_0x1ccf0c;
  }
  function _0x4713a8(_0x5417c4, _0x30eee1, _0x137336) {
    return _0x5417c4 ^ _0x30eee1 ^ _0x137336;
  }
  function _0x241bff(_0x5e7df2, _0x25fd8c, _0x51be4c) {
    return _0x25fd8c ^ (_0x5e7df2 | ~_0x51be4c);
  }
  function _0x37d121(_0x11da86, _0x42dcf2, _0x44cf35, _0x4b511c, _0x44252f, _0x1a39fb, _0x2a3454) {
    _0x11da86 = _0xf1cbc2(_0x11da86, _0xf1cbc2(_0xf1cbc2(_0x3677ff(_0x42dcf2, _0x44cf35, _0x4b511c), _0x44252f), _0x2a3454));
    return _0xf1cbc2(_0x353b38(_0x11da86, _0x1a39fb), _0x42dcf2);
  }
  function _0x4a7ef4(_0x2ab6e2, _0x2454f0, _0xb7d0da, _0x484741, _0x2ccba6, _0x57679a, _0x3e1ba5) {
    _0x2ab6e2 = _0xf1cbc2(_0x2ab6e2, _0xf1cbc2(_0xf1cbc2(_0x58efb7(_0x2454f0, _0xb7d0da, _0x484741), _0x2ccba6), _0x3e1ba5));
    return _0xf1cbc2(_0x353b38(_0x2ab6e2, _0x57679a), _0x2454f0);
  }
  function _0x51fef7(_0x26ff3c, _0xdf849, _0x20a618, _0x5d97da, _0x524d5c, _0x30ad69, _0x2f6dff) {
    _0x26ff3c = _0xf1cbc2(_0x26ff3c, _0xf1cbc2(_0xf1cbc2(_0x4713a8(_0xdf849, _0x20a618, _0x5d97da), _0x524d5c), _0x2f6dff));
    return _0xf1cbc2(_0x353b38(_0x26ff3c, _0x30ad69), _0xdf849);
  }
  function _0x117be4(_0x57f34e, _0x269784, _0x245b7e, _0x3ff41c, _0x388422, _0x3a7733, _0x246a0a) {
    _0x57f34e = _0xf1cbc2(_0x57f34e, _0xf1cbc2(_0xf1cbc2(_0x241bff(_0x269784, _0x245b7e, _0x3ff41c), _0x388422), _0x246a0a));
    return _0xf1cbc2(_0x353b38(_0x57f34e, _0x3a7733), _0x269784);
  }
  function _0x381c9c(_0x14e822) {
    for (var _0x340a26, _0x363199 = _0x14e822.length, _0x17a168 = _0x363199 + 8, _0x519d17 = (_0x17a168 - _0x17a168 % 64) / 64, _0x20ec32 = 16 * (_0x519d17 + 1), _0x54adcb = new Array(_0x20ec32 - 1), _0x55a1c9 = 0, _0x4d9426 = 0; _0x363199 > _0x4d9426;) {
      _0x340a26 = (_0x4d9426 - _0x4d9426 % 4) / 4;
      _0x55a1c9 = _0x4d9426 % 4 * 8;
      _0x54adcb[_0x340a26] = _0x54adcb[_0x340a26] | _0x14e822.charCodeAt(_0x4d9426) << _0x55a1c9;
      _0x4d9426++;
    }
    _0x340a26 = (_0x4d9426 - _0x4d9426 % 4) / 4;
    _0x55a1c9 = _0x4d9426 % 4 * 8;
    _0x54adcb[_0x340a26] = _0x54adcb[_0x340a26] | 128 << _0x55a1c9;
    _0x54adcb[_0x20ec32 - 2] = _0x363199 << 3;
    _0x54adcb[_0x20ec32 - 1] = _0x363199 >>> 29;
    return _0x54adcb;
  }
  function _0x53a921(_0x36813f) {
    var _0x5f01d2,
      _0x169e6e,
      _0x2f7777 = "",
      _0x45ca30 = "";
    for (_0x169e6e = 0; 3 >= _0x169e6e; _0x169e6e++) {
      _0x5f01d2 = _0x36813f >>> 8 * _0x169e6e & 255;
      _0x45ca30 = "0" + _0x5f01d2.toString(16);
      _0x2f7777 += _0x45ca30.substr(_0x45ca30.length - 2, 2);
    }
    return _0x2f7777;
  }
  function _0x4bcf3c(_0x113de7) {
    _0x113de7 = _0x113de7.replace(/\r\n/g, "\n");
    for (var _0x6b36ae = "", _0x57f5ca = 0; _0x57f5ca < _0x113de7.length; _0x57f5ca++) {
      var _0xc555af = _0x113de7.charCodeAt(_0x57f5ca);
      128 > _0xc555af ? _0x6b36ae += String.fromCharCode(_0xc555af) : _0xc555af > 127 && 2048 > _0xc555af ? (_0x6b36ae += String.fromCharCode(_0xc555af >> 6 | 192), _0x6b36ae += String.fromCharCode(63 & _0xc555af | 128)) : (_0x6b36ae += String.fromCharCode(_0xc555af >> 12 | 224), _0x6b36ae += String.fromCharCode(_0xc555af >> 6 & 63 | 128), _0x6b36ae += String.fromCharCode(63 & _0xc555af | 128));
    }
    return _0x6b36ae;
  }
  var _0x182b8c,
    _0x1bd30e,
    _0x3a839f,
    _0x4fc99f,
    _0x22fcbb,
    _0x50b646,
    _0xbb4653,
    _0x131746,
    _0x124436,
    _0x4c15c8 = [],
    _0x1eda63 = 7,
    _0x2ec206 = 12,
    _0x1a8fbf = 17,
    _0x151872 = 22,
    _0x44bd98 = 5,
    _0x13805d = 9,
    _0x1472e1 = 14,
    _0x3e1baf = 20,
    _0x19ca42 = 4,
    _0x1d586b = 11,
    _0x7a0a36 = 16,
    _0x484ef4 = 23,
    _0x8d9c63 = 6,
    _0x461c97 = 10,
    _0x209735 = 15,
    _0x383e94 = 21;
  for (_0x472abe = _0x4bcf3c(_0x472abe), _0x4c15c8 = _0x381c9c(_0x472abe), _0x50b646 = 1732584193, _0xbb4653 = 4023233417, _0x131746 = 2562383102, _0x124436 = 271733878, _0x182b8c = 0; _0x182b8c < _0x4c15c8.length; _0x182b8c += 16) {
    _0x1bd30e = _0x50b646;
    _0x3a839f = _0xbb4653;
    _0x4fc99f = _0x131746;
    _0x22fcbb = _0x124436;
    _0x50b646 = _0x37d121(_0x50b646, _0xbb4653, _0x131746, _0x124436, _0x4c15c8[_0x182b8c + 0], _0x1eda63, 3614090360);
    _0x124436 = _0x37d121(_0x124436, _0x50b646, _0xbb4653, _0x131746, _0x4c15c8[_0x182b8c + 1], _0x2ec206, 3905402710);
    _0x131746 = _0x37d121(_0x131746, _0x124436, _0x50b646, _0xbb4653, _0x4c15c8[_0x182b8c + 2], _0x1a8fbf, 606105819);
    _0xbb4653 = _0x37d121(_0xbb4653, _0x131746, _0x124436, _0x50b646, _0x4c15c8[_0x182b8c + 3], _0x151872, 3250441966);
    _0x50b646 = _0x37d121(_0x50b646, _0xbb4653, _0x131746, _0x124436, _0x4c15c8[_0x182b8c + 4], _0x1eda63, 4118548399);
    _0x124436 = _0x37d121(_0x124436, _0x50b646, _0xbb4653, _0x131746, _0x4c15c8[_0x182b8c + 5], _0x2ec206, 1200080426);
    _0x131746 = _0x37d121(_0x131746, _0x124436, _0x50b646, _0xbb4653, _0x4c15c8[_0x182b8c + 6], _0x1a8fbf, 2821735955);
    _0xbb4653 = _0x37d121(_0xbb4653, _0x131746, _0x124436, _0x50b646, _0x4c15c8[_0x182b8c + 7], _0x151872, 4249261313);
    _0x50b646 = _0x37d121(_0x50b646, _0xbb4653, _0x131746, _0x124436, _0x4c15c8[_0x182b8c + 8], _0x1eda63, 1770035416);
    _0x124436 = _0x37d121(_0x124436, _0x50b646, _0xbb4653, _0x131746, _0x4c15c8[_0x182b8c + 9], _0x2ec206, 2336552879);
    _0x131746 = _0x37d121(_0x131746, _0x124436, _0x50b646, _0xbb4653, _0x4c15c8[_0x182b8c + 10], _0x1a8fbf, 4294925233);
    _0xbb4653 = _0x37d121(_0xbb4653, _0x131746, _0x124436, _0x50b646, _0x4c15c8[_0x182b8c + 11], _0x151872, 2304563134);
    _0x50b646 = _0x37d121(_0x50b646, _0xbb4653, _0x131746, _0x124436, _0x4c15c8[_0x182b8c + 12], _0x1eda63, 1804603682);
    _0x124436 = _0x37d121(_0x124436, _0x50b646, _0xbb4653, _0x131746, _0x4c15c8[_0x182b8c + 13], _0x2ec206, 4254626195);
    _0x131746 = _0x37d121(_0x131746, _0x124436, _0x50b646, _0xbb4653, _0x4c15c8[_0x182b8c + 14], _0x1a8fbf, 2792965006);
    _0xbb4653 = _0x37d121(_0xbb4653, _0x131746, _0x124436, _0x50b646, _0x4c15c8[_0x182b8c + 15], _0x151872, 1236535329);
    _0x50b646 = _0x4a7ef4(_0x50b646, _0xbb4653, _0x131746, _0x124436, _0x4c15c8[_0x182b8c + 1], _0x44bd98, 4129170786);
    _0x124436 = _0x4a7ef4(_0x124436, _0x50b646, _0xbb4653, _0x131746, _0x4c15c8[_0x182b8c + 6], _0x13805d, 3225465664);
    _0x131746 = _0x4a7ef4(_0x131746, _0x124436, _0x50b646, _0xbb4653, _0x4c15c8[_0x182b8c + 11], _0x1472e1, 643717713);
    _0xbb4653 = _0x4a7ef4(_0xbb4653, _0x131746, _0x124436, _0x50b646, _0x4c15c8[_0x182b8c + 0], _0x3e1baf, 3921069994);
    _0x50b646 = _0x4a7ef4(_0x50b646, _0xbb4653, _0x131746, _0x124436, _0x4c15c8[_0x182b8c + 5], _0x44bd98, 3593408605);
    _0x124436 = _0x4a7ef4(_0x124436, _0x50b646, _0xbb4653, _0x131746, _0x4c15c8[_0x182b8c + 10], _0x13805d, 38016083);
    _0x131746 = _0x4a7ef4(_0x131746, _0x124436, _0x50b646, _0xbb4653, _0x4c15c8[_0x182b8c + 15], _0x1472e1, 3634488961);
    _0xbb4653 = _0x4a7ef4(_0xbb4653, _0x131746, _0x124436, _0x50b646, _0x4c15c8[_0x182b8c + 4], _0x3e1baf, 3889429448);
    _0x50b646 = _0x4a7ef4(_0x50b646, _0xbb4653, _0x131746, _0x124436, _0x4c15c8[_0x182b8c + 9], _0x44bd98, 568446438);
    _0x124436 = _0x4a7ef4(_0x124436, _0x50b646, _0xbb4653, _0x131746, _0x4c15c8[_0x182b8c + 14], _0x13805d, 3275163606);
    _0x131746 = _0x4a7ef4(_0x131746, _0x124436, _0x50b646, _0xbb4653, _0x4c15c8[_0x182b8c + 3], _0x1472e1, 4107603335);
    _0xbb4653 = _0x4a7ef4(_0xbb4653, _0x131746, _0x124436, _0x50b646, _0x4c15c8[_0x182b8c + 8], _0x3e1baf, 1163531501);
    _0x50b646 = _0x4a7ef4(_0x50b646, _0xbb4653, _0x131746, _0x124436, _0x4c15c8[_0x182b8c + 13], _0x44bd98, 2850285829);
    _0x124436 = _0x4a7ef4(_0x124436, _0x50b646, _0xbb4653, _0x131746, _0x4c15c8[_0x182b8c + 2], _0x13805d, 4243563512);
    _0x131746 = _0x4a7ef4(_0x131746, _0x124436, _0x50b646, _0xbb4653, _0x4c15c8[_0x182b8c + 7], _0x1472e1, 1735328473);
    _0xbb4653 = _0x4a7ef4(_0xbb4653, _0x131746, _0x124436, _0x50b646, _0x4c15c8[_0x182b8c + 12], _0x3e1baf, 2368359562);
    _0x50b646 = _0x51fef7(_0x50b646, _0xbb4653, _0x131746, _0x124436, _0x4c15c8[_0x182b8c + 5], _0x19ca42, 4294588738);
    _0x124436 = _0x51fef7(_0x124436, _0x50b646, _0xbb4653, _0x131746, _0x4c15c8[_0x182b8c + 8], _0x1d586b, 2272392833);
    _0x131746 = _0x51fef7(_0x131746, _0x124436, _0x50b646, _0xbb4653, _0x4c15c8[_0x182b8c + 11], _0x7a0a36, 1839030562);
    _0xbb4653 = _0x51fef7(_0xbb4653, _0x131746, _0x124436, _0x50b646, _0x4c15c8[_0x182b8c + 14], _0x484ef4, 4259657740);
    _0x50b646 = _0x51fef7(_0x50b646, _0xbb4653, _0x131746, _0x124436, _0x4c15c8[_0x182b8c + 1], _0x19ca42, 2763975236);
    _0x124436 = _0x51fef7(_0x124436, _0x50b646, _0xbb4653, _0x131746, _0x4c15c8[_0x182b8c + 4], _0x1d586b, 1272893353);
    _0x131746 = _0x51fef7(_0x131746, _0x124436, _0x50b646, _0xbb4653, _0x4c15c8[_0x182b8c + 7], _0x7a0a36, 4139469664);
    _0xbb4653 = _0x51fef7(_0xbb4653, _0x131746, _0x124436, _0x50b646, _0x4c15c8[_0x182b8c + 10], _0x484ef4, 3200236656);
    _0x50b646 = _0x51fef7(_0x50b646, _0xbb4653, _0x131746, _0x124436, _0x4c15c8[_0x182b8c + 13], _0x19ca42, 681279174);
    _0x124436 = _0x51fef7(_0x124436, _0x50b646, _0xbb4653, _0x131746, _0x4c15c8[_0x182b8c + 0], _0x1d586b, 3936430074);
    _0x131746 = _0x51fef7(_0x131746, _0x124436, _0x50b646, _0xbb4653, _0x4c15c8[_0x182b8c + 3], _0x7a0a36, 3572445317);
    _0xbb4653 = _0x51fef7(_0xbb4653, _0x131746, _0x124436, _0x50b646, _0x4c15c8[_0x182b8c + 6], _0x484ef4, 76029189);
    _0x50b646 = _0x51fef7(_0x50b646, _0xbb4653, _0x131746, _0x124436, _0x4c15c8[_0x182b8c + 9], _0x19ca42, 3654602809);
    _0x124436 = _0x51fef7(_0x124436, _0x50b646, _0xbb4653, _0x131746, _0x4c15c8[_0x182b8c + 12], _0x1d586b, 3873151461);
    _0x131746 = _0x51fef7(_0x131746, _0x124436, _0x50b646, _0xbb4653, _0x4c15c8[_0x182b8c + 15], _0x7a0a36, 530742520);
    _0xbb4653 = _0x51fef7(_0xbb4653, _0x131746, _0x124436, _0x50b646, _0x4c15c8[_0x182b8c + 2], _0x484ef4, 3299628645);
    _0x50b646 = _0x117be4(_0x50b646, _0xbb4653, _0x131746, _0x124436, _0x4c15c8[_0x182b8c + 0], _0x8d9c63, 4096336452);
    _0x124436 = _0x117be4(_0x124436, _0x50b646, _0xbb4653, _0x131746, _0x4c15c8[_0x182b8c + 7], _0x461c97, 1126891415);
    _0x131746 = _0x117be4(_0x131746, _0x124436, _0x50b646, _0xbb4653, _0x4c15c8[_0x182b8c + 14], _0x209735, 2878612391);
    _0xbb4653 = _0x117be4(_0xbb4653, _0x131746, _0x124436, _0x50b646, _0x4c15c8[_0x182b8c + 5], _0x383e94, 4237533241);
    _0x50b646 = _0x117be4(_0x50b646, _0xbb4653, _0x131746, _0x124436, _0x4c15c8[_0x182b8c + 12], _0x8d9c63, 1700485571);
    _0x124436 = _0x117be4(_0x124436, _0x50b646, _0xbb4653, _0x131746, _0x4c15c8[_0x182b8c + 3], _0x461c97, 2399980690);
    _0x131746 = _0x117be4(_0x131746, _0x124436, _0x50b646, _0xbb4653, _0x4c15c8[_0x182b8c + 10], _0x209735, 4293915773);
    _0xbb4653 = _0x117be4(_0xbb4653, _0x131746, _0x124436, _0x50b646, _0x4c15c8[_0x182b8c + 1], _0x383e94, 2240044497);
    _0x50b646 = _0x117be4(_0x50b646, _0xbb4653, _0x131746, _0x124436, _0x4c15c8[_0x182b8c + 8], _0x8d9c63, 1873313359);
    _0x124436 = _0x117be4(_0x124436, _0x50b646, _0xbb4653, _0x131746, _0x4c15c8[_0x182b8c + 15], _0x461c97, 4264355552);
    _0x131746 = _0x117be4(_0x131746, _0x124436, _0x50b646, _0xbb4653, _0x4c15c8[_0x182b8c + 6], _0x209735, 2734768916);
    _0xbb4653 = _0x117be4(_0xbb4653, _0x131746, _0x124436, _0x50b646, _0x4c15c8[_0x182b8c + 13], _0x383e94, 1309151649);
    _0x50b646 = _0x117be4(_0x50b646, _0xbb4653, _0x131746, _0x124436, _0x4c15c8[_0x182b8c + 4], _0x8d9c63, 4149444226);
    _0x124436 = _0x117be4(_0x124436, _0x50b646, _0xbb4653, _0x131746, _0x4c15c8[_0x182b8c + 11], _0x461c97, 3174756917);
    _0x131746 = _0x117be4(_0x131746, _0x124436, _0x50b646, _0xbb4653, _0x4c15c8[_0x182b8c + 2], _0x209735, 718787259);
    _0xbb4653 = _0x117be4(_0xbb4653, _0x131746, _0x124436, _0x50b646, _0x4c15c8[_0x182b8c + 9], _0x383e94, 3951481745);
    _0x50b646 = _0xf1cbc2(_0x50b646, _0x1bd30e);
    _0xbb4653 = _0xf1cbc2(_0xbb4653, _0x3a839f);
    _0x131746 = _0xf1cbc2(_0x131746, _0x4fc99f);
    _0x124436 = _0xf1cbc2(_0x124436, _0x22fcbb);
  }
  var _0x1fa428 = _0x53a921(_0x50b646) + _0x53a921(_0xbb4653) + _0x53a921(_0x131746) + _0x53a921(_0x124436);
  return _0x1fa428.toLowerCase();
}
function _0x41e775(_0x188a46, _0x55b6c6) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x172674 {
    constructor(_0x513dfb) {
      this.env = _0x513dfb;
    }
    send(_0x34ff61, _0x561555 = "GET") {
      _0x34ff61 = "string" == typeof _0x34ff61 ? {
        url: _0x34ff61
      } : _0x34ff61;
      let _0x1bbe19 = this.get;
      "POST" === _0x561555 && (_0x1bbe19 = this.post);
      "PUT" === _0x561555 && (_0x1bbe19 = this.put);
      return new Promise((_0x5d8d59, _0x11efae) => {
        _0x1bbe19.call(this, _0x34ff61, (_0x4e5405, _0x54dc6b, _0x1ef363) => {
          _0x4e5405 ? _0x11efae(_0x4e5405) : _0x5d8d59(_0x54dc6b);
        });
      });
    }
    get(_0x4015d9) {
      return this.send.call(this.env, _0x4015d9);
    }
    post(_0x54fe97) {
      return this.send.call(this.env, _0x54fe97, "POST");
    }
    put(_0x506307) {
      return this.send.call(this.env, _0x506307, "PUT");
    }
  }
  return new class {
    constructor(_0x1c53e6, _0x2569a1) {
      this.name = _0x1c53e6;
      this.http = new _0x172674(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x2569a1);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(_0x10b8aa, _0x57769e = null) {
      try {
        return JSON.parse(_0x10b8aa);
      } catch {
        return _0x57769e;
      }
    }
    toStr(_0x1aaec9, _0x4c61c7 = null) {
      try {
        return JSON.stringify(_0x1aaec9);
      } catch {
        return _0x4c61c7;
      }
    }
    getjson(_0x2479a6, _0x29d7eb) {
      let _0x52fec8 = _0x29d7eb;
      const _0xc6b659 = this.getdata(_0x2479a6);
      if (_0xc6b659) {
        try {
          _0x52fec8 = JSON.parse(this.getdata(_0x2479a6));
        } catch {}
      }
      return _0x52fec8;
    }
    setjson(_0x332aff, _0x43eff8) {
      try {
        return this.setdata(JSON.stringify(_0x332aff), _0x43eff8);
      } catch {
        return !1;
      }
    }
    getScript(_0xec6fe0) {
      return new Promise(_0x307fff => {
        const _0xb56c07 = {
          url: _0xec6fe0
        };
        this.get(_0xb56c07, (_0xcf84b3, _0x31b218, _0x14ac03) => _0x307fff(_0x14ac03));
      });
    }
    runScript(_0x51f728, _0x4564f1) {
      return new Promise(_0x6941b2 => {
        let _0x572f15 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x572f15 = _0x572f15 ? _0x572f15.replace(/\n/g, "").trim() : _0x572f15;
        let _0x191727 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x191727 = _0x191727 ? 1 * _0x191727 : 20;
        _0x191727 = _0x4564f1 && _0x4564f1.timeout ? _0x4564f1.timeout : _0x191727;
        const _0x17a149 = {
          script_text: _0x51f728,
          mock_type: "cron",
          timeout: _0x191727
        };
        const [_0x1e6413, _0x43c066] = _0x572f15.split("@"),
          _0x4dddd4 = {
            url: "http://" + _0x43c066 + "/v1/scripting/evaluate",
            body: _0x17a149,
            headers: {
              "X-Key": _0x1e6413,
              Accept: "*/*"
            }
          };
        this.post(_0x4dddd4, (_0x5f33d9, _0x2ceb18, _0x307e52) => _0x6941b2(_0x307e52));
      }).catch(_0x795f84 => this.logErr(_0x795f84));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x2f045c = this.path.resolve(this.dataFile),
          _0x550cb1 = this.path.resolve(process.cwd(), this.dataFile),
          _0x4adbd1 = this.fs.existsSync(_0x2f045c),
          _0x879302 = !_0x4adbd1 && this.fs.existsSync(_0x550cb1);
        if (!_0x4adbd1 && !_0x879302) {
          return {};
        }
        {
          const _0xf8dd14 = _0x4adbd1 ? _0x2f045c : _0x550cb1;
          try {
            return JSON.parse(this.fs.readFileSync(_0xf8dd14));
          } catch (_0x4905b7) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x10853e = this.path.resolve(this.dataFile),
          _0x54ce16 = this.path.resolve(process.cwd(), this.dataFile),
          _0x16a156 = this.fs.existsSync(_0x10853e),
          _0x15ccd9 = !_0x16a156 && this.fs.existsSync(_0x54ce16),
          _0x43445c = JSON.stringify(this.data);
        _0x16a156 ? this.fs.writeFileSync(_0x10853e, _0x43445c) : _0x15ccd9 ? this.fs.writeFileSync(_0x54ce16, _0x43445c) : this.fs.writeFileSync(_0x10853e, _0x43445c);
      }
    }
    lodash_get(_0x16b5d1, _0x116c0a, _0x426b7d) {
      const _0x457609 = _0x116c0a.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0xd865c9 = _0x16b5d1;
      for (const _0xfb96e8 of _0x457609) if (_0xd865c9 = Object(_0xd865c9)[_0xfb96e8], void 0 === _0xd865c9) {
        return _0x426b7d;
      }
      return _0xd865c9;
    }
    lodash_set(_0x2a98e5, _0x1cf5ae, _0x49dde4) {
      return Object(_0x2a98e5) !== _0x2a98e5 ? _0x2a98e5 : (Array.isArray(_0x1cf5ae) || (_0x1cf5ae = _0x1cf5ae.toString().match(/[^.[\]]+/g) || []), _0x1cf5ae.slice(0, -1).reduce((_0x434ff0, _0x39686a, _0x1ac31c) => Object(_0x434ff0[_0x39686a]) === _0x434ff0[_0x39686a] ? _0x434ff0[_0x39686a] : _0x434ff0[_0x39686a] = Math.abs(_0x1cf5ae[_0x1ac31c + 1]) >> 0 == +_0x1cf5ae[_0x1ac31c + 1] ? [] : {}, _0x2a98e5)[_0x1cf5ae[_0x1cf5ae.length - 1]] = _0x49dde4, _0x2a98e5);
    }
    getdata(_0x3ad833) {
      let _0x1910f7 = this.getval(_0x3ad833);
      if (/^@/.test(_0x3ad833)) {
        const [, _0x1238e0, _0x400704] = /^@(.*?)\.(.*?)$/.exec(_0x3ad833),
          _0x16e507 = _0x1238e0 ? this.getval(_0x1238e0) : "";
        if (_0x16e507) {
          try {
            const _0x2e975a = JSON.parse(_0x16e507);
            _0x1910f7 = _0x2e975a ? this.lodash_get(_0x2e975a, _0x400704, "") : _0x1910f7;
          } catch (_0x57093c) {
            _0x1910f7 = "";
          }
        }
      }
      return _0x1910f7;
    }
    setdata(_0x7a7132, _0x56c093) {
      let _0x3798c5 = !1;
      if (/^@/.test(_0x56c093)) {
        const [, _0x4bfa78, _0x2b3fbc] = /^@(.*?)\.(.*?)$/.exec(_0x56c093),
          _0x4e7b4b = this.getval(_0x4bfa78),
          _0x3d6e2f = _0x4bfa78 ? "null" === _0x4e7b4b ? null : _0x4e7b4b || "{}" : "{}";
        try {
          const _0x240c17 = JSON.parse(_0x3d6e2f);
          this.lodash_set(_0x240c17, _0x2b3fbc, _0x7a7132);
          _0x3798c5 = this.setval(JSON.stringify(_0x240c17), _0x4bfa78);
        } catch (_0x3743dd) {
          const _0x352757 = {};
          this.lodash_set(_0x352757, _0x2b3fbc, _0x7a7132);
          _0x3798c5 = this.setval(JSON.stringify(_0x352757), _0x4bfa78);
        }
      } else {
        _0x3798c5 = this.setval(_0x7a7132, _0x56c093);
      }
      return _0x3798c5;
    }
    getval(_0x286211) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x286211) : this.isQuanX() ? $prefs.valueForKey(_0x286211) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x286211]) : this.data && this.data[_0x286211] || null;
    }
    setval(_0x4ea03a, _0x2c3253) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x4ea03a, _0x2c3253) : this.isQuanX() ? $prefs.setValueForKey(_0x4ea03a, _0x2c3253) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x2c3253] = _0x4ea03a, this.writedata(), !0) : this.data && this.data[_0x2c3253] || null;
    }
    initGotEnv(_0xdefc11) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0xdefc11 && (_0xdefc11.headers = _0xdefc11.headers ? _0xdefc11.headers : {}, void 0 === _0xdefc11.headers.Cookie && void 0 === _0xdefc11.cookieJar && (_0xdefc11.cookieJar = this.ckjar));
    }
    get(_0x7b7582, _0x5dccb0 = () => {}) {
      const _0x207351 = {
        "X-Surge-Skip-Scripting": !1
      };
      const _0x50d646 = {
        hints: !1
      };
      _0x7b7582.headers && (delete _0x7b7582.headers["Content-Type"], delete _0x7b7582.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x7b7582.headers = _0x7b7582.headers || {}, Object.assign(_0x7b7582.headers, _0x207351)), $httpClient.get(_0x7b7582, (_0x13d5aa, _0x1a8d97, _0xcc76a7) => {
        !_0x13d5aa && _0x1a8d97 && (_0x1a8d97.body = _0xcc76a7, _0x1a8d97.statusCode = _0x1a8d97.status);
        _0x5dccb0(_0x13d5aa, _0x1a8d97, _0xcc76a7);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x7b7582.opts = _0x7b7582.opts || {}, Object.assign(_0x7b7582.opts, _0x50d646)), $task.fetch(_0x7b7582).then(_0x5cf772 => {
        const {
            statusCode: _0x4e3668,
            statusCode: _0x39a83f,
            headers: _0x2235f4,
            body: _0x9c2a31
          } = _0x5cf772,
          _0x3ef0b6 = {
            status: _0x4e3668,
            statusCode: _0x39a83f,
            headers: _0x2235f4,
            body: _0x9c2a31
          };
        _0x5dccb0(null, _0x3ef0b6, _0x9c2a31);
      }, _0x44af22 => _0x5dccb0(_0x44af22))) : this.isNode() && (this.initGotEnv(_0x7b7582), this.got(_0x7b7582).on("redirect", (_0x30e74, _0x5de842) => {
        try {
          if (_0x30e74.headers["set-cookie"]) {
            const _0x108f0e = _0x30e74.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(_0x108f0e, null);
            _0x5de842.cookieJar = this.ckjar;
          }
        } catch (_0x8c91b3) {
          this.logErr(_0x8c91b3);
        }
      }).then(_0x13170f => {
        const {
            statusCode: _0x4f6c37,
            statusCode: _0x1fd0e0,
            headers: _0x175187,
            body: _0x4b9998
          } = _0x13170f,
          _0x279d6f = {
            status: _0x4f6c37,
            statusCode: _0x1fd0e0,
            headers: _0x175187,
            body: _0x4b9998
          };
        _0x5dccb0(null, _0x279d6f, _0x4b9998);
      }, _0x359b14 => {
        const {
          message: _0x5e481f,
          response: _0x34b6e3
        } = _0x359b14;
        _0x5dccb0(_0x5e481f, _0x34b6e3, _0x34b6e3 && _0x34b6e3.body);
      }));
    }
    post(_0x410ed3, _0x424016 = () => {}) {
      const _0x5eeaf8 = {
        "X-Surge-Skip-Scripting": !1
      };
      const _0x1ebc32 = {
        hints: !1
      };
      if (_0x410ed3.body && _0x410ed3.headers && !_0x410ed3.headers["Content-Type"] && (_0x410ed3.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x410ed3.headers && delete _0x410ed3.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x410ed3.headers = _0x410ed3.headers || {}, Object.assign(_0x410ed3.headers, _0x5eeaf8));
        $httpClient.post(_0x410ed3, (_0x1936c2, _0x4dfe8d, _0x44e3cb) => {
          !_0x1936c2 && _0x4dfe8d && (_0x4dfe8d.body = _0x44e3cb, _0x4dfe8d.statusCode = _0x4dfe8d.status);
          _0x424016(_0x1936c2, _0x4dfe8d, _0x44e3cb);
        });
      } else {
        if (this.isQuanX()) {
          _0x410ed3.method = "POST";
          this.isNeedRewrite && (_0x410ed3.opts = _0x410ed3.opts || {}, Object.assign(_0x410ed3.opts, _0x1ebc32));
          $task.fetch(_0x410ed3).then(_0x77454 => {
            const {
                statusCode: _0x23ad9d,
                statusCode: _0x23f4c5,
                headers: _0x199c09,
                body: _0x2b7f7a
              } = _0x77454,
              _0x4964c0 = {
                status: _0x23ad9d,
                statusCode: _0x23f4c5,
                headers: _0x199c09,
                body: _0x2b7f7a
              };
            _0x424016(null, _0x4964c0, _0x2b7f7a);
          }, _0x87da5c => _0x424016(_0x87da5c));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x410ed3);
            const {
              url: _0x1191f1,
              ..._0x2f2150
            } = _0x410ed3;
            this.got.post(_0x1191f1, _0x2f2150).then(_0x2bb206 => {
              const {
                  statusCode: _0x1acc94,
                  statusCode: _0x137125,
                  headers: _0x2760ed,
                  body: _0x57a971
                } = _0x2bb206,
                _0x208f43 = {
                  status: _0x1acc94,
                  statusCode: _0x137125,
                  headers: _0x2760ed,
                  body: _0x57a971
                };
              _0x424016(null, _0x208f43, _0x57a971);
            }, _0x409d7a => {
              const {
                message: _0x5c09ce,
                response: _0x5efa3e
              } = _0x409d7a;
              _0x424016(_0x5c09ce, _0x5efa3e, _0x5efa3e && _0x5efa3e.body);
            });
          }
        }
      }
    }
    put(_0x36e82d, _0x3c25a9 = () => {}) {
      const _0x4ded99 = {
        "X-Surge-Skip-Scripting": !1
      };
      const _0x31dd3e = {
        hints: !1
      };
      if (_0x36e82d.body && _0x36e82d.headers && !_0x36e82d.headers["Content-Type"] && (_0x36e82d.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x36e82d.headers && delete _0x36e82d.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x36e82d.headers = _0x36e82d.headers || {}, Object.assign(_0x36e82d.headers, _0x4ded99));
        $httpClient.put(_0x36e82d, (_0x465890, _0x1ac29d, _0xf3553) => {
          !_0x465890 && _0x1ac29d && (_0x1ac29d.body = _0xf3553, _0x1ac29d.statusCode = _0x1ac29d.status);
          _0x3c25a9(_0x465890, _0x1ac29d, _0xf3553);
        });
      } else {
        if (this.isQuanX()) {
          _0x36e82d.method = "PUT";
          this.isNeedRewrite && (_0x36e82d.opts = _0x36e82d.opts || {}, Object.assign(_0x36e82d.opts, _0x31dd3e));
          $task.fetch(_0x36e82d).then(_0x328eb4 => {
            const {
                statusCode: _0x40c5e6,
                statusCode: _0x466b81,
                headers: _0x24ff85,
                body: _0x22f640
              } = _0x328eb4,
              _0x4d0c4d = {
                status: _0x40c5e6,
                statusCode: _0x466b81,
                headers: _0x24ff85,
                body: _0x22f640
              };
            _0x3c25a9(null, _0x4d0c4d, _0x22f640);
          }, _0x27b771 => _0x3c25a9(_0x27b771));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x36e82d);
            const {
              url: _0x184e00,
              ..._0x530ce5
            } = _0x36e82d;
            this.got.put(_0x184e00, _0x530ce5).then(_0x310734 => {
              const {
                  statusCode: _0x33e521,
                  statusCode: _0x2607ef,
                  headers: _0x512912,
                  body: _0xa43936
                } = _0x310734,
                _0xe42e00 = {
                  status: _0x33e521,
                  statusCode: _0x2607ef,
                  headers: _0x512912,
                  body: _0xa43936
                };
              _0x3c25a9(null, _0xe42e00, _0xa43936);
            }, _0x31e9a5 => {
              const {
                message: _0x517ecc,
                response: _0xc9ef34
              } = _0x31e9a5;
              _0x3c25a9(_0x517ecc, _0xc9ef34, _0xc9ef34 && _0xc9ef34.body);
            });
          }
        }
      }
    }
    time(_0x10ec70) {
      let _0xb376f1 = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "H+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(_0x10ec70) && (_0x10ec70 = _0x10ec70.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x3a40dc in _0xb376f1) new RegExp("(" + _0x3a40dc + ")").test(_0x10ec70) && (_0x10ec70 = _0x10ec70.replace(RegExp.$1, 1 == RegExp.$1.length ? _0xb376f1[_0x3a40dc] : ("00" + _0xb376f1[_0x3a40dc]).substr(("" + _0xb376f1[_0x3a40dc]).length)));
      return _0x10ec70;
    }
    msg(_0x4d6aee = _0x188a46, _0xa500ea = "", _0x12ddfb = "", _0x4bca8e) {
      const _0x24e695 = _0x436205 => {
        if (!_0x436205) {
          return _0x436205;
        }
        if ("string" == typeof _0x436205) {
          return this.isLoon() ? _0x436205 : this.isQuanX() ? {
            "open-url": _0x436205
          } : this.isSurge() ? {
            url: _0x436205
          } : void 0;
        }
        if ("object" == typeof _0x436205) {
          if (this.isLoon()) {
            let _0x17328c = _0x436205.openUrl || _0x436205.url || _0x436205["open-url"],
              _0xb067f3 = _0x436205.mediaUrl || _0x436205["media-url"];
            const _0x4351fc = {
              openUrl: _0x17328c,
              mediaUrl: _0xb067f3
            };
            return _0x4351fc;
          }
          if (this.isQuanX()) {
            let _0x5cb95d = _0x436205["open-url"] || _0x436205.url || _0x436205.openUrl,
              _0x59bf31 = _0x436205["media-url"] || _0x436205.mediaUrl;
            const _0x3c4f0d = {
              "open-url": _0x5cb95d,
              "media-url": _0x59bf31
            };
            return _0x3c4f0d;
          }
          if (this.isSurge()) {
            let _0x4afdbf = _0x436205.url || _0x436205.openUrl || _0x436205["open-url"];
            const _0x490621 = {
              url: _0x4afdbf
            };
            return _0x490621;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x4d6aee, _0xa500ea, _0x12ddfb, _0x24e695(_0x4bca8e)) : this.isQuanX() && $notify(_0x4d6aee, _0xa500ea, _0x12ddfb, _0x24e695(_0x4bca8e)));
      let _0xe80d0b = ["", "==============📣系统通知📣=============="];
      _0xe80d0b.push(_0x4d6aee);
      _0xa500ea && _0xe80d0b.push(_0xa500ea);
      _0x12ddfb && _0xe80d0b.push(_0x12ddfb);
      console.log(_0xe80d0b.join("\n"));
      this.logs = this.logs.concat(_0xe80d0b);
    }
    log(..._0x5aae4f) {
      _0x5aae4f.length > 0 && (this.logs = [...this.logs, ..._0x5aae4f]);
      console.log(_0x5aae4f.join(this.logSeparator));
    }
    logErr(_0x127512, _0x424d2d) {
      const _0x211df1 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x211df1 ? this.log("", "❗️" + this.name + ", 错误!", _0x127512.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x127512);
    }
    wait(_0x428131) {
      return new Promise(_0x3c99ab => setTimeout(_0x3c99ab, _0x428131));
    }
    done(_0x5644c9 = {}) {
      const _0x1392ad = new Date().getTime(),
        _0x52f1df = (_0x1392ad - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x52f1df + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x5644c9);
    }
  }(_0x188a46, _0x55b6c6);
}