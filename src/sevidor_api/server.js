function lista_user(){
    let url='https://api-canal-privado.herokuapp.com/user';
    let res = httpGet(url);
    return res;
}

function mandarMSG(msg_text){
    let url ='https://api-canal-privado.herokuapp.com/enviar/mensagem';
    let body={
        msg:msg_text
    }
    let res = httpPost(body,url);
    console.log(res);

}



function httpGet(url){
    const conect = new  XMLHttpRequest();
    conect.open('GET',url,false)
    conect.send();
    return conect.responseText;
}


function httpPost(body,url){
    const conect = new XMLHttpRequest();
    conect.open('POST',url,true);
    conect.setRequestHeader('Content-type','application/json')
    conect.send(JSON.stringify(body));
    return conect.responseText;
}

