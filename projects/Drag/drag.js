// Query the element
const ele = document.getElementById('dragMe');

// The ghost element
let ghostEle;

ele.addEventListener('dragstart', function (e) {
    // Create the ghost element
    ghostEle = document.createElement('div');
    ghostEle.classList.add('dragging');
    ghostEle.innerHTML = 'Arteya Lutchman';

    // Append it to `body`
    document.body.appendChild(ghostEle);

    // Customize the drag image
    e.dataTransfer.setDragImage(ghostEle, 0, 0);
});

ele.addEventListener('dragend', function (e) {
    document.body.removeChild(ghostEle);
});

