let url1 = location.protocol;
let url2 = location.hostname;
if (url1 == 'https:' && url2 == 'netroom.co.jp') {
  let command = prompt('command?');
  if (command == '/status') {
    let status = prompt("status message?");
    status_change(status);
  } else if (command == '/gificon') {
    alert('Test Mode\nThe icon available now is "Hakase and Sakamoto".');
    let s = document.createElement('script');
    s.setAttribute('src', 'https://cdn.discordapp.com/attachments/1102140724130095124/1179633877875183686/3.js?ex=657a7ea9&is=656809a9&hm=084e0abb71b77c250b5cac074297e4e7957a10b68be5de41557ace535c82f820&');
    s.setAttribute('charset', 'UTF-8');
    body.appendChild(s);
  } else if (command == '/send') {
    let textArea = document.getElementById('comment');
    let j = Number(prompt('NoTs?'));
    let sends = prompt('send?');
    let i = 0;
    while (i < j) {
      textArea.value = sends;
      send();
      i
    };
  } else if (command == '/snrbot') {
    url = location.href;
    let msg = 'NRbot β 起動';
    let data = {
      comment: msg,
      type: "1",
      room_id: disp_room_id,
      img: "",
      img_no: "0",
      character_name: 'NRbot β'
    };
    socket.json.emit('send', data);
    let cNum0 = document.getElementsByClassName("comment clearfix");
    let cNum1 = cNum0.length - 1;
    let cNum = cNum0[cNum1].getAttribute("id");
    let cCount = Number(cNum.replace("c", "")) 1;
    let name4 = "";
    let rpsgame = 0;
    let hab = 0;
    let habi = 0;
    let hab2 = 0;
    let habCom = "";
    let hit = 0;
    let blow = 0;
    let answer = "";
    let habQuestion = "";
    let player = [];
    let habsUser = "";
    let habs = 0;
    let hab2ii = 0;
    let hab2j = 0;
    let playerShow = "";
    let playerShow2 = "";
    let find = setInterval(function () {
      if (!(location.href.includes(url) == true)) {
        clearInterval(find);
        alert('部屋を移動した為、強制的にNRbot β を停止させました');
      };
      cNum = 'c'
      cCount;
      let target = document.getElementById(cNum);
      if (target) {
        let comment = target.children[1].children[1].innerText;
        let name2 = target.children[1].children[0].children[1].innerText;
        let name1 = name2.indexOf("@");
        let name = "";
        if (name1 > -1) {
          name = name2.slice(name1 1);
        } else {
          name = name2;
        };
        let userId = target.children[0].children[0].dataset.uid;
        if (cCount % 100 == 0) {
          paging('next');
        };
        if (comment == '/?' || comment == '/help') {
          data.comment = '今使えるコマンド一覧\n/?,/help:今使えるコマンド一覧を表示\n/omikuji:おみくじを引く\n/rpsgame:じゃんけんをする\n/habgame:ヒットアンドブローをする\n/end:このbotを終了させる';
          data.img_no = "0";
          socket.json.emit('send', data);
        } else if (comment == '/omikuji') {
          let omikuji = Math.floor(Math.random() * 8);
          if (omikuji == 0) {
            omikuji = '大凶'
          } else if (omikuji == 1) {
            omikuji = '凶'
          } else if (omikuji == 2) {
            omikuji = '末吉'
          } else if (omikuji == 3) {
            omikuji = '小吉'
          } else if (omikuji == 4) {
            omikuji = '中吉'
          } else if (omikuji == 5) {
            omikuji = '吉'
          } else if (omikuji == 6) {
            omikuji = '大吉'
          } else if (omikuji == 7) {
            omikuji = '大大吉'
          };
          data.comment = name 'さんの運勢は...\n'
          omikuji 'です';
          data.img_no = "0";
          socket.json.emit('send', data);
        } else if (comment == '/rpsgame' && rpsgame == 0) {
          data.comment = name 'さん、今からじゃんけんをします\n「グー」、「チョキ」、「パー」のいずれかの手をコメントして下さい\nそれでは行きますよ！\nじゃんけん...';
          data.img_no = "0";
          socket.json.emit('send', data);
          rpsgame = 1;
          name4 = name;
        } else if ((comment == 'グー' || comment == 'チョキ' || comment == 'パー' || comment == 'ぐー' || comment == 'ちょき' || comment == 'ぱー') && name == name4 && rpsgame == 1) {
          let rps = Math.floor(Math.random() * 3);
          if (rps == 0) {
            if (comment == 'グー' || comment == 'ぐー') {
              data.comment = 'あなたの出した手:グー\n私の出した手:グー\nあいこで...';
              data.img_no = "0";
              socket.json.emit('send', data);
            } else if (comment == 'チョキ' || comment == 'ちょき') {
              data.comment = 'あなたの出した手:チョキ\n私の出した手:グー\n私の勝ち！';
              data.img_no = "0";
              socket.json.emit('send', data);
              rpsgame = 0;
              name2 = '';
            } else if (comment == 'パー' || comment == 'ぱー') {
              data.comment = 'あなたの出した手:パー\n私の出した手:グー\nあなたの勝ち！';
              data.img_no = "0";
              socket.json.emit('send', data);
              rpsgame = 0;
              name2 = '';
            };
          } else if (rps == 1) {
            if (comment == 'グー' || comment == 'ぐー') {
              data.comment = 'あなたの出した手:グー\n私の出した手:チョキ\nあなたの勝ち！';
              data.img_no = "0";
              socket.json.emit('send', data);
              rpsgame = 0;
              name2 = '';
            } else if (comment == 'チョキ' || comment == 'ちょき') {
              data.comment = 'あなたの出した手:チョキ\n私の出した手:チョキ\nあいこで...';
              data.img_no = "0";
              socket.json.emit('send', data);
            } else if (comment == 'パー' || comment == 'ぱー') {
              data.comment = 'あなたの出した手:パー\n私の出した手:チョキ\n私の勝ち！';
              data.img_no = "0";
              socket.json.emit('send', data);
              rpsgame = 0;
              name2 = '';
            };
          } else if (rps == 2) {
            if (comment == 'グー' || comment == 'ぐー') {
              data.comment = 'あなたの出した手:グー\n私の出した手:パー\n私の勝ち！';
              data.img_no = "0";
              socket.json.emit('send', data);
              rpsgame = 0;
              name2 = '';
            } else if (comment == 'チョキ' || comment == 'ちょき') {
              data.comment = 'あなたの出した手:チョキ\n私の出した手:パー\nあなたの勝ち！';
              data.img_no = "0";
              socket.json.emit('send', data);
              rpsgame = 0;
              name2 = '';
            } else if (comment == 'パー' || comment == 'ぱー') {
              data.comment = 'あなたの出した手:パー\n私の出した手:パー\nあいこで...';
              data.img_no = "0";
              socket.json.emit('send', data);
            };
          };
        } else if (comment == '/habgame' && hab == 0) {
          habQuestion = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
          let a = habQuestion.length;
          while (a) {
            let j = Math.floor(Math.random() * a);
            let t = habQuestion[--a];
            habQuestion[a] = habQuestion[j];
            habQuestion[j] = t;
          };
          answer = habQuestion.slice(0, 4);
          data.comment = name 'さん、今からヒットアンドブローを始めます\n私が考えた数字が重複しない4桁の数字を当てて下さい\nもし、あなたが言った数字が\n私が考えた数字の桁の位置と数字があっていたら「ヒット」\n数字は合っているけど桁の位置が違う場合は「ブロー」でお知らせします\n例:正解「1234」解答者の解答「1357」\nこの時、「1ヒット1ブロー」とお知らせします\n10回以内に当てたらクリアです\nでは5秒後に始めます';
          data.img_no = "0";
          socket.json.emit('send', data);
          setTimeout(function () {
            data.comment = '4桁の数字を入力して下さい';
            data.img_no = "0";
            socket.json.emit('send', data);
            hab = 1;
            habi = 0;
            name4 = name;
          }, 5000);
        } else if (/^[0-9]{4}$/.test(comment) == true && hab == 1 && hab2 == 0 && name == name4) {
          hab2 = 1;
          let playerAnswer = comment.split('');
          if (playerAnswer[0] == answer[0]) {
            hit = 1;
          } else if (answer.includes(playerAnswer[0]) == true) {
            blow = 1;
          };
          if (playerAnswer[1] == answer[1]) {
            hit = 1;
          } else if (answer.includes(playerAnswer[1]) == true) {
            blow = 1;
          };
          if (playerAnswer[2] == answer[2]) {
            hit = 1;
          } else if (answer.includes(playerAnswer[2]) == true) {
            blow = 1;
          };
          if (playerAnswer[3] == answer[3]) {
            hit = 1;
          } else if (answer.includes(playerAnswer[3]) == true) {
            blow = 1;
          };
          if (hit == 4) {
            habCom = 'クリア！';
            hab = 0;
          } else if (habi < 9) {
            habi;
            habCom = 'あと' (10 - habi)
            '回';
          } else {
            habCom = 'クリアならず...\n正解は、'
            answer.join("")
            'でした！';
            hab = 0;
          };
          data.comment = 'あなたの解答:'
          comment '\n結果:'
          hit 'ヒット'
          blow 'ブロー\n'
          habCom;
          data.img_no = "0";
          socket.json.emit('send', data);
          hab2 = 0;
          hit = 0;
          blow = 0;
        } else if (comment == '/habgame2' && habs == 0) {
          player = [];
          player.push(name);
          habsUser = userId;
          habs = 1;
          data.comment = '複数人用ヒットアンドブローを始めます\n参加したい方は「join」とコメントして下さい';
          data.img_no = "0";
          socket.json.emit('send', data);
        } else if (comment == 'join' && habs == 1 && player.includes(name) == false) {
          player.push(name);
          data.comment = name 'さんが参加しました';
          data.img_no = "0";
          socket.json.emit('send', data);
        } else if (comment == 'njoin' && habs == 1 && player.includes(name) == true) {
          player.splice(player.indexOf(name), 1);
          data.comment = name 'さんが抜けました';
          data.img_no = "0";
          socket.json.emit('send', data);
        } else if (comment == 'start' && habs == 1 && userId == habsUser) {
          playerShow = player.join();
          hab2ii = player.length;
          while (hab2ii > 0) {
            hab2j = Math.floor(Math.random() * hab2ii);
            hab2t = player[--hab2ii];
            player[hab2ii] = player[hab2j];
            player[hab2j] = hab2t;
          };
          playerShow2 = player.join();
          data.comment = '今回遊ぶプレイヤーは\n'
          playerShow 'です\n順番は\n'
          playerShow2 'です';
          data.img_no = "0";
          socket.json.emit('send', data);
          habs = 0;
          player = [];
        } else if (comment == '/end') {
          if (userId == '63916ce680492a1629076cbe') {
            clearInterval(find);
            data.comment = 'NRbot β 停止';
            data.img_no = "0";
            socket.json.emit('send', data);
          } else {
            data.comment = name 'さんはコマンド「/end」を使う権限がありません';
            data.img_no = "0";
            socket.json.emit('send', data);
          };
        };
        cCount;
      };
    }, 250);
  } else if (command == '/frdelete') {
    let notice = Number(document.getElementsByClassName('notice clearfix')[0].getAttribute('id').replace('notice_', ''));
    let lnotice = Number(prompt('NoEs?'));
    for (let id = notice; id <= notice lnotice; id) {
      let nid = 'notice_'
      id;
      let target0 = document.getElementById(nid);
      let uid0 = target0.children[2].getAttribute('data-uid');
      let imgNo0 = target0.children[2].getAttribute('data-img_no');
      open_pvm(uid0, imgNo0);
    };
  } else if (command == '/frsend') {
    let userName = prompt('name?');
    let userId = prompt('uid?');
    let i = Math.round(Number(prompt('NoTs?')) * 1.2);
    let j = 0;
    let interval = setInterval(function () {
      if (j == i 1) {
        clearInterval(interval);
      } else {
        j;
        let random = Math.random().toString(36).slice(-10);
        let prandom = Math.random().toString(36).slice(-10);
        userName = random;
        $('#i_new_uname').val(userName);
        $('#i_new_passwd').val(prandom);
        $('#i_new_passwd2').val(prandom);
        let data = {};
        data.uname = $('#i_new_uname').val();
        data.passwd = $('#i_new_passwd').val();
        if ($("#i_new_keep_login").prop('checked')) {
          data.keep_login = "1";
          localStorage.setItem('keep_login', 1)
        } else {
          data.keep_login = "0";
          localStorage.setItem('keep_login', 0)
        };
        data.bid = fbid.get();
        socket.json.emit('create_user', data);
        clear_fnc_validator("div_create_user");
        setTimeout(function () {
          let data1 = {
            'selected_uid': userId,
            'msg': "",
            'pvm_type': 2,
            'img_no': "0"
          };
          socket.json.emit('send_pvt_message', data1);
        }, 300);
        setTimeout(function () {
          let data2 = {};
          data2.bid = fbid.get();
          data2.sid = fsid.get();
          close_all_dialog();
          socket.json.emit('logout', data2);
        }, 600);
      };
    }, 900);
  } else if (command == '/frsendforall') {
    let aaa = true;
    let bbb = true;
    let i = 0;
    let j = 0;
    let userId = [];
    let gotUserId;
    while (aaa == true) {
      gotUserId = document.getElementsByClassName('user')[j];
      if (gotUserId == null) {
        aaa = false;
      } else {
        gotUserId = gotUserId.dataset.uid;
        if (!(userId.includes(gotUserId))) {
          userId[i] = gotUserId;
          i;
        };
        j;
      };
    };
    userId.splice(0, 2);
    while (bbb == true) {
      let findId = userId.indexOf("guest");
      if (findId == -1) {
        bbb = false;
      } else {
        userId.splice(findId, 1);
      };
    };
    for (let nots = 0; nots <= userId.length; nots) {
      let data1 = {
        'selected_uid': userId[nots],
        'msg': "",
        'pvm_type': 2,
        'img_no': "0"
      };
      socket.json.emit('send_pvt_message', data1);
    };
  } else if (!(command == null)) {
    alert('invalid command');
  };
} else {
  alert('invalid URL');
};
