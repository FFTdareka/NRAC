let notice = Number(document.getElementsByClassName('notice clearfix')[0].getAttribute('id').replace('notice_', ''));
let lnotice = Number(prompt("NoEs?"));
for (let id = notice; id <= notice + lnotice; id++) {
  for (let id2 = 0; id2 <= 2; id2++) {
    let nid = 'notice_' + id;
    let target0 = document.getElementById(nid);
    let uid0 = target0.children[2].getAttribute('data-uid');
    let imgNo0 = target0.children[2].getAttribute('data-img_no');
    open_pvm(uid0, imgNo0);
  };
};
