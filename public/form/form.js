/* variables */
let inputValue = document.getElementById('input_course').value;
const inputElement = document.getElementById('input_course');
const helperIconClose = document.getElementById('helper_icon_close');
const helperTextClose = document.getElementById('helper_text_close');
const helperIconOpen = document.getElementById('helper_icon_okay');
const helperTextOpen = document.getElementById('helper_text_okay');

const placeholders = [
    'sua-empresa',
    'seu-curso',
    'sua-escola',
];

// Elementos de controle
let wordIndex = 0;  // Índice da palavra atual
let charIndex = 0;   // Índice da letra dentro da palavra
let isDeleting = false;  // Indicador se estamos deletando ou adicionando letras
let delay = 200;  // Velocidade inicial de digitação

// Função principal de digitação e remoção
function handleTyping() {
    const currentWord = placeholders[wordIndex];  // Pega a palavra atual

    if (!isDeleting) {
        // Adiciona uma letra por vez
        inputElement.placeholder = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            // Pausa quando a palavra está completamente digitada
            setTimeout(() => isDeleting = true, 1000);
        }
    } else {
        // Remove uma letra por vez
        inputElement.placeholder = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            // Passa para a próxima palavra quando a atual for completamente removida
            isDeleting = false;
            wordIndex = (wordIndex + 1) % placeholders.length;
        }
    }

    // Define o tempo para a próxima iteração de digitação ou remoção
    const nextDelay = isDeleting ? 100 : 200;
    setTimeout(handleTyping, nextDelay);
}

// Inicializa o processo de digitação
setTimeout(handleTyping, delay);

/* main functions */
function handleInput(event) {
    inputValue = sanitizeString(event.target.value);
    event.target.value = inputValue;
}

async function handleSubmit(event) {
    event.preventDefault();
    let url = `https://eadplataforma.com/check/username/${inputValue}`;

    if (inputValue !== '') {
        try {
            const response = await fetch(url);
            const text = await response.text();

            if (text === 'ok') {
                helperIconOpen.classList.remove('hidden');
                helperTextOpen.classList.remove('hidden');
                helperIconClose.classList.add('hidden');
                helperTextClose.classList.add('hidden');

                removeStyle([helperIconOpen, helperTextOpen, helperIconClose, helperTextClose], 10000);
            } else {
                helperIconClose.classList.remove('hidden');
                helperTextClose.classList.remove('hidden');
                helperIconOpen.classList.add('hidden');
                helperTextOpen.classList.add('hidden');

                removeStyle([helperIconOpen, helperTextOpen, helperIconClose, helperTextClose], 10000);
            }
        } catch (error) {
            return ''
        }
    }
}