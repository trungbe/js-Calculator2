function inputX(a) {
    let memory2=document.getElementById("memory").innerHTML; // bien check xem la phep tinh moi hay cu



    // Check lai phep tinh la new hay old
    // alert(memory2!="");
    if (memory2!="")
    {
        // alert(!isNaN(a));
        let lenMemory=memory2.length;
        let str=memory2.substring(lenMemory);
        // alert(memory2+"str");

        if (!isNaN(a)){
            document.getElementById("outputX").innerHTML=0;
            document.getElementById("memory").innerHTML="";
        }else {
            document.getElementById("memory").innerText="";
        }
    }
    // ham cho ket qua ve khong neu ko phai la ky tu +-x/
    let input1 = document.getElementById("outputX").innerHTML;
    let lenghtInput1 = input1.length;

    // xoa so 0 ban dau di
    if(Number(input1)===0 && lenghtInput1==1){
        input1=input1.substring(1);
    }
    let lenghtInput2 = input1.length;

    // kiem tra xem nhap so chua?? chua nhap ko duoc dung phep toan
    if (lenghtInput2 == 0) {
        if (isNaN(a)) {
            input1 = 0+a;
        } else {
            input1 = input1 + a;
            // alert("b2 " + input1)
        }
    } else if (lenghtInput2 !== 0 && isNaN(a)) {
        let bA=input1.substr(lenghtInput2-1);
        // alert(isNaN(bA))
        if (isNaN(bA)) {
            input1 = input1.slice(0,-1)+a;
            // alert("chuoi" + input1);
        } else {
            input1 = input1 + a;
            // alert(input1[lenghtInput1 - 1] + "ky cuoi");
        }
    } else {
        input1 = input1 + a;
    }
    let startT=input1.substr(0);

    document.getElementById("outputX").innerHTML = input1;
    // alert(lenghtInput1);

    // memory

}
function calculator() {
    let input1 = document.getElementById("outputX").innerHTML;
    let lenghtInput1 = input1.length;

    let last=input1.substr(lenghtInput1-1);
    if (isNaN(last)){
        return;
    }else {
        let resul=eval(input1);
        document.getElementById("outputX").innerHTML=resul;
        document.getElementById("memory").innerHTML=resul;
    }
}

function resett(){
    document.getElementById("outputX").innerHTML=0;
    document.getElementById("memory").innerHTML="";
}