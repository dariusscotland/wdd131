const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    
    if (input.value.trim() !== '') {
        
        const chapterName = input.value.trim(); 

        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        const chapterSpan = document.createElement('span');

        chapterSpan.textContent = chapterName;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${chapterName}`); 
        deleteButton.classList.add('delete');
        
        li.appendChild(chapterSpan);
        li.appendChild(deleteButton); 

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus(); 
        });

        list.appendChild(li); 

        input.value = '';
        input.focus();
    } else {
        input.focus();
    }
});