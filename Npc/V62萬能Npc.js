/*
 �v�F��
 2015/2/3
 */

var status = 0;
var a4_;
var a4;
var a3_;
var a3;
var a2_;
var a2;
var a1_;
var a1;
var select_;
var select;
var selec_;
var selec;
var sele;
var sele_;
var sel_;
var sel;
var se;
var s;
var choice;

//�m����
var maps__ = Array(682000403, 251010402, 220060301, 240040600, 250020000, 230040400, 910500000, 910300000, 680010000, 670000100, 980010020, 682000304, 541020600);
var mapsname__ = Array("#r��u����(#b�A�X�������a)", "#r����l���s�Φѱ_2 (#b�A�X�������a)", "#r�`�F���s��(#b�A�X���������a)", "#r�D�_�ޤs�p(#b�A�X�������a)", "#r��ŭ׷ҳ�(#b50~70)", "#r�T��(#b�A�X���������a)", "#r�p��(#b�A�X���������a)", "#r�F�J�|���V�m��(#b�A�X���������a)", "#r�m�\�a��(#b1~30)", "#r�m�\�a��2(#b30~50)", "#r���F�a��(#b�A�X���������a)", "#rBOSS�B�s�a��(#b�A�X�������a)", "#r���w(#b�ݷR�A�άO6��WZ)");
//������
var maps_ = Array(120000000, 102000000, 101000000, 100000000, 103000000, 680000000, 200000000, 110000000, 221000000, 222000000, 230000000, 211000000, 220000000, 260000000, 250000000, 105040300, 600000000, 682000000, 800000000, 801000000, 240000000, 270000100, 970000000, 130000200, 702100000, 501000000, 802000101, 742000000);
var mapsname_ = Array("#b�H����#k", "#b�i�h����#k", "#b�]�k�˪L#k", "#b�}�b���#k", "#b�Z������#k", "#b���B�p��#k", "#b�ѪŤ���#k", "#b��������#k", "#b�a�y���m����#k", "#b���ܧ�#k", "#b���@��#k", "#b�B�쳷��#k", "#b���㫰#k", "#b�F�z#k", "#b�Z�L����#k", "#b�_�ۧ�#k", "#b�s����#k", "#b�x���v���f#k", "#b�����#k", "#b�L�M��#k", "#b�����#k", "#r�ɶ�����(�����R�A�D�����άO�S��wz�~��i)#k", "#r��Ӹt�a(����P�W)#k", "#r�C�p��(����P�W)#k", "#r�֪L�x(����P�W)#k", "#r�����x�q(����P�W)#k", "#r���ӪF��(����P�W)#k", "#r�x�_101(����P�W)#k");

//BOSS��
var selectedMap = 910000000;
var maps = Array(220080000, 800020130, 501030104, 800040410, 240040700, 211042300, 270050000);
var mapsname = Array("#r�Թϴ�#k", "#r�Ѫ�", "#r���⨸��#k", "#r�Ѭ�#k", "#r�t���s��", "#r�ݼɪ��]", "#r�֥d��#k");

//����npc
var slot;

//¾�~
var jobName;
var job;

//�s��Z��
var weapon = Array(1302000, 1322005, 1302017, 1302132);
//�̷s�Ȥl
var chair = Array(3010281, 3010877, 3010879, 3010754, 3010659);
//�̷s�I��
var equip = Array(1052684, 1702493, 1702494, 1052574, 1052644);



//��ΥN�X------------------
var G_beauty = 0;
var G_haircolor = Array();
var G_skin = Array(0, 1, 2, 3, 4);
var G_hair = Array(34290, 34280, 34270, 34260, 34250, 34240, 34230, 34300, 32130, 34200, 34220, 34120, 34130, 34150, 34160, 34170, 34180, 34110, 33020, 33010, 31980, 31970, 31960, 31900, 34010, 33030, 34040, 34090, 34100, 31850, 31820, 31810, 31800, 31790, 31780, 31770, 31760, 31750, 31740, 31680, 31400, 31120, 31110, 31090, 31080, 31170, 31180, 31830, 31840, 31850, 31860, 31870, 31880, 31890, 31910, 31920, 31930, 31940, 31950, 33000, 34000);
var G_hairnew = Array();
var G_face = Array(21029, 21035, 21034, 21030, 21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21016, 21017, 21018, 21019, 21020, 21021, 21022);
var G_facenew = Array();
var G_colors = Array();
//�k�ʥ~�[�@

var B_beauty = 0;
var B_haircolor = Array();
var B_skin = Array(0, 1, 2, 3, 4);
var B_hair = Array(32040, 32030, 33220, 33210, 33200, 33080, 33100, 33110, 33120, 33140, 33150, 33160, 33170, 32120, 32110, 32100, 32090, 32080, 32070, 32060, 32050, 30960, 30970, 30980, 33130, 34140, 33030, 33090, 30920, 30990, 30880, 30850, 30840, 30100, 30800, 30730, 30700, 30680, 30660, 30670, 30760, 30770, 30790, 30800, 30810, 30820, 30950, 30940, 30930, 30910, 30900, 30890, 30870, 30860);
var B_hairnew = Array();
var B_face = Array(20037, 20036, 20032, 20031, 20029, 20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023);
var B_facenew = Array();
var B_colors = Array();
//�k�ʥ~�[

//��ΥN�X------------------





