

function botAnswers(sentences){
    const words = window.nlp(sentences);
    console.log(words.people().data().length);
    if(words.match('hello').found|| words.match('hi').found){
        return "Hello! How do I call you Sir/Madam?";
    }else if(words.people().data().length > 0){
        const firstPersonName = words.people().data()[0].text;
        return `Hi ${firstPersonName}! Nice to meet you!`;
    }else if(words.match('age').found || words.match('How old').found){
        return "I am just several days old."
    }else{
        return `Do you mean ${sentences}? Am I understanding it correctly?`;
    }
}

