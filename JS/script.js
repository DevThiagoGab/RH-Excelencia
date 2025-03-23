document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o botão usando a classe (usando o método querySelector)
    const whatsappButton = document.querySelector(".buttonCTA");

    // Número do WhatsApp (substitua pelo seu número)
    const whatsappNumber = "5581982237886"; // Altere para o seu número

    // URL para abrir o WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá, gostaria de mais informações!`;

    // Adiciona um evento de clique ao botão
    whatsappButton.addEventListener("click", function () {
        // Abre o link em uma nova aba
        window.open(whatsappUrl, "_blank");
    });
});