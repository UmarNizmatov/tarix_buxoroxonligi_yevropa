// ===== TEST DATA =====
const questions = [
    {
        id: 1,
        question: "Buxoro Xonligi qachon ta'sis etilgan?",
        options: [
            "1450-yilda",
            "1500-yilda",
            "1550-yilda",
            "1600-yilda"
        ],
        correct: 1,
        category: "bukhara"
    },
    {
        id: 2,
        question: "Buxoro Xonligining asoschisi kim edi?",
        options: [
            "Temur",
            "Shayboniyxon",
            "Abdullaxon II",
            "Amir Temur"
        ],
        correct: 1,
        category: "bukhara"
    },
    {
        id: 3,
        question: "Shayboniylar sulolasi qaysi yillarda hukmronlik qilgan?",
        options: [
            "1450-1550",
            "1500-1598",
            "1550-1650",
            "1600-1700"
        ],
        correct: 1,
        category: "bukhara"
    },
    {
        id: 4,
        question: "Abdullaxon II necha yil hukmronlik qilgan?",
        options: [
            "30 yil",
            "35 yil",
            "41 yil",
            "50 yil"
        ],
        correct: 2,
        category: "bukhara"
    },
    {
        id: 5,
        question: "Mangʻitlar sulolasi qachon hokimiyatga keldi?",
        options: [
            "1700-yilda",
            "1747-yilda",
            "1800-yilda",
            "1850-yilda"
        ],
        correct: 1,
        category: "bukhara"
    },
    {
        id: 6,
        question: "Buxoro qachon Rossiya protektoratiga aylandi?",
        options: [
            "1850-yilda",
            "1868-yilda",
            "1880-yilda",
            "1900-yilda"
        ],
        correct: 1,
        category: "bukhara"
    },
    {
        id: 7,
        question: "Buxoroda nechta madrasa bo'lgan?",
        options: [
            "50 dan ortiq",
            "75 dan ortiq",
            "100 dan ortiq",
            "150 dan ortiq"
        ],
        correct: 2,
        category: "bukhara"
    },
    {
        id: 8,
        question: "Kalon minorasi qancha balandlikda?",
        options: [
            "36 metr",
            "40 metr",
            "46 metr",
            "50 metr"
        ],
        correct: 2,
        category: "bukhara"
    },
    {
        id: 9,
        question: "Uyg'onish davri (Renaissance) qayerda boshlandi?",
        options: [
            "Fransiyada",
            "Ispaniyada",
            "Italiyada",
            "Angliyada"
        ],
        correct: 2,
        category: "europe"
    },
    {
        id: 10,
        question: "Gutenberg bosma mashinasini qachon ixtiro qildi?",
        options: [
            "1450-yilda",
            "1500-yilda",
            "1550-yilda",
            "1600-yilda"
        ],
        correct: 0,
        category: "europe"
    },
    {
        id: 11,
        question: "Xristofor Kolumb Amerikani qachon kashf etdi?",
        options: [
            "1480-yilda",
            "1492-yilda",
            "1500-yilda",
            "1510-yilda"
        ],
        correct: 1,
        category: "europe"
    },
    {
        id: 12,
        question: "Martin Lyuterning reformatsiyasi qachon boshlandi?",
        options: [
            "1500-yilda",
            "1510-yilda",
            "1517-yilda",
            "1525-yilda"
        ],
        correct: 2,
        category: "europe"
    },
    {
        id: 13,
        question: "Fransiya inqilobi qachon boshlandi?",
        options: [
            "1789-yilda",
            "1799-yilda",
            "1800-yilda",
            "1815-yilda"
        ],
        correct: 0,
        category: "europe"
    },
    {
        id: 14,
        question: "Napoleon qachon imperator bo'ldi?",
        options: [
            "1799-yilda",
            "1800-yilda",
            "1804-yilda",
            "1810-yilda"
        ],
        correct: 2,
        category: "europe"
    },
    {
        id: 15,
        question: "Sanoat inqilobi qayerda boshlandi?",
        options: [
            "Fransiyada",
            "Germaniyada",
            "Angliyada",
            "Italiyada"
        ],
        correct: 2,
        category: "europe"
    },
    {
        id: 16,
        question: "Birinchi Jahon urushi qachon boshlandi?",
        options: [
            "1912-yilda",
            "1914-yilda",
            "1916-yilda",
            "1918-yilda"
        ],
        correct: 1,
        category: "europe"
    },
    {
        id: 17,
        question: "Buxoro Xonligi va Yevropaning o'xshash tomoni nima edi?",
        options: [
            "Respublika tuzumi",
            "Monarxiya hokimiyati",
            "Demokratiya",
            "Federal tizim"
        ],
        correct: 1,
        category: "comparison"
    },
    {
        id: 18,
        question: "Yevropada qanday texnologik yutuq bo'lgan?",
        options: [
            "Ipak ishlab chiqarish",
            "Bosma mashinasi",
            "Aryk tizimi",
            "Gilt to'qish"
        ],
        correct: 1,
        category: "comparison"
    },
    {
        id: 19,
        question: "Buxoro Xonligida asosiy din qaysi bo'lgan?",
        options: [
            "Xristianlik",
            "Buddizm",
            "Islom",
            "Iudaizm"
        ],
        correct: 2,
        category: "bukhara"
    },
    {
        id: 20,
        question: "Yevropada 19-asrda qanday o'zgarish bo'ldi?",
        options: [
            "Feodalizm kuchaydi",
            "Sanoat rivojlandi",
            "Qishloq xo'jaligi tugadi",
            "Monarxiya tugadi"
        ],
        correct: 1,
        category: "comparison"
    }
];

// ===== TEST STATE =====
let currentQuestion = 0;
let userAnswers = [];
let score = 0;

// ===== TEST FUNCTIONS =====
function startTest() {
    document.getElementById('testIntro').style.display = 'none';
    document.getElementById('quizContent').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const question = questions[currentQuestion];
    const container = document.getElementById('questionContainer');
    
    // Update progress
    updateProgress();
    
    // Create question HTML
    container.innerHTML = `
        <div class="question-text">
            <strong>Savol ${currentQuestion + 1}:</strong> ${question.question}
        </div>
        <ul class="options-list">
            ${question.options.map((option, index) => `
                <li class="option-item">
                    <label class="option-label ${userAnswers[currentQuestion] === index ? 'selected' : ''}">
                        <input type="radio" name="answer" value="${index}" 
                            ${userAnswers[currentQuestion] === index ? 'checked' : ''}
                            onchange="selectAnswer(${index})">
                        <span>${option}</span>
                    </label>
                </li>
            `).join('')}
        </ul>
    `;
    
    // Update buttons
    updateButtons();
}

function selectAnswer(answerIndex) {
    userAnswers[currentQuestion] = answerIndex;
    
    // Update UI
    const labels = document.querySelectorAll('.option-label');
    labels.forEach((label, index) => {
        if (index === answerIndex) {
            label.classList.add('selected');
        } else {
            label.classList.remove('selected');
        }
    });
    
    // Enable next button
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    if (userAnswers[currentQuestion] === undefined) {
        alert('Iltimos, javob tanlang!');
        return;
    }
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    // Previous button
    prevBtn.disabled = currentQuestion === 0;
    
    // Next/Submit buttons
    if (currentQuestion === questions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
        nextBtn.disabled = userAnswers[currentQuestion] === undefined;
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('questionNumber').textContent = `Savol ${currentQuestion + 1}/${questions.length}`;
    document.getElementById('score').textContent = `Ball: ${score}`;
}

function submitTest() {
    if (userAnswers[currentQuestion] === undefined) {
        alert('Iltimos, oxirgi savolga javob bering!');
        return;
    }
    
    // Calculate score
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === questions[index].correct) {
            score++;
        }
    });
    
    // Show results
    showResults();
}

function showResults() {
    document.getElementById('quizContent').style.display = 'none';
    document.getElementById('testResults').style.display = 'block';
    
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 70;
    
    // Update results UI
    document.getElementById('finalScore').textContent = score;
    document.getElementById('scorePercentage').textContent = percentage + '%';
    
    // Icon and title
    const icon = document.getElementById('resultsIcon');
    const title = document.getElementById('resultsTitle');
    const message = document.getElementById('resultsMessage');
    
    if (passed) {
        icon.innerHTML = '🎉';
        title.textContent = 'Tabriklaymiz!';
        title.style.color = '#228B22';
        message.innerHTML = `
            <p>Siz testdan muvaffaqiyatli o'tdingiz!</p>
            <p>Natijangiz: <strong>${score}/${questions.length}</strong> (${percentage}%)</p>
            <p>Bilimingiz juda yaxshi darajada!</p>
        `;
    } else {
        icon.innerHTML = '📚';
        title.textContent = 'Yana harakat qiling!';
        title.style.color = '#DC143C';
        message.innerHTML = `
            <p>Afsuski, siz testdan o'ta olmadingiz.</p>
            <p>Natijangiz: <strong>${score}/${questions.length}</strong> (${percentage}%)</p>
            <p>O'tish balli: 70%</p>
            <p>Materiallarni yana bir bor o'qib chiqing va qaytadan urinib ko'ring!</p>
        `;
    }
    
    // Animate score
    animateScore();
}

function animateScore() {
    const scoreElement = document.getElementById('finalScore');
    const targetScore = parseInt(scoreElement.textContent);
    let currentScore = 0;
    
    const interval = setInterval(() => {
        if (currentScore < targetScore) {
            currentScore++;
            scoreElement.textContent = currentScore;
        } else {
            clearInterval(interval);
        }
    }, 100);
}

function restartTest() {
    currentQuestion = 0;
    userAnswers = [];
    score = 0;
    
    document.getElementById('testResults').style.display = 'none';
    document.getElementById('testIntro').style.display = 'block';
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    const quizVisible = document.getElementById('quizContent').style.display === 'block';
    
    if (!quizVisible) return;
    
    // Arrow keys for navigation
    if (e.key === 'ArrowLeft') {
        prevQuestion();
    } else if (e.key === 'ArrowRight') {
        if (userAnswers[currentQuestion] !== undefined) {
            nextQuestion();
        }
    }
    
    // Number keys for answers (1-4)
    if (e.key >= '1' && e.key <= '4') {
        const answerIndex = parseInt(e.key) - 1;
        if (answerIndex < questions[currentQuestion].options.length) {
            selectAnswer(answerIndex);
        }
    }
    
    // Enter to submit on last question
    if (e.key === 'Enter' && currentQuestion === questions.length - 1) {
        submitTest();
    }
});

// ===== PREVENT CHEATING =====
// Disable right-click in test
document.addEventListener('contextmenu', (e) => {
    if (document.getElementById('quizContent').style.display === 'block') {
        e.preventDefault();
    }
});

// Warn on tab switch
document.addEventListener('visibilitychange', () => {
    if (document.hidden && document.getElementById('quizContent').style.display === 'block') {
        console.log('User switched tab during test');
        // Could add warning counter here
    }
});

// ===== AUTO-SAVE PROGRESS =====
function saveProgress() {
    const testState = {
        currentQuestion,
        userAnswers,
        timestamp: Date.now()
    };
    localStorage.setItem('testProgress', JSON.stringify(testState));
}

function loadProgress() {
    const saved = localStorage.getItem('testProgress');
    if (saved) {
        const state = JSON.parse(saved);
        // Only restore if less than 1 hour old
        if (Date.now() - state.timestamp < 3600000) {
            currentQuestion = state.currentQuestion;
            userAnswers = state.userAnswers;
            return true;
        }
    }
    return false;
}

// Save on answer
window.selectAnswer = (function(originalSelectAnswer) {
    return function(answerIndex) {
        originalSelectAnswer(answerIndex);
        saveProgress();
    };
})(window.selectAnswer || selectAnswer);

// ===== ANALYTICS =====
function trackTestCompletion(score, total) {
    console.log(`Test completed: ${score}/${total}`);
    // Could send to analytics service
}

// Override submitTest to include analytics
const originalSubmitTest = submitTest;
submitTest = function() {
    originalSubmitTest();
    trackTestCompletion(score, questions.length);
};

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    // Check if there's saved progress
    if (loadProgress() && confirm('Siz avval boshlagan testingizni davom ettirishni xohlaysizmi?')) {
        startTest();
    }
});
