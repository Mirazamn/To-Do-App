// Creating New Elements
const AddNote = document.querySelector('.add-note')

for (let i = 0; i < 5; i++) {
    // Hamma Elementlarni Yaratamiz
    const CreateNote = document.createElement('div')
    const CreateCheckBox = document.createElement('input')
    const CreateTxtInput = document.createElement('input')
    const CreateTrashIcon = document.createElement('i')

    // Elementlarga Atributlar Beramiz
    CreateNote.classList.add('note')
    CreateTxtInput.classList.add('inp-note')
    CreateCheckBox.classList.add('checkbox')
    CreateTrashIcon.classList.add('fa-solid', 'fa-trash')
    CreateCheckBox.type = `checkbox`
    CreateTxtInput.type = `text`
    CreateTxtInput.placeholder = `Your Note Here!`

    // Hamma Elemantlarni Noteni ichiga 
    CreateNote.appendChild(CreateCheckBox)
    CreateNote.appendChild(CreateTxtInput)
    CreateNote.appendChild(CreateTrashIcon)

    // Noteni mainni ischiga 
    const main = document.querySelector('main')
    const Hr = document.createElement('hr')
    main.appendChild(Hr)
    main.appendChild(CreateNote)

    // Completed Note
    CreateCheckBox.addEventListener('click', () => {
        CreateTxtInput.classList.toggle('completed-note')
    })

    // Deleting Elements
    CreateTrashIcon.addEventListener('click', () => {
        main.removeChild(Hr)
        main.removeChild(CreateNote)
    })
}


// Fast writing
const SearchInp = document.querySelector('input')
const SendBtn = document.querySelector('.sendbtn')
SendBtn.addEventListener('click', () => {
    // Hamma Elementlarni Yaratamiz
    const CreateNote = document.createElement('div')
    const CreateCheckBox = document.createElement('input')
    const CreateTxtInput = document.createElement('input')
    const CreateTrashIcon = document.createElement('i')

    // Elementlarga Atributlar Beramiz
    CreateNote.classList.add('note')
    CreateTxtInput.classList.add('inp-note')
    CreateCheckBox.classList.add('checkbox')
    CreateTrashIcon.classList.add('fa-solid', 'fa-trash')
    CreateCheckBox.type = `checkbox`
    CreateTxtInput.type = `text`
    CreateTxtInput.placeholder = `Your Note Here!`

    // Inputga Value Beramiz
    CreateTxtInput.value = SearchInp.value

    // Hamma Elemantlarni Noteni ichiga 
    CreateNote.appendChild(CreateCheckBox)
    CreateNote.appendChild(CreateTxtInput)
    CreateNote.appendChild(CreateTrashIcon)

    // Noteni mainni ischiga 
    const main = document.querySelector('main')
    const Hr = document.createElement('hr')
    main.appendChild(Hr)
    main.appendChild(CreateNote)

    // Completed Note
    CreateCheckBox.addEventListener('click', () => {
        CreateTxtInput.classList.toggle('completed-note')
    })

    // Deleting Elements
    CreateTrashIcon.addEventListener('click', () => {
        main.removeChild(Hr)
        main.removeChild(CreateNote)
    })
})


// Fast Writing 2.0 ('KeyPressed')
addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        // Hamma Elementlarni Yaratamiz
        const CreateNote = document.createElement('div')
        const CreateCheckBox = document.createElement('input')
        const CreateTxtInput = document.createElement('input')
        const CreateTrashIcon = document.createElement('i')

        // Elementlarga Atributlar Beramiz
        CreateNote.classList.add('note')
        CreateTxtInput.classList.add('inp-note')
        CreateCheckBox.classList.add('checkbox')
        CreateTrashIcon.classList.add('fa-solid', 'fa-trash')
        CreateCheckBox.type = `checkbox`
        CreateTxtInput.type = `text`
        CreateTxtInput.placeholder = `Your Note Here!`

        // Inputga Value Beramiz
        CreateTxtInput.value = SearchInp.value

        // Hamma Elemantlarni Noteni ichiga 
        CreateNote.appendChild(CreateCheckBox)
        CreateNote.appendChild(CreateTxtInput)
        CreateNote.appendChild(CreateTrashIcon)

        // Noteni mainni ischiga 
        const main = document.querySelector('main')
        const Hr = document.createElement('hr')
        main.appendChild(Hr)
        main.appendChild(CreateNote)

        // Completed Note
        CreateCheckBox.addEventListener('click', () => {
            CreateTxtInput.classList.toggle('completed-note')
        })

        // Deleting Elements
        CreateTrashIcon.addEventListener('click', () => {
            main.removeChild(Hr)
            main.removeChild(CreateNote)
        })
    }
})


AddNote.addEventListener('click', () => {
    // Hamma Elementlarni Yaratamiz
    const CreateNote = document.createElement('div')
    const CreateCheckBox = document.createElement('input')
    const CreateTxtInput = document.createElement('input')
    const CreateTrashIcon = document.createElement('i')

    // Elementlarga Atributlar Beramiz
    CreateNote.classList.add('note')
    CreateTxtInput.classList.add('inp-note')
    CreateCheckBox.classList.add('checkbox')
    CreateTrashIcon.classList.add('fa-solid', 'fa-trash')
    CreateCheckBox.type = `checkbox`
    CreateTxtInput.type = `text`
    CreateTxtInput.placeholder = `Your Note Here!`

    // Hamma Elemantlarni Noteni ichiga 
    CreateNote.appendChild(CreateCheckBox)
    CreateNote.appendChild(CreateTxtInput)
    CreateNote.appendChild(CreateTrashIcon)

    // Noteni mainni ischiga 
    const main = document.querySelector('main')
    const Hr = document.createElement('hr')
    main.appendChild(CreateNote)
    main.appendChild(Hr)
    main.appendChild(CreateNote)

    // Completed Note
    CreateCheckBox.addEventListener('click', () => {
        CreateTxtInput.classList.toggle('completed-note')
    })

    // Deleting Elements
    CreateTrashIcon.addEventListener('click', () => {
        main.removeChild(Hr)
        main.removeChild(CreateNote)
    })
})

// Switch Mode Script
const SwitchModeButton = document.querySelector('.switch-mode')
const body = document.querySelector('body')

SwitchModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
})