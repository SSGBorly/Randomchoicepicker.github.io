const tagsEL = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {createTages(e.target.value)

    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }

})


function createTages(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim()) 

    tagsEL.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('sapn')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEL.appendChild(tagEl)        
    })
}

function randomSelect() {
    console.log(123)
}
