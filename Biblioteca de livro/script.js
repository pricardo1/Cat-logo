const livros = JSON.parse(localStorage.getItem('books')) || []
// LocalStorage.getItem('books')
// JSON.parse -> transforma o string em um array
function salvarLivros() {
    localStorage.setItem('books', JSON.stringify(livros))
}


function addBook() {
    const titulo = document.querySelector('#titulo')
    const autor = document.querySelector('#autor')
    const genero = document.querySelector('#genero')
    const ano = document.querySelector('#ano')

    const livro = {
        titulo: titulo.value,
        autor: autor.value,
        genero: genero.value,
        ano: Number(ano.value)
    }
    livros.push(livro)
    alert('Livro cadastrado com sucesso!')

    titulo.value = ''
    autor.value = ''
    genero.value = ''
    ano.value = ''
    listarLivros(livros)
    salvarLivros()

}

function listarLivros(catalogoLivros) {
    const catalogo = document.querySelector('#catalogo')
    catalogo.innerHTML = ''

    for (const livro of catalogoLivros) {
        const div = document.createElement('div')
        div.classList.add('livro')
        div.innerHTML = `<h3>${livro.titulo}</h3>
                        <p>Autor: ${livro.autor}</p>
                        <p>Genero: ${livro.genero}</p>
                        <p>Ano: ${livro.ano}</p>`
        catalogo.append(div)
    }
}

function buscarLivro() {
    const termo = document.querySelector('#termo-busca').value.toLowerCase()

    const resultado = livros.filter(livro => livro.titulo.toLowerCase().includes(termo)  ||
        livro.autor.toLowerCase().includes(termo) ||
        livro.genero.toLowerCase().includes(termo) ||
        livro.ano.toString().includes(termo))
    
    if (resultado.length > 0) {
        listarLivros(resultado)
    } 
    else {
        alert('Livro(s) não encontrado(s)')
        listarLivros(livros)
    }



}

listarLivros(livros)