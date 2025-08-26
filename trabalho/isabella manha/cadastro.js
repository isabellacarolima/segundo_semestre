    function cadastrar() {
        const names = ["Isabella", "Enzo" , "Theo"];
        const sem = ["1234", "4321" , "8910"]

        const mensagem = document.getElementById("mensagem");
        const nome = document.getElementById("nome").value;
        const acesso = document.getElementById("senha").value;
        
        let correto = false; 

        for(let i = 0; i < names.length; i++) {
            if (nome === names[i] && acesso === sem[i]) {
                correto = true;
                mensagem.innerHTML = "redirecionando...";
                setTimeout(() => {
                window.location.href = "https://github.com/isabellacarolima"
            }, 5000);
               
                
            }
        }
    
    if (!correto){
        mensagem.innerHTML = "Nome ou senha incorretos!";
    } 
    
}
    