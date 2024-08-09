var lotto = new Array();
var bonus_lotto = 0;
var my_lotto = new Array();
var chk_same = 0;

for (let i = 0; i < 6; i++) {
    lotto[i] = Math.floor(Math.random() * 45) + 1;
    for(let j=0; j<i; j++) {
        if(lotto[i]==lotto[j]) {
            i--;
            break;
        }
    }
    document.write(lotto[i] + " ");
}

bonus_lotto = Math.floor(Math.random() * 45 ) + 1;

let i=0;
while(1) {
    if(lotto[i] != bonus_lotto) {
        i++;
    }
    else {
        bonus_lotto = Math.floor(Math.random() * 45 ) + 1;
    }
    if(i==6) break;
} //보너스 로또 뽑는 함수

document.write("보너스 번호 : " + bonus_lotto);
document.write("<br>")

for (let i = 0; i < 6; i++) {
    my_lotto[i] = prompt((i + 1) + "번째 숫자를 입력하세요");
    document.write(my_lotto[i] + " ");
}
document.write("<br>")

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        if (my_lotto[i] == lotto[j]) chk_same++;
    }
}

var chk_snd = false;
switch (chk_same) {
    case 6:
        document.write("1등입니다.");
        break;
    case 5:
        for(let i=0;i<6;i++) {
            if(my_lotto[i] == bonus_lotto) chk_snd = true;
        }
        if(chk_snd == true) document.write("2등입니다.");
        else document.write("3등입니다.");
        break;
    case 4:
        document.write("4등입니다.");
        break;
    case 3:
        document.write("5등입니다.");
        break;
    default:
        document.write("꽝입니다.");
}