// let nilai = prompt("Masukam nilai : " , 0);
// let hasil = "";

// switch(true){
//     case nilai >= 91 && nilai <= 100 :
//         hasil = "A"
//         break;
//     case nilai >= 81 && nilai <= 90 :
//         hasil = "B"
//         break;
//     case nilai >= 71 && nilai <= 80:
//         hasil = "C"
//         break;
//     case nilai >= 61 && nilai <= 70:
//         hasil = "D"
//         break;
//     case nilai >= 51 && nilai <= 60:
//         hasil = "E"
//         break;
//         case nilai >= 0 && nilai <= 50:
//             hasil = "F"
//             break; 
//             case nilai >= -100 && nilai <= -1:
//                 hasil = "kekurangan bro"
//                 break;  
//         default:
//             document.write("kelebihan bro");
// }
// document.write(hasil);
let sum = "";
while(true){
    let value = prompt("Masukan Sebuah huruf",'')
    if(!value)break;
    sum+= value;
}
alert('sum :' + sum );