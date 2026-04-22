let bancoDeCandidatos = [];

document.getElementById('formCandidato').addEventListener('submit', function (evento) {
    evento.preventDefault(); // Impede o envio padrão e o recarregamento da página

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senioriedade = document.getElementById('senioridade').value;
    const tmpExperiencia = document.getElementById('tmpExperiencia').value;
    const portifolio = document.getElementById('portifolio').value;

    const checkboxesMarcados = document.querySelectorAll('input[name="stack"]:checked'); //Pegas a chackbox marcadas

    const tecnologias = Array.from(checkboxesMarcados).map(checkbox => checkbox.value); //Transforma em um array e pega somente os valores de cada elemento.



    const novoCandidato = {
        nome: nome,
        email: email,
        senioridade: senioridade,
        tmpExperiencia: tmpExperiencia,
        portifolio: portifolio,
        tecnologias: tecnologias

    }
    bancoDeCandidatos.push(novoCandidato);
    this.reset();
    console.log(bancoDeCandidatos);
});