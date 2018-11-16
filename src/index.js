

document.querySelector('#input-area').addEventListener('keyup',function(event){
    if(event.keyCode == 13){
        addToChatBox(this.value,'Human');
        this.value = "";
        addToChatBox("Fuck you",'Bot');
        
    }
});


function addToChatBox(content,who){
    const msg = document.createElement('div');
    const bubble = document.createElement('span');
    const time = document.createElement('div');
    bubble.innerHTML = `<b>${who}</b><br/>${content}`;
    
    bubble.classList.add('bubble');
    msg.classList.add('msg');
    if(who == "Bot"){
        bubble.classList.add('bubble-bot');
        msg.classList.add('msg-bot');
        time.classList.add('time-bot');
    }else{
        bubble.classList.add('bubble-human');
        msg.classList.add('msg-human');
        time.classList.add('time-human');
    }
    const now = new Date();
    time.innerHTML = `${now.getHours()}:${now.getMinutes()}`
    msg.append(bubble);
    msg.append(time)
    const chatBox = document.querySelector('#chat-box')
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}