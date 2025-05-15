const comentarios = [];

function renderizarComentarios() {
    const commentsList = document.getElementById('comments-list');
    commentsList.innerHTML = '';

    if (comentarios.length === 0) {
        commentsList.innerHTML = '<p>Nenhum comentário ainda. Seja o primeiro a comentar!</p>';
        return;
    }

    comentarios.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `<strong>${comment.name}:</strong> <p>${comment.comment}</p>`;
        commentsList.appendChild(commentElement);
    });
}

document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment');

    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();

    if (name && comment) {
    comentarios.push({ name, comment });
    renderizarComentarios();

    nameInput.value = '';
    commentInput.value = '';
    }
});

renderizarComentarios();