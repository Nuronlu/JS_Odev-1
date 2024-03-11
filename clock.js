//****A-KULLANICI BILGISI ****/
//1.ADIM: kullanicidan isim bilgisi isteme
let inputName = prompt("Lutfen adinizi giriniz:")
// 2 .ADIM: myName id'li ogeye ulasmak icin:
let userName= document.querySelector("#myName")
// 3.ADIM:isim bilgisi girilmezse "Kullanici adi bulunamadi" diye yazsin. ternary kullanimi: kosul ? dogruysa : yanlissa
userName.innerHTML = `${inputName.length > 0 ? inputName : "Kullanici bilgisi bulunamadi."}`

//****B-TIME BILGISI ****/
function time(){
    //****TARIH & SAAT BILGISI ****/
    //1.ADIM:Tarih verilerini ekleme
    let dateData = new Date()
    let saat=dateData.getHours()
    let dakika=dateData.getMinutes()
    let saniye=dateData.getSeconds()

    //2.ADIM:gun verilerini ekleme
    let gun=(`Pazartesi`, `Sali`, `Carsamba`, `Persembe`, `Cuma`, `Cumartesi`, `Pazar`)
    let gunAdi=gun[dateData.getDay()]

    //3.ADIM: saat bilgisi iceren ogeye ulasmak icin:
    let clock= document.querySelector("#myClock")
    clock.innerHTML=`${saat}:${dakika}:${saniye} ${gun}`
}
//4.ADIM: kendini tekrar eden bir zamanlayici ayarlama:
setInterval(time,1000);