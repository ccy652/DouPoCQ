// 给下载和添加喜欢按钮绑定点击事件
const btns = document.querySelectorAll('.main-content button')
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click',function(){
        alert('此功能有待后续完善，敬请期待')
    })
  }

document.querySelector('.login a').addEventListener('click',function(){
    alert('页面正在赶来的路上')
})