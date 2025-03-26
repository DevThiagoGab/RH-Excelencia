// Função para alternar o menu de navegação (adiciona/remove a classe "active")
function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("active");
}

// Função que redireciona o botão ao whatsapp
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o botão do WhatsApp pela classe
    const whatsappButton = document.querySelector(".button-CTA");

    // Define o número do WhatsApp (substitua pelo seu número)
    const whatsappNumber = "5581982237886"; // Altere para o seu número

    // Cria a URL de redirecionamento para abrir o WhatsApp com uma mensagem padrão
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá, gostaria de mais informações!`;

    // Adiciona um evento de clique ao botão do WhatsApp
    whatsappButton.addEventListener("click", function () {
        // Abre o link do WhatsApp em uma nova aba
        window.open(whatsappUrl, "_blank");
    });
});

// Função que faz a logo recarregar a página ao ser clicada
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona a logo pela classe
    const logo = document.querySelector(".logo img");

    // Verifica se a logo foi encontrada
    if (logo) {
        // Adiciona um evento de clique na logo para recarregar a página
        logo.addEventListener("click", function () {
            window.location.reload();
        });
    }
});

// Função que adiciona um comportamento de rolagem suave (smooth scroll) aos links da navbar
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os links da navbar
    const navbarLinks = document.querySelectorAll(".navbar a");

    // Obtém a altura do cabeçalho (header)
    const headerHeight = document.querySelector(".header").offsetHeight;

    // Adiciona um evento de clique para cada link do menu de navegação
    navbarLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Impede que a página recarregue ao clicar no link

            // Obtém o ID da seção de destino do link
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Se a seção existir, faz o scroll suave até ela
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - headerHeight + 100; // Ajuste para exibir o título

                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth" // Rola suavemente até a seção
                });
            }
        });
    });
});

// Função que conta quantas vezes o botão foi clicado
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o botão pela classe
    const button = document.querySelector(".button-CTA");

    // Verifica se o botão foi encontrado no DOM
    if (button) {
        let clicks = 0; // Variável para contar os cliques no botão

        // Adiciona um evento de clique ao botão
        button.addEventListener("click", () => {
            clicks++; // Incrementa a contagem de cliques
            console.log(`O botão foi clicado ${clicks} vezes`);
        });

        console.log("✅ Botão encontrado e evento adicionado!");
    } else {
        console.log("❌ Botão NÃO encontrado no DOM!");
    }
});