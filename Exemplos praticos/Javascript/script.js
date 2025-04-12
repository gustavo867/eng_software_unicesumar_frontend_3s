
pessoas = [
    {
        nome: "João",
        idade: 20
    },
    {
        nome: "Maria",
        idade: 15
    }
]


function verifica_idade(idade){

    if (idade >= 18){
        alert("Maior de idade");
    } else {
        alert("Menor de idade");
    }
}

verifica_idade(20);
// pessoas.forEach(pessoa => {
//     verifica_idade(pessoa.idade);
// });