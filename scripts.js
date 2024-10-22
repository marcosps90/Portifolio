document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;

      // Toggle a classe "active" para a seta girar
      button.classList.toggle('active');
      
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.classList.remove('show');
      } else {
        // Fecha todos os outros conteúdos antes de abrir o clicado
        document.querySelectorAll(".accordion-content").forEach(item => {
          item.style.maxHeight = null;
          item.previousElementSibling.classList.remove('active'); // Remove a classe active da seta
          item.classList.remove('show');
        });
        
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.add('show');
      }
    });
  });
});