function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var clickme = "#r�I#b��#l\r\n\r\n";
    var clickme2 = "#b�I#r��#l\r\n\r\n";
    var hairfacetext = "�ʬӮa�v��/�y��";
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("#e#g�i�\��ϡj\r\n\r\n" +
                    "#L0#" + clickme +
                    "#g�i¾�~�Χޯ�....���\��j\r\n\r\n" +
                    "#L1#" + clickme +
                    "#g�i�v��/�v��/�y�Χ󴫡j\r\n\r\n " +
                    "#L2# #r�k" + hairfacetext + "\r\n" +
                    "#L3# #b�k" + hairfacetext + "#r<Hot>#l\r\n\r\n" +
                    "#g�i�ʶR�̷s�I�ˡj\r\n\r\n" +
                    "#L4#" + clickme2 +
                    "#g�i�s�}�o�\��j\r\n\r\n" +
                    "#L5##r�Ǫ��I��#l\r\n\r\n" +
                    "#g�i�^�����ߡj\r\n" +
                    "#b(#g�Y�L#rGM#g�b���a�ϡA��Rc�q�������Y�H�W���޲z��#b)\r\n\r\n" +
                    "#L6##b�I#r��#b�ǰe�h�^������");
        } else if (status == 1) {
            s = selection;
            if (s >= 0 && s <= 6) {
                var g = cm.getPlayer().getGender();
                if (s == 0) {
                    cm.sendSimple("#e#g�\���\r\n\r\n" +
                            "#L0##b�i#d�d�ߦۤv��e��T#b�j\r\n" +
                            "#L1##b�i#r�̷s�Ȥl#b�j\r\n" +
                            "#L2##b�i�ʧO�ܧ�j\r\n" +
                            "#L3##b�i����ն��j\r\n" +
                            "#L4##b�i�I���f���j\r\n" +
                            "#L5##b�i�a�϶ǰe�j\r\n" +
                            "#L6##b�i�s��Z���j\r\n" +
                            "#L7##b�i#r�Ыؤ��|#b�j\r\n" +
                            "#L8##b�i�d������j\r\n" +
                           // "#L9##b�i¾�~�˳ơj\r\n" + // �L
                            "#L10##b�i�ƭȭ��s�j\r\n" +
                            "#L11##b�i�s���ʶR�j\r\n" +
                            "#L12##b�i�ܮw�޲z�j\r\n" +
                            "#L13##b�i����c��j\r\n" +
                            "#L14##b�i#r���ݩʸ�#b�j\r\n" //+
                         //   "#L15##b�i#r�����˳�#b��#r�۴���#b�ʶR#k�j\r\n" + // �̫᪺#k���ӬO�L�̦h�Ϊ��a �����D0.0
                         //   "#L16##b�i�������j\r\n"
                                    );//�ӪA�ﶵ�L�� 
                    se = 0;
                } else if (s == 1) {
                    var j = "#b��¾#r";
                    cm.sendSimple("#g¾�~\r\n\r\n" +
                            "#L0#" + j + "(1��)\r\n" +
                            "#L1#" + j + "(2��)\r\n" +
                            "#L2##b�ޯ����\r\n" +
                            "#L3##b�խ����ŪA��");
                    se = 1;
                } else if (s == 2) {
                    if (g == 0) {
                        cm.sendOk("�گ���#r�k��VIP#k���Y�����A�p�G�A�O�k�ʪ��ܴN�h��ڪ��f��!");
                        cm.dispose();
                        return;
                    }
                    cm.sendSimple("�K!�ڬO�����F�o�̪�#r�k��VIP�|��#k�A�Ȫ��I�A�Q����˪�����?\r\n#L0#����#l\r\n#L1#�v��#l\r\n#L2#�Y�v�C��#l\r\n#L3#����#l\r\n#L4#�����C��#l");
                    se = 2;
                } else if (s == 3) {
                    if (g == 1) {
                        cm.sendOk("�گ���#r�k��VIP�|��#k���Y�����A�p�G�A�O�k�ʪ��ܴN�h��ڪ��f��!");//�쥻�� "�A���O�k��= =�Ч�t�@��GM"  �t�Ӧh�F�a!?
                        cm.dispose();
                        return;
                    }
                    cm.sendSimple("�A�n!�b�o�̧ڥi�H���A���ܳy��,�аݧA�ݭn����A��?\r\n#L0#����#l\r\n#L1#�v��#l\r\n#L2#�v��#l\r\n#L3#����#l\r\n#L4#����#l");
                    se = 3;
                } else if (s == 4) {
                    var t = "#h #\r\n �z�n�A�ڭ̷̳s���I�ˡA�{�b�u�n�@�ӥu�n10���p\r\n�n�ʶR�Ы�Enter��\r\n";
                    for (var i = 0; i < equip.length; i++) {
                        t += "\r\n#L" + i + "##v" + equip[i] + "##t" + equip[i] + "##l";
                    }
                    cm.sendSimple(t);
                    se = 4;
                } else if (s == 5) {
                    cm.sendSimple("�ϥΫe�аO�o������w�}�A���M�ܢޢѷ|�L�ĪG\r\n\r\n#L0#�I���s��(�Х��ܦۥѤ@�})");
                    se = 5;
                } else if (s == 6) {
                    cm.getPlayer().changeMap(240070000);
                    cm.dispose();
                }
            } else {
                cm.dispose();
            }
        } else if (status == 2) {
            if (se == 0) {
                var h = cm.getHour();
                var m = cm.getMin();
                var s = cm.getSec();
                var la = h + "��" + m + "��" + s + "��";
                if (selection == 0) {
                    cm.sendOk("#k#e�z��e�C�����p�A��#n#r�é]�a��\r\n" + //�쪩��sendYesNo
                            "#k#e�Ұʥ��\�઺�ɶ���#n#r" + la +
                            "\r\n#k#e�z��e����ͦ��Ƭ�:#n#r " + cm.getPlayer().getReborns() +
                            "\r\n#k#e��e���Ŭ�:#r#n" + cm.getPlayer().getLevel() +
                            "\r\n#k#e�Ѿl��O�I�Ƭ�#r#n" + cm.getPlayer().getRemainingAp() +
                            "\r\n#k#e��e�a�ϥN�X��#n#r" + cm.getPlayer().getMapId() +
                            "\r\n#k#e��e���W�����ƶq��#r#n" + cm.getPlayer().getMeso());
                    cm.dispose();
                } else if (selection == 1) {
                    var t = "#h # �z�n�A�{�b�}�����K�O�Ȥl\r\n�ݭn���ܫ�Enter��N�i���\r\n";
                    for (var i = 0; i < chair.length; i++) {
                        t += "\r\n#L" + i + "##v" + chair[i] + "##t" + chair[i] + "##l";
                    }
                    cm.sendSimple(t);
                    sel_ = 0;
                } else if (selection == 2) {
                    cm.sendYesNo("#e#b�N���D�A��{�b���ʧO�D�`�����N!!\r\n" +
                            "�ڲ{�b���A�����\r\n" +
                            "��#r�T�{#b�ܦ��t�~�@�өʧO\r\n" +
                            "���n�N#r����#b���H!!");
                    sel_ = 1;
                } else if (selection == 3) {
                    var selStr = "��ܧA���ت��a.#b";
                    for (var i = 0; i < maps.length; i++) {
                        selStr += "\r\n#L" + i + "#" + mapsname[ i ] + "";
                    }
                    cm.sendSimple(selStr);
                    sel_ = 2;
                } else if (selection == 4) {
                    cm.sendSimple("�ڬO#r�f���I���H�� #d�o�쪱�a! �z�ݭn�ﴫ�f����?:\r\n\r\n" +
                            "#L0#20������ = 1��#r���p\r\n\r\n" +
                            "#L1#1�Ӫ��p = 20������");
                    sel_ = 3;
                } else if (selection == 5) {
                    cm.sendSimple("�ڥi�H�i��a�϶ǰe�A�аݭn�����̧r�H\r\n\r\n#r" +
                            "#L0#����\r\n" +
                            "#L1#����\r\n" +
                            "#L2#�m�\�M��\r\n");
                    sel_ = 4;
                } else if (selection == 6) {
                    var t = "#e�ڬO�s��˧I���H��\r\n " +
                            "#d�o�쪱�a!\r\n" +
                            "�ݭn�I��0���˳ƶ�?\r\n";
                    for (var i = 0; i < weapon.length; i++) {
                        t += "\r\n#b�@��#L" + i + "##v" + weapon[i] + "##t" + weapon[i] + "##l";
                    }
                    cm.sendSimple(t);
                    sel_ = 5;
                } else if (selection == 7) {
                    cm.warp(200000301);
                    cm.dispose();
                } else if (selection == 8) {
                    cm.sendSimple("�z�n�A�ڬO�d���o��� �A�n����?~#k\r\n#k#L0##d#i5000000##k#k#L1##d#i5000001##k#k#L2##d#i5000002##k#k#L3##d#i5000003##k#k#L4##d#i5000004##k#k#L5##d#i5000005##k#k\r\n#L6##d#i5000006##k#k#L7##d#i5000007##k#k#L8##d#i5000008##k#k#L9##d#i5000009##k#k#L10##d#i5000010##k#k#L11##d#i5000011##k#k\r\n#L12##d#i5000012##k#k#L13##d#i5000013##k#k#L14##d#i5000014##k#k#L15##d#i5000016##k#k#L16##d#i5000017##k#k#L17##d#i5000018##k#k\r\n#L18##d#i5000020##k#k#L19##d#i5000021##k#k#L20##d#i5000022##k#k#L21##d#i5000023##k#k#L22##d#i5000024##k#k#L23##d#i5000025##k#k\r\n#L24##d#i5000026##k#k#L25##d#i5000027##k#k#L26##d#i5000029##k#k#L27##d#i5000030##k#k#L28##d#i5000031##k#k#L29##d#i5000032##k#k\r\n#L30##d#i5000033##k#k#L31##d#i5000036##k#k#L32##d#i5000041##k#k#L33##d#i5000048##k#k#L34##d#i5000049##k#k#L35##d#i5000050##k#k\r\n#L36##d#i5000051##k#k#L37##d#i5000052##k#k#L38##d#i5000053##k#k#L39##d#i5000058##k#k#L40##d#i5000054##k#k#L41##d#i5000046##k#k\r\n#L42##d#i5000043#");
                    sel_ = 6;
                } else if (selection == 10) {
                    cm.sendSimple("(�����ڭn���p�G���s�H��,�ᮬGM������)��~�[��O�ȫܷдo��?�ݬݳo!(#r#k) \b\r\n#L0#������_#l\r\n#L1#�^�_�O�q#l\r\n#L2#�^�_�ӱ�#l\r\n#L3#�^�_���O#l\r\n#L4#�^�_���B#l\r\n#L5#�����[��O�q#l\r\n#L6#�����[��ӱ�#l\r\n#L7#�����[�촼�O#l\r\n#L8#�����[�쩯�B");
                    sel_ = 7;
                } else if (selection == 11) {
                    cm.sendSimple("�z�n�A�ڬO#e#d��z�c��ӤH#k#n\r\n#e#d�аݱz�n�R���@�س�z?#k#n\r\n#r#L2##e#i5390000# ����߱���z #n#l#b1000��(1����)#k\r\n#r#n #r#L5##e#i5390001# �ն������߱���z #n#l#b1000��(1����)#k\r\n#L8##e#i5390002# �ʷR�߱���z #n#l#b1000��(1����)#k\r\n#r#L11##e#i5076000# �D���z #n#l#b1000��(1����)#k\r\n#r#L12##e#i5390004# #t5390004# #n#l#b1000��(1����)#k");
                    sel_ = 8;
                } else if (selection == 12) {
                    cm.openNpc(1022005);
                } else if (selection == 13) {
                    cm.openShop(13017);
                    cm.dispose();
                } else if (selection == 14) {
                    cm.sendSimple("#e#b�ڬO���ƭȸ˳ƧI���H��\r\n\r\n" +
                            "#L0##k1�ӷ��p= #v1112942##r+200\r\n" +
                            "#L1##k10�ӷ��p= #v1112942##r+1000\r\n" +
                            "#L2##k20�ӷ��p= #v1112942##r+2000\r\n" +
                            "#L3##k1�ӷ��p= #v1052723##r+200\r\n" +
                            "#L4##k10�ӷ��p= #v1052723##r+1000\r\n" +
                            "#L5##k20�ӷ��p= #v1052723##r+2000\r\n"
                            );
                    sel_ = 9;
                }
                sel = 0;
            } else if (se == 1) {
                if (selection == 0) {
                    cm.sendSimple("�o�̬��@����¾�A�A�Q�����G\r\n#r #L1#�C�h#l   #L11#�]�k�v#l   #L21#�}�b��#l   #L28#�s��#l   #L35#���s#l");
                    sel_ = 0;
                } else if (selection == 1) {
                    var j = cm.getPlayer().getJob().getId();
                    if (j == 0) { //��ߪ�
                        cm.sendOk("�ĤG����¾������G����#r1��#k�B�F��#r30��#k�C");
                        cm.dispose();
                        return;
                    } else if (j == 100 || j == 200 || j == 300 || j == 400 || j == 500) {
                        if (cm.getPlayer().getLevel() < 30) {
                            cm.sendOk("�A�٨S�F��#r30��#k�C");
                            cm.dispose();
                            return;
                        }
                        switch (j) {
                            case 100 :
                                cm.getPlayer().setJob(110);
                                break;
                            case 200:
                                cm.getPlayer().setJob(210);
                                break;
                            case 300:
                                cm.getPlayer().setJob(310);
                                break;
                            case 400:
                                cm.getPlayer().setJob(410);
                                break;
                            case 500:
                                cm.getPlayer().setJob(510);
                                break;
                        }
                        cm.sendOk("��¾���\��");
                        cm.dispose();
                        return;
                    } else if (j == 110 || j == 210 || j == 310 || j == 410 || j == 510) {
                        if (cm.getPlayer().getLevel() < 70) {
                            cm.sendOk("�A�٨S�F��#r70��#k�C");
                            cm.dispose();
                            return;
                        }
                        switch (j) {
                            case 110 :
                                cm.getPlayer().setJob(111);
                                break;
                            case 210:
                                cm.getPlayer().setJob(211);
                                break;
                            case 310:
                                cm.getPlayer().setJob(311);
                                break;
                            case 410:
                                cm.getPlayer().setJob(411);
                                break;
                            case 510:
                                cm.getPlayer().setJob(511);
                                break;
                        }
                        cm.sendOk("��¾���\��");
                        cm.dispose();
                        return;
                    } else if (j == 111 || j == 211 || j == 311 || j == 411 || j == 511) {
                        if (cm.getPlayer().getLevel() < 120) {
                            cm.sendOk("�A�٨S�F��#r120��#k�C");
                            cm.dispose();
                            return;
                        }
                        switch (j) {
                            case 111 :
                                cm.getPlayer().setJob(112);
                                break;
                            case 211:
                                cm.getPlayer().setJob(212);
                                break;
                            case 311:
                                cm.getPlayer().setJob(312);
                                break;
                            case 411:
                                cm.getPlayer().setJob(412);
                                break;
                            case 511:
                                cm.getPlayer().setJob(512);
                                break;
                        }
                        cm.sendOk("��¾���\��");
                        cm.dispose();
                        return;
                    }
                    sel_ = 1;
                } else if (selection == 2) {
                    cm.maxSkills();
                } else if (selection == 3) {
                    cm.sendGetNumber("�аݧA�n�U���X��?. \r\n�@���ݭn10W�� ", 1, 1, 250);
                    sel_ = 2;
                }
                sel = 1;
            } else if (se == 2) {
                if (selection == 0) {
                    G_beauty = 1;
                    cm.sendStyle("��ܧA���w��?", G_skin);
                } else if (selection == 1) {
                    G_beauty = 2;
                    G_haircolor = Array();
                    for (var i = 0; i < G_hair.length; i++) {
                        G_haircolor.push(G_hair[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                    cm.sendStyle("��ܧA���w��?", G_haircolor);
                } else if (selection == 2) {
                    G_beauty = 3;
                    G_haircolor = Array();
                    var current = parseInt(cm.getChar().getHair() / 10) * 10;
                    for (var i = 0; i < 8; i++) {
                        G_haircolor.push(current + i);
                    }
                    cm.sendStyle("��ܧA���w��?", G_haircolor);
                } else if (selection == 3) {
                    G_beauty = 4;
                    G_facenew = Array();
                    for (var i = 0; i < G_face.length; i++) {
                        G_facenew.push(G_face[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
                    }
                    cm.sendStyle("��ܧA���w��?", G_facenew);
                } else if (selection == 4) {
                    G_beauty = 5;
                    var current = cm.getChar().getFace() % 100 + 21000;
                    G_colors = Array();
                    G_colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700);
                    cm.sendStyle("��ܧA���w��?", G_colors);
                }
                sel = 2;
            } else if (se == 3) {
                if (selection == 0) {
                    B_beauty = 1;
                    cm.sendStyle("��@�ӧa!", B_skin);
                } else if (selection == 1) {
                    B_beauty = 2;
                    B_hairnew = Array();
                    for (var i = 0; i < B_hair.length; i++) {
                        B_hairnew.push(B_hair[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                    cm.sendStyle("��@�ӧa!", B_hairnew);
                } else if (selection == 2) {
                    B_beauty = 3;
                    B_haircolor = Array();
                    var current = parseInt(cm.getChar().getHair() / 10) * 10;
                    for (var i = 0; i < 8; i++) {
                        B_haircolor.push(current + i);
                    }
                    cm.sendStyle("��@�ӧa!", B_haircolor);
                } else if (selection == 3) {
                    B_beauty = 4;
                    B_facenew = Array();
                    for (var i = 0; i < B_face.length; i++) {
                        B_facenew.push(face[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
                    }
                    cm.sendStyle("��@�ӧa!", B_facenew);
                } else if (selection == 4) {
                    B_beauty = 5;
                    var current = cm.getChar().getFace() % 100 + 20000;
                    B_colors = Array();
                    B_colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700);
                    cm.sendStyle("��@�ӧa!", B_colors);
                }
                sel = 3;
            } else if (se == 4) {
                cm.sendYesNo("�A�T�w�n�o�ӶܡH" + "\r\n#v" + equip[selection] + "##t" + equip[selection] + "#");
                choice = selection;
                sel = 4;
            } else if (se == 5) {
                if (selection == 0) {
                    if (cm.getPlayer().getMapId() != 910000001) {
                        cm.sendOk("�z�S���b�ۥѤ@�}��");//�쪩�S��
                        cm.dispose();
                        return;
                    }
                    cm.sendSimple("#L0#�ڭn�۴��t���s��\r\n#L1#�ڥu�O���p���I��A �藍�_!");
                }
                sel = 5;
            }
        } else if (status == 3) {
            if (sel == 0) {
                if (sel_ == 0) {
                    cm.sendYesNo("�A�T�w�n�o�ӶܡH" + "\r\n#v" + chair[selection] + "##t" + chair[selection] + "#");
                    choice = selection;
                    sele_ = 0;
                } else if (sel_ == 1) {
                    cm.sendSimple("�ثe�u���� #b2#k ���ܩʴڦ�,�ҥH�п�ܤ@��!\r\n\r\n" +
                            "#L0#�����ڦ�(250000����)" +
                            "#L1#�Q�ڴڦ�(500000����)");
                    sele_ = 1;
                } else if (sel_ == 2) {
                    cm.sendYesNo("�A�u���n�h " + mapsname[selection] + "��?");
                    selectedMap = selection;
                    sele_ = 2;
                } else if (sel_ == 3) {
                    if (selection == 0) {
                        if (cm.getPlayer().getMeso() < 2000000000) {
                            cm.sendOK("�z����������");
                            cm.dispose();
                            return;
                        }
                        if (!cm.canHold(4001129)) {
                            cm.sendOK("�z���I�]�����j");
                            cm.dispose();
                            return;
                        }
                        cm.gainMeso(-2000000000);
                        cm.gainItem(4001129, 1);
                    } else if (selection == 1) {
                        if (cm.getPlayer().getMeso() > 100000000) {
                            cm.sendOK("�z�������Ӧh�F �u��a1e��");
                            cm.dispose();
                            return;
                        }
                        if (!cm.haveItem(4001129)) {
                            cm.sendOK("�z�S������#v4001129#�r");
                            cm.dispose();
                            return;
                        }
                        cm.gainItem(4001129, -1);
                        cm.gainMeso(2000000000);
                    }
                } else if (sel_ == 4) {
                    if (selection == 0) {
                        var selStr = "��ܧA���ت��a.#b";
                        for (var i = 0; i < maps_.length; i++) {
                            selStr += "\r\n#L" + i + "#" + mapsname_[ i ] + "";
                        }
                        cm.sendSimple(selStr);
                        sele_ = 3;
                    } else if (selection == 1) {
                        var selStr = "��ܧA���ت��a.#b";
                        for (var i = 0; i < maps.length; i++) {
                            selStr += "\r\n#L" + i + "#" + mapsname[ i ] + "";
                        }
                        cm.sendSimple(selStr);
                        sele_ = 4;
                    } else if (selection == 2) {
                        var selStr = "��ܧA���ت��a.#b";
                        for (var i = 0; i < maps__.length; i++) {
                            selStr += "\r\n#L" + i + "#" + mapsname__[ i ] + "";
                        }
                        cm.sendSimple(selStr);
                        sele_ = 5;
                    }
                } else if (sel_ == 5) {
                    cm.sendYesNo("�A�T�w�n�o�ӶܡH" + "\r\n#v" + weapon[selection] + "##t" + weapon[selection] + "#");
                    choice = selection;
                    sele_ = 6;
                } else if (sel_ == 6) {
                    switch (selection) {
                        case 0:
                            cm.gainItem(5000000, 1);
                            break;
                        case 1:
                            cm.gainItem(5000001, 1);
                            break;
                        case 2:
                            cm.gainItem(5000002, 1);
                            break;
                        case 3:
                            cm.gainItem(5000003, 1);
                            break;
                        case 4:
                            cm.gainItem(5000004, 1);
                            break;
                        case 5:
                            cm.gainItem(5000005, 1);
                            break;
                        case 6:
                            cm.gainItem(5000006, 1);
                            break;
                        case 7:
                            cm.gainItem(5000007, 1);
                            break;
                        case 8:
                            cm.gainItem(5000008, 1);
                            break;
                        case 9:
                            cm.gainItem(5000009, 1);
                            break;
                        case 10:
                            cm.gainItem(5000010, 1);
                            break;
                        case 11:
                            cm.gainItem(5000011, 1);
                            break;
                        case 12:
                            cm.gainItem(5000012, 1);
                        case 13:
                            cm.gainItem(5000013, 1);
                            break;
                        case 14:
                            cm.gainItem(5000014, 1);
                            break;
                        case 15:
                            cm.gainItem(5000016, 1);
                            break;
                        case 16:
                            cm.gainItem(5000017, 1);
                            break;
                        case 17:
                            cm.gainItem(5000018, 1);
                            break;
                        case 18:
                            cm.gainItem(5000020, 1);
                            break;
                        case 19:
                            cm.gainItem(5000021, 1);
                            break;
                        case 20:
                            cm.gainItem(5000022, 1);
                            break;
                        case 21:
                            cm.gainItem(5000023, 1);
                            break;
                        case 22:
                            cm.gainItem(5000024, 1);
                            break;
                        case 23:
                            cm.gainItem(5000025, 1);
                            break;
                        case 24:
                            cm.gainItem(5000026, 1);
                            break;
                        case 25:
                            cm.gainItem(5000027, 1);
                            break;
                        case 26:
                            cm.gainItem(5000029, 1);
                            break;
                        case 27:
                            cm.gainItem(5000030, 1);
                            break;
                        case 28:
                            cm.gainItem(5000031, 1);
                            break;
                        case 29:
                            cm.gainItem(5000032, 1);
                            break;
                        case 30:
                            cm.gainItem(5000033, 1);
                            break;
                        case 31:
                            cm.gainItem(5000036, 1);
                            break;
                        case 32:
                            cm.gainItem(5000041, 1);
                            break;
                        case 33:
                            cm.gainItem(5000048, 1);
                            break;
                        case 34:
                            cm.gainItem(5000049, 1);
                            break;
                        case 35:
                            cm.gainItem(5000050, 1);
                            break;
                        case 36:
                            cm.gainItem(5000051, 1);
                            break;
                        case 37:
                            cm.gainItem(5000052, 1);
                            break;
                        case 38:
                            cm.gainItem(5000053, 1);
                            break;
                        case 39:
                            cm.gainItem(5000058, 1);
                            break;
                        case 40:
                            cm.gainItem(5000054, 1);
                            break;
                        case 41:
                            cm.gainItem(5000046, 1);
                            break;
                        case 42:
                            cm.gainItem(5000043, 1);
                            break;
                    }
                    cm.sendOk("���A�d���F!");
                    cm.dispose();
                } else if (sel_ == 7) {
                    if (selection == 0) {
                        var p = cm.c.getPlayer();
                        var totAp = p.getRemainingAp() + p.getStr() + p.getDex() + p.getInt() + p.getLuk();
                        if (totAp < 30016) {
                            cm.resetStats();
                            cm.sendOk("�n�F. �ݬݤ@�U�A����O��");
                            cm.dispose();
                        } else if (totAp >= 30016) {
                            cm.sendOk("Your total AP is more than 30000. Please reset seperately.");
                            cm.dispose();
                        }
                    } else if (selection == 1) {
                        var p = cm.c.getPlayer();
                        var totAp = p.getRemainingAp() + p.getStr();
                        if (totAp < 30004) {
                            p.setStr(4);
                            p.setRemainingAp(totAp - 4);
                            cm.sendOk("Okay. Your stats have been reset!");
                            cm.dispose();
                        } else if (totAp >= 30004) {
                            cm.sendOk("�n�F. �ݬݤ@�U�A����O��.");
                            cm.dispose();
                        }
                    } else if (selection == 2) {
                        var p = cm.c.getPlayer();
                        var totAp = p.getRemainingAp() + p.getDex();
                        if (totAp < 30004) {
                            p.setDex(4);
                            p.setRemainingAp(totAp - 4);
                            cm.sendOk("Okay. Your stats have been reset!");
                            cm.dispose();
                        } else if (totAp >= 30004) {
                            cm.sendOk("�n�F. �ݬݤ@�U�A����O��.");
                            cm.dispose();
                        }
                    } else if (selection == 3) {

                        var p = cm.c.getPlayer();
                        var totAp = p.getRemainingAp() + p.getInt();
                        if (totAp < 30004) {
                            p.setInt(4);
                            p.setRemainingAp(totAp - 4);
                            cm.sendOk("Okay. Your stats have been reset!");
                            cm.dispose();
                        } else if (totAp >= 30004) {
                            cm.sendOk("�n�F. �ݬݤ@�U�A����O��.");
                            cm.dispose();
                        }
                    } else if (selection == 4) {
                        var p = cm.c.getPlayer();
                        var totAp = p.getRemainingAp() + p.getLuk();
                        if (totAp < 30004) {
                            p.setLuk(4);
                            p.setRemainingAp(totAp - 4);

                            cm.sendOk("Okay. Your stats have been reset!");
                            cm.dispose();
                        } else if (totAp >= 30004) {
                            cm.sendOk("�n�F. �ݬݤ@�U�A����O��.");
                            cm.dispose();
                        }
                    } else if (selection == 5) {
                        var p = cm.c.getPlayer();
                        var newStr = p.getRemainingAp() + p.getStr();
                        if (newStr < 30000) {
                            p.setStr(newStr);
                            p.setRemainingAp(0);
                            cm.sendOk("�n�F. �ݬݤ@�U�A����O��!");
                            cm.dispose();
                        } else if (newStr >= 30000) {
                            p.setStr(29999);
                            p.setRemainingAp(newStr - 29999);

                            cm.sendOk("�n�F. �ݬݤ@�U�A����O��");
                            cm.dispose();
                        }
                    } else if (selection == 6) {
                        var p = cm.c.getPlayer();
                        var newDex = p.getRemainingAp() + p.getDex();
                        if (newDex < 30000) {
                            p.setDex(newDex);
                            p.setRemainingAp(0);

                            cm.sendOk("�n�F. �ݬݤ@�U�A����O��!");
                            cm.dispose();
                        } else if (newDex >= 30000) {
                            p.setDex(29999);
                            p.setRemainingAp(newDex - 29999);

                            cm.sendOk("�n�F. �ݬݤ@�U�A����O��!");
                            cm.dispose();
                        }
                    } else if (selection == 7) {
                        var p = cm.c.getPlayer();
                        var newInt = p.getRemainingAp() + p.getInt();
                        if (newInt < 30000) {
                            p.setInt(newInt);
                            p.setRemainingAp(0);
                            cm.sendOk("�n�F. �ݬݤ@�U�A����O��!");
                            cm.dispose();
                        } else if (newInt >= 30000) {
                            p.setInt(29999);
                            p.setRemainingAp(newInt - 29999);
                            cm.sendOk("�n�F. �ݬݤ@�U�A����O��!");
                            cm.dispose();
                        }
                    } else if (selection == 8) {
                        var p = cm.c.getPlayer();
                        var newLuk = p.getRemainingAp() + p.getLuk();
                        if (newLuk < 30000) {
                            p.setLuk(newLuk);
                            p.setRemainingAp(0);

                            cm.sendOk("Okay. Your stats have been added!");
                            cm.dispose();
                        } else if (newLuk >= 30000) {
                            p.setLuk(29999);
                            p.setRemainingAp(newLuk - 29999);
                            cm.sendOk("�n�F. �ݬݤ@�U�A����O��!");
                            cm.dispose();
                        }
                    }

                } else if (sel_ == 8) {
                    switch (selection) {
                        case 2:
                            if (cm.getMeso() >= 1) {
                                cm.sendOk("���±z, #e#i5390000#����߱���z1000��#n �w�g�e��z���I�]��.");
                                cm.gainItem(5390000, 1000);
                                cm.gainMeso(-1);
                                cm.dispose();
                            } else {
                                cm.sendOk("������I�A�s1�������S�����I");
                                cm.dispose();
                            }
                            break;
                        case 5:
                            if (cm.getMeso() >= 1) {
                                cm.sendOk("���±z, #e#i5390001#�ն������߱���z1000��#n �w�g�e��z���I�]��.");
                                cm.gainItem(5390001, 1000);
                                cm.gainMeso(-1);
                                cm.dispose();
                            } else {
                                cm.sendOk("������I�A�s1�������S�����I");
                                cm.dispose();
                            }
                            break;
                        case 8:
                            if (cm.getMeso() >= 1) {
                                cm.sendOk("���±z, #e#i5390002#�ʷR�߱���z1000��#n �w�g�e��z���I�]��.");
                                cm.gainItem(5390002, 1000);
                                cm.gainMeso(-1);
                                cm.dispose();
                            } else {
                                cm.sendOk("������I�A�s1�������S�����I");
                                cm.dispose();
                            }
                            break;
                        case 11:
                            if (cm.getMeso() >= 1) {
                                cm.sendOk("���±z, #e#i5076000#�D���z1000��#n �w�g�e��z���I�]��.");
                                cm.gainItem(5076000, 1000);
                                cm.gainMeso(-1);
                                cm.dispose();
                            } else {
                                cm.sendOk("������I�A�s1�������S�����I");
                                cm.dispose();
                            }
                            break;
                        case 12:
                            if (cm.getMeso() >= 1) {
                                cm.sendOk("���±z, #e#i5390004##t5390004#100��#n �w�g�e��z���I�]��.");
                                cm.gainItem(5390004, 1000);
                                cm.gainMeso(-1000);
                                cm.dispose();
                            } else {
                                cm.sendOk("������I�A�s1000�������S�����I");
                                cm.dispose();
                            }
                            break;
                    }
                } else if (sel_ == 9) {
                    if (!cm.canHold(1052723)) {
                        cm.sendOk("�z���I�]�Ŧ줣��");
                        cm.dispose();
                        return;
                    }
                    if (selection == 0) {
                        if (!cm.haveItem(4001129, 1)) {
                            cm.sendOk("�z��#v4001129#����");
                            cm.dispose();
                            return;
                        }
                        cm.gainItem(4001129, -1)
                        cm.makeProItem(1112942, 200);
                    } else if (selection == 1) {
                        if (!cm.haveItem(4001129, 10)) {
                            cm.sendOk("�z��#v4001129#����");
                            cm.dispose();
                            return;
                        }
                        cm.gainItem(4001129, -10)
                        cm.makeProItem(1112942, 1000);
                    } else if (selection == 2) {
                        if (!cm.haveItem(4001129, 20)) {
                            cm.sendOk("�z��#v4001129#����");
                            cm.dispose();
                            return;
                        }
                        cm.gainItem(4001129, -20)
                        cm.makeProItem(1112942, 2000);
                    } else if (selection == 3) {
                        if (!cm.haveItem(4001129, 1)) {
                            cm.sendOk("�z��#v4001129#����");
                            cm.dispose();
                            return;
                        }
                        cm.gainItem(4001129, -1)
                        cm.makeProItem(1052723, 200);
                    } else if (selection == 4) {
                        if (!cm.haveItem(4001129, 10)) {
                            cm.sendOk("�z��#v4001129#����");
                            cm.dispose();
                            return;
                        }
                        cm.gainItem(4001129, -10)
                        cm.makeProItem(1052723, 1000);
                    } else if (selection == 5) {
                        if (!cm.haveItem(4001129, 20)) {
                            cm.sendOk("�z��#v4001129#����");
                            cm.dispose();
                            return;
                        }
                        cm.gainItem(4001129, -20)
                        cm.makeProItem(1052723, 2000);
                    }

                }
                sele = 0;
            } else if (sel == 1) {
                if (sel_ == 0) {
                    if (selection == 0) {
                        jobName = "�s��";
                        job = 0;
                    }
                    if (selection == 1) {
                        jobName = "�C�h";
                        job = 100
                    }
                    if (selection == 11) {
                        jobName = "�]�k�v";
                        job = 200;
                    }
                    if (selection == 21) {
                        jobName = "�}�b��";
                        job = 300;
                    }
                    if (selection == 28) {
                        jobName = "�s��";
                        job = 400;
                    }
                    if (selection == 35) {
                        jobName = "���s";
                        job = 500;
                    }
                    cm.sendYesNo("#d�A�Q����: #r[" + jobName + "]#k #d��?");
                    sele_ = 1;
                } else if (sel_ == 2) {
                    slot = selection;
                    if (slot >= cm.getPlayer().getLevel()) {
                        cm.sendOk("�A����Ψӥ͵�!");
                        cm.dispose();
                        return;
                    }
                    cm.sendYesNo("�A�T�w�n�ܵ���?�A�N�ܬ�#r" + (cm.getPlayer().getLevel() - slot) + "#k��");
                    sele_ = 2;
                }
                sele = 1;
            } else if (sel == 2) {
                if (G_beauty == 1) {
                    cm.setSkin(G_skin[selection]);
                }
                if (G_beauty == 2) {
                    cm.setHair(G_hairnew[selection]);
                }
                if (G_beauty == 3) {
                    cm.setHair(G_haircolor[selection]);
                }
                if (G_beauty == 4) {
                    cm.setFace(G_facenew[selection]);
                }
                if (G_beauty == 5) {
                    cm.setFace(G_colors[selection]);
                }
                cm.dispose();
            } else if (sel == 3) {
                if (B_beauty == 1) {
                    cm.setSkin(B_skin[selection]);
                }
                if (B_beauty == 2) {
                    cm.setHair(B_hairnew[selection]);
                }
                if (B_beauty == 3) {
                    cm.setHair(B_haircolor[selection]);
                }
                if (B_beauty == 4) {
                    cm.setFace(B_facenew[selection]);
                }
                if (B_beauty == 5) {
                    cm.setFace(B_colors[selection]);
                }
                cm.dispose();
            } else if (sel == 4) {
                if (!cm.haveItem(4001129, 10)) {
                    cm.sendOk("�z�S��������#v4001129#��");
                    cm.dispose();
                    return;
                }
                cm.gainItem(4001129, -10);
                cm.gainItem(equip[choice], 1);
                cm.sendOk("�_�I�a�A�F��w�g��b�A���I�]�y~���֥h�ݧa!!.");
                cm.dispose();
            } else if (sel == 5) {
                if (selection == 0) {
                    cm.changeMusic("Bgm14/HonTale");
                    cm.spawnMonster(8810026, 0, 0, 0, 0, 1, 0, 1, 71, 260);
                    cm.getPlayer().getMap().killAllMonsters(false);
                    cm.mapMessage(6, "�H�۾_�ժ������n��,�t���s��,�ש�X�{�F!�U��i�h�̥[�o...");
                    cm.dispose();
                } else if (selection == 1) {
                    cm.dispose();
                }
            }

        } else if (status == 4) {
            if (sele == 0) {
                if (sele_ == 0) {
                    cm.gainItem(chair[choice], 1);
                    cm.sendOk("�_�I�a�A�F��w�g��b�A���I�]�y~���֥h�ݧa!!.");
                    cm.dispose();
                } else if (sele_ == 1) {

                    if (selection == 0) {
                        cm.sendYesNo("�A�Q�n #b�����ڦ�#k ��? �ݭn#b250000#k����," +
                                "#b�ڥi�H���ܧA���ʧO,�b�e�A�@���Y.") //�쥻 �����ڦ� ���@��, ���R���F
                        selec_ = 0;
                    } else if (selection == 1) {
                        cm.sendYesNo("�A�Q�n #b�Q�ڴڦ�#k ��? �ݭn#b500000#k����," +
                                "#b�ڥi�H���ܧA���ʧO,���A��@���Y.") //�쥻 �Q�ڴڦ� ���@��, ���R���F
                        selec_ = 1;
                    }
                } else if (sele_ == 2) {
                    cm.warp(maps[selectedMap], 0);
                    cm.dispose();
                } else if (sele_ == 3) {
                    cm.sendYesNo("�A�u���n�h " + mapsname_[selection] + "��?");
                    selectedMap = selection;
                    selec_ = 2;
                } else if (sele_ == 4) {
                    cm.sendYesNo("�A�u���n�h " + mapsname[selection] + "��?");
                    selectedMap = selection;
                    selec_ = 3;
                } else if (sele_ == 5) {
                    cm.sendYesNo("�A�u���n�h " + mapsname__[selection] + "��?");
                    selectedMap = selection;
                    selec_ = 4;
                } else if (sele_ == 6) {
                    cm.gainItem(weapon[choice], 1);
                    cm.sendOk("�_�I�a�A�F��w�g��b�A���I�]�y~���֥h�ݧa!!.");
                    cm.dispose();
                }
                selec = 0;

            } else if (sele == 1) {
                if (sele_ == 1) {
                    if (cm.getPlayer().getJob().getId() != 0 || cm.getPlayer().getLevel() < 10) {
                        cm.sendOk("#d�A�S���ŦX�̤p�ݨD: #r10���ӥB�O�W��ߪ�#k #d!");
                        cm.dispose();
                        return;
                    }
                    cm.getPlayer().setJob(job);
                    cm.sendOk("��¾���\��");
                    cm.dispose();
                } else if (sele_ == 2) {
                    if (cm.getPlayer().getMeso() < 100000) {
                        cm.sendOk("��p,�A���W���S��10W");
                        cm.dispose();
                        return;
                    }
                    cm.gainMeso(-100000);
                    cm.getPlayer().setLevel(cm.getPlayer().getLevel() - slot);
                    cm.getPlayer().setRemainingAp(cm.getPlayer().getRemainingAp() - slot * 5);
                    cm.getPlayer().getMap().removePlayer(cm.getPlayer());
                    cm.getPlayer().getMap().addPlayer(cm.getPlayer());
                    cm.warp(910000000);
                    cm.sendOk("#b���ߧA���\��!�֧֬ݧA�����ŧa!#k");
                    cm.dispose();
                }
            }
        } else if (status == 5) {
            if (selec == 0) {
                if (selec_ == 0) {
                    if (cm.getPlayer().getMeso() < 250000) {
                        cm.sendOK("�z����������");
                        cm.dispose();
                        return;
                    }
                    cm.sendNext("���U�ӡA�ܩʶ}�l~");
                    select_ = 0;
                } else if (selec_ == 1) {
                    if (cm.getPlayer().getMeso() < 500000) {
                        cm.sendOK("�z����������");
                        cm.dispose();
                        return;
                    }
                    cm.sendNext("���U�ӡA�ܩʶ}�l~");
                    select_ = 1
                } else if (selec_ == 2) {
                    cm.warp(maps_[selectedMap], 0);
                    cm.dispose();
                } else if (selec_ == 3) {
                    cm.warp(maps[selectedMap], 0);
                    cm.dispose();
                } else if (selec_ == 4) {
                    cm.warp(maps__[selectedMap], 0);
                    cm.dispose();
                }
                select = 0;
            }

        } else if (status == 6) {
            if (select == 0) {
                var g = cm.getPlayer().getGender();
                if (g == 0) {
                    cm.getPlayer().setGender(1);
                } else {
                    cm.getPlayer().setGender(0);
                }
                if (select_ == 0) {
                    cm.getPlayer().getMap().removePlayer(cm.getPlayer());
                    cm.getPlayer().getMap().addPlayer(cm.getPlayer());
                    cm.sendOk("��N�O�D�`���\! �A�|�F");
                    cm.dispose();
                    return;
                } else if (select_ == 1) {
                    cm.sendNext("��N�O�D�`���\! �ǳƦn, �ӬO#e��ܧA�̷s�y�檺�ɭԤF");
                    a1_ = 1;
                }
                a1 = 0;
            }
        } else if (status == 7) {
            if (a1 == 0) {
                if (a1_ == 1) {
                    if (cm.getPlayer().getGender() == 0) {
                        B_beauty = 2;
                        B_hairnew = Array();
                        for (var i = 0; i < B_hair.length; i++) {
                            B_hairnew.push(B_hair[i] + parseInt(cm.getChar().getHair() % 10));
                        }
                        cm.sendStyle("��@�ӧa!", B_hairnew);
                        a2_ = 0;
                    } else {
                        G_beauty = 2;
                        G_haircolor = Array();
                        for (var i = 0; i < G_hair.length; i++) {
                            G_haircolor.push(G_hair[i] + parseInt(cm.getChar().getHair() % 10));
                        }
                        cm.sendStyle("��ܧA���w��?", G_haircolor);
                        a2_ = 1;
                    }
                }
                a2 = 0;
            }
        } else if (status == 8) {
            if (a2 == 0) {
                if (a2_ == 0) {
                    if (B_beauty == 2) {
                        cm.setHair(B_hairnew[selection]);
                    }
                    cm.getPlayer().getMap().removePlayer(cm.getPlayer());
                    cm.getPlayer().getMap().addPlayer(cm.getPlayer());
                } else if (a2_ == 1) {
                    if (G_beauty == 2) {
                        cm.setHair(G_hairnew[selection]);
                    }
                    cm.getPlayer().getMap().removePlayer(cm.getPlayer());
                    cm.getPlayer().getMap().addPlayer(cm.getPlayer());
                }
            }
        } else {
            cm.dispose();
        }
    }
}	