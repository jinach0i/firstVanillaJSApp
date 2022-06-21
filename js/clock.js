const clock=document.querySelector('h2#clock');
// clock.innerText='aasdasdasd';
function getClock() {
    // console.log('hello');
    const date=new Date(),
        hours=date.getHours().padStart,
        min=date.getMinutes().padStart,
        sec=date.getSeconds().padStart;
    clock.innerText=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
getClock();
// 초마다 새 Date obj를 생성하라:
setInterval(() => {
    getClock()
}, 1000);
// website가 load 되자마자 getClock()을 초마다 실행:
// setTimeout(() => {
//     sayHello();
// }, 2000);

// "1".padStart(2,"0");문자길이가 [2]자리수가 아닐때 앞에 padding을 벌려(원래 값이 2자리가 아닐때만)0을 붙여라/ ""안의 길이가 최소값 2가 아닐때 "0"을 붙여라:


