let bancoDeCandidatos = [];

document.getElementById('formCandidato').addEventListener('submit', function(evento) {
    evento.preventDefault(); // Impede o envio padrão e o recarregamento da página
    
    const nome = document.getElementById('nome').value;

    const novoCandidato = {
        nome: nome,
        tecnologia: tecnologia,
    }
    bancoDeCandidatos.push()
    this.reset();
});