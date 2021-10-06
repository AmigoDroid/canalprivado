let msg_li = document.getElementById('msg_id');
let url_get='https://api-canal-privado.herokuapp.com/user';
let url_post='https://api-canal-privado.herokuapp.com/enviar/mensagem';

let form = document.getElementById('form_id');


form.addEventListener('submit',(e)=>{
    e.preventDefault;
    let mensagem = document.getElementById('msg_input').value;
    if(mensagem===''){
        alert('digite uma mensagem');
        e.preventDefault;
    }else{
      //  body.msg=mensagem;
      let body = {'msg':mensagem}
     let res =  httpPost(body,url_post);
     console.log(res);
     e.preventDefault;
    }

 e.preventDefault;


})

function teste(){
let res= httpGet(url_get);
let dados = JSON.parse(res);
let id_msg= dados.msg.length-1;
let msg = dados.msg;

for(let i =0; i<id_msg;i++){

    msg_li.innerHTML+=`<li>${msg[i].msg}</li>`

}

}


teste();