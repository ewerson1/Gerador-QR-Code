const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img")

// eventos

// gerando o QR code
function generateQrCode (){
    const qrCodeInputValue = qrCodeInput.value;

// se n tiver valor, nao vai gerar nada
    if(!qrCodeInputValue) return;


    qrCodeBtn.innerText = "Gerando QR Code..."

// gerando QR com a API
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

// fazendo o QR Code so aparecer depois que o QR estiver pronto 
    qrCodeImg.addEventListener("load", () => { 
        container.classList.add("active");
        qrCodeBtn.innerText = "Codigo criado!";
    })
}

//ações
qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
})

qrCodeInput.addEventListener("keydown", (e) => {

    if(e.code === "Enter")   //verificando se foi o "enter" que foi apertado
        generateQrCode();
})

// Limpar área do QR Code
qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code"
    }
})