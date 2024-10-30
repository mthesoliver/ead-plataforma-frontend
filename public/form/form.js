// variables 
let inputValue = document.getElementById('input_course').value;
const inputElement = document.getElementById('input_course');
// helper variables
const helperIconClose = document.getElementById('helper_icon_close');
const helperTextClose = document.getElementById('helper_text_close');
const helperIconOpen = document.getElementById('helper_icon_okay');
const helperTextOpen = document.getElementById('helper_text_okay');
const helperTextDefault = document.getElementById('helper_text_default');
// title variables & form
let inputValuePhone = document.getElementById('input_phone').value;
const mainTitle = document.getElementById('main_title');
const mainSubtitle = document.getElementById('main_subtitle');
const stepOneForm = document.getElementById('step_one_form');
const stepTwoForm = document.getElementById('step_two_form');
const stepThreeForm = document.getElementById('step_three_form');
const loaderOne = document.getElementById('loader');
const mainIconTwo = document.getElementById('btn_icon_1');


const placeholders = [
    'sua-empresa',
    'seu-curso',
    'sua-escola',
];

// control elements
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 200;

// typing main function
function handleTyping() {
    const currentWord = placeholders[wordIndex];  // Pega a palavra atual

    if (!isDeleting) {
        inputElement.placeholder = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, 1000);
        }
    } else {
        inputElement.placeholder = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % placeholders.length;
        }
    }

    const nextDelay = isDeleting ? 100 : 200;
    setTimeout(handleTyping, nextDelay);
}

// initialize typing function
setTimeout(handleTyping, delay);

// main functions
function handleInput(event) {
    inputValue = sanitizeString(event.target.value);
    event.target.value = inputValue;
}


function handleCtaTest(formSection, title, subtitle) {
    if (formSection.classList.contains('hidden')) {
        mainTitle.innerText = title;
        mainSubtitle.innerText = subtitle;
    }
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
                helperTextDefault.classList.add('hidden');

                setTimeout(() => {
                    stepOneForm.classList.add('hidden');
                    stepTwoForm.classList.remove('hidden');

                    handleCtaTest(stepOneForm, 'Boa escolha!', 'Vamos enviar o seu acesso. Qual o seu melhor email?');
                }, 4000)
                removeStyle([helperIconOpen, helperTextOpen, helperIconClose, helperTextClose], 4000);
            } else {
                helperIconClose.classList.remove('hidden');
                helperTextClose.classList.remove('hidden');
                helperIconOpen.classList.add('hidden');
                helperTextOpen.classList.add('hidden');
                helperTextDefault.classList.add('hidden');

                removeStyle([helperIconOpen, helperTextOpen, helperIconClose, helperTextClose], 10000);
                setTimeout(() => {
                    helperTextDefault.classList.remove('hidden');
                }, 10000)
            }
        } catch (error) {
            return ''
        }
    }
}

function handleInputPhone(event) {
    inputValuePhone = sanitizeStringToNumbers(event.target.value);
    event.target.value = inputValuePhone;
}

function handleSubmitStepTwo(event) {
    event.preventDefault();
    mainIconTwo.classList.add('hidden');
    loaderOne.classList.remove('hidden');
    setTimeout(() => {
        window.open("https://eadplataforma.com/thanks", '_blank');
        loaderOne.classList.add('hidden')
        mainIconTwo.classList.remove('hidden');
        window.location.reload();
    }, 5000);
}
