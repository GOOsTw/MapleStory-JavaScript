/*
�o�G��p���׾�
2017/02/04 -- ���eNpc By �v�F
From : �Y�ӻݨD��
 */

var need = [4000000, 1];
var hair = false, face = false, finsh = false;
var show = [39100, 24033, 24034, 23037]; //��ܵ����a��
var faces = [24033, 23036, 24034, 23037];// �y�� �M�γ̷s��֪��ʺ��y��
var hairs = [39100, 39110, 39130, 39330, 34340, 39350, 39360];// �y�� �M�γ̷s��֪��ʺ��v��
var status = -1, sels = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else if (mode == 0) {
		if (status >= 2) {
			finsh = true;
		}
		status--;
	} else {
		cm.dispose();
		return;
	}
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (finsh) {
		cm.sendNext("�w��U�����{");
		cm.dispose();
	} else if (status == i++) { // 0
		cm.sendSimple("�A�n, �ڥi�H���A�]�p�s�y��, �аݭn������O?\r\n\r\n#L0##b��v��#l\r\n#L1##r���y��#l\r\n\r\n#L2##d�d�ݥ����s�W���e");
	} else if (status == i++) { // 1
		sels = selection;
		if (sels == 0 || sels == 1) {
			hair = false;
			face = false;
			if (sels == 0) {
				hair = true;
				sel = hairs;
			} else if (sels == 1) {
				face = true;
				sel = faces;
			}
			cm.sendYesNo("��@���ݭn#i" + need[0] + "#" + need[1] + "�ӭ�, �O�_�T�w�~��(�ثe�Ѿl#c" + need[0] + "#)?");
		} else if (sels == 2) {
			var msg = "#d�H�U�������s�W���e\r\n\r\n";
			for (var v = 0; v < show.length; v++) {
				msg += "#k" + (v + 1) + ".#b #t" + show[v] + "##k\r\n";
			}
			cm.sendNext(msg);
			status = -1;
		}
	} else if (status == i++ || !finsh) { // 2

		if (!cm.haveItem(need[0], need[1])) {
			cm.sendNext("�ݭn�����Ƥ���");
			cm.dispose();
			return;
		}
		var rand = Math.floor(Math.random() * sel.length);
		if (hair) {
			cm.setHair(sel[rand]);
		} else if (face) {
			cm.setFace(sel[rand]);
		}
		cm.gainItem(need[0], -need[1]);
		cm.sendYesNo("���ߩ��F#r#z" + sel[rand] + "##k, �аݬO�_�~����");
	} else {
		cm.dispose();
	}
}
