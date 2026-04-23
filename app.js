let bancoDeCandidatos = [];

document.getElementById('formCandidato').addEventListener('submit', function (evento) {
    evento.preventDefault(); // Impede o envio padrão e o recarregamento da página

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senioridade = document.getElementById('senioridade').value;
    const tmpExperiencia = document.getElementById('tmpExperiencia').value;
    const portifolio = document.getElementById('portifolio').value;

    const checkboxesMarcados = document.querySelectorAll('input[name="stack"]:checked'); //Pegas a chackbox marcadas

    const tecnologias = Array.from(checkboxesMarcados).map(checkbox => checkbox.value); //Transforma em um array e pega somente os valores de cada elemento.

    const novoCandidato = {
        nome: nome,
        email: email,
        senioridade: senioridade,
        tmpExperiencia: Number(tmpExperiencia),
        portifolio: portifolio,
        tecnologias: tecnologias
    }

    bancoDeCandidatos.push(novoCandidato);
    this.reset();
    console.log(bancoDeCandidatos);
});

let res = document.getElementById('resultado');
function listartodos() {
    res.innerHTML = ''

    if (bancoDeCandidatos.length == 0) {
        res.innerHTML = `<p>Nenhum candidato cadastrado!</p>`
        return;
    }

    res.innerHTML = bancoDeCandidatos.map(candidato => `<div>
    <h3>${candidato.nome}</h3>
    <p>Email: ${candidato.email}</p>
    <p>Senioridade: ${candidato.senioridade}</p>
    <p>Tempo de experiência: ${candidato.tmpExperiencia} anos</p>
    <p>Link do Portifolio: ${candidato.portifolio}</p>
    <p>Stacks: ${candidato.tecnologias.join(', ')}</p>
    </div>`).join('');
}

function filtarSeniores() {
    res.innerHTML = '';

    const experientes = bancoDeCandidatos.filter(c => c.tmpExperiencia > 5);

    if (experientes.length == 0) {
        res.innerHTML = `<p>Nenhum candidato tem a experiência necessária!</p>`
        return;
    }

    res.innerHTML = experientes.map(ex => `<div>
    <h3>EXPERIENTES</h3>
    <p>Nome: ${ex.nome}<p>
    <p>Tempo de experiência: ${ex.tmpExperiencia}<p>
    <p>Portifolio: ${ex.portifolio}</p>
    </div>`).join('');
}

function calcularMediaXP() {
    res.innerHTML = '';

    if (bancoDeCandidatos.length == 0) {
        res.innerHTML = `<p>Nenhum candidato cadastrado!</p>`
        return;
    }
    
    const soma = bancoDeCandidatos.reduce((acc, cur) => acc + cur.tmpExperiencia, 0);
    const mediaEX = bancoDeCandidatos.length > 0 ? soma / bancoDeCandidatos.length : 0;

    res.innerHTML = `<p>A média de experiência dos candidato é ${mediaEX.toFixed(2)}</p>`
}