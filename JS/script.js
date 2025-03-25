function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o botão usando a classe (usando o método querySelector)
    const whatsappButton = document.querySelector(".button-CTA");

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

// Aguarda o carregamento completo do DOM antes de executar
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona a logo pela classe
    const logo = document.querySelector(".logo img");

    // Verifica se a logo foi encontrada e adiciona o evento de clique
    if (logo) {
        logo.addEventListener("click", function () {
            // Recarrega a página quando a logo for clicada
            window.location.reload();
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll(".navbar a");
    const headerHeight = document.querySelector(".header").offsetHeight; // Altura do cabeçalho

    navbarLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Impede o comportamento padrão

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - headerHeight + 100; // Ajuste para exibir o título
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});