let currentQuestionIndex = 0; // Индекс текущего вопроса
let userAnswers = []; // Массив для хранения ответов пользователя
let questionTimeLimit = 60; // Время на один вопрос (в секундах)
let questionTimer; // Таймер для текущего вопроса
let startTime = Date.now(); // Инициализация времени начала теста

let questions = [
    
    {
        question: "1. Кайсы варианттагы сүйлөмдө тыныш белгилери туура коюлган?",
        options: ["(А) Анын огородунда түрдүү мөмө-жемиштердин : алма, алча, өрүк, алмуруттун көчөттөрү отургузулган. ", "(Б) Анын огородунда түрдүү мөмө-жемитердин ; алма, алча, өрүк, алмуруттун: көчөттөрү отургузулган.", "(В) Анын огородунда түрдүү мөмө-жемиштердин – алма, алча, өрүк, алмуруттун – көчөттөрү отургузулган.", "(Г) Анын огородунда түрдүү мөмө-жемиштердин – алма, алча, өрүк, алмуруттун, көчөттөрү отургузулган."],
        answer: "(А) Анын огородунда түрдүү мөмө-жемиштердин : алма, алча, өрүк, алмуруттун көчөттөрү отургузулган. ",
        
    },
    
    {
        question: "2.  Кайсы сүйлөмдөгү асты сызылган сөз кыймыл-аракеттин ишке ашышын тилейт?",
        options: ["(А) Айтканын аткарсам, мени тынч коёр.", "(Б) Айтканын аткарсам, ыраазы кылсам.", "(В) Айтканын аткарсам, ал да сөзүндө турат.", "(Г) Аткарсамбы, аткарбасамбы деп ойлонуп отурам."],
        answer: "(Б) Айтканын аткарсам, ыраазы кылсам." ,
        
    },
    {
        question: "3. Кайсы варианттагы асты сызылган сөз “жөнөкөй” деген мааниде колдонулган?",
        options: ["(А) Баарыңардай эле, ал да – кара жумушчунун баласы.", "(Б) Кара басып, убагында келе албай калбадымбы!..", "(В) Кара кийген аялдар кошок кошуп отурушту.", "(Г) Кара далы атка конбой, турмушка чыксаңчы."],
        answer: "(А) Баарыңардай эле, ал да – кара жумушчунун баласы." ,
        
    },
    
    {
        question: "4. Кайсы варианттагы сүйлөмдө асты сызылган сөз туура ташымалданган?",
        options: ["А) Учурдагы кырдаалдын кооптуу -лугун көпчүлүк түшүнбөй жатат.", "Б) Токтогул Сатылган - овдун чыгармачы-лыгына арналган маареке өткөрүлдү.", "В) То - онун жели көңүлүн сергитти.", "г) Г) Мындай учурда айыл башчысы А. Т. - Тилеков ишке жарачу эле"],
        answer: "А) Учурдагы кырдаалдын кооптуу -лугун көпчүлүк түшүнбөй жатат.",
        
    },
    
    {
        question: "5. Төмөндө берилген сүйлөм бөлүктөрүн кайсы варианттагы ырааттуулук боюнча жайгаштырсак, сүйлөмдү туура түзгөн болобуз?(I. баласынын бетинен сүйүп) (II. догдуруна телефон чалды да)  (III. Алманбет жумуштан келди) (IV. эртеңки бош убактысын тактады)",
    
        options: ["(А) I, III, IV, II", "(Б) II, IV, I, III", "(В) III, I, II, IV", "(Г) IV, II, I, II"],
        answer: "(В) III, I, II, IV" ,
    },
    {
        question: "6. Кайсы варианттагы сүйлөмдө тыныш белгилери туура коюлган?",
        options: ["(А) Менин оюмча, аныкы туура.", "(Б) Сен жок дегенде, эшиктин алдын шыпырчы, көрөлү.", "(В) Ооба андан артык адамды көргөн жокмун.", "(Г) Тахир Азаматтын ою боюнча, мыкты адис."],
        answer: "(А) Менин оюмча, аныкы туура."
    },
    {
        question: "7. Кайсы варианттагы сөз заттын түсүн билдирип турат?",
        options: ["(А) Ак сүттүн айранына не жетсин!", "(Б) Анын ушунчалык ак көңүл экенине таң калдым.", "(В) Ал элге ак эмгеги менен жаккан.", "(Г) Анын ак жоолугу жүзүнө куп жарашыптыр."],
        answer: "(Г) Анын ак жоолугу жүзүнө куп жарашыптыр."
    },
    {
        question: "8. Кайсы варианттагы сүйлөмдүн түзүлүшүндө жазуу эрежесине дал келбеген ката бар.",
        options: ["(А) Асан Абай жолун бир нече жолу белекке берген.", "(Б) Тогжан – менимче, “Абай жолундагы” эң сүйкүмдүү каарман.", "(В) “Абай жолу” – Абай акындын жашоо таржымалын баяндаган роман.", "(Г) “Абай жолу” чыгармасы – М. Ауезовдун талыкпас эмгеги"],
        answer: "(А) Асан Абай жолун бир нече жолу белекке берген."
    },
    {
        question: "9.  Кайсы катардагы сүйлөмдө сүйлөмдүн биринчи бөлүгү экинчи бөлүгүнүн мезгилин билдирет? ",
        options: ["(А) Карантин бүтсө, ишибизди калган жерден уланталы.", "(Б) Ал айылга келсе, апасы кубанат эле.", "(В) Катуу өкүнсө да, анысын сездирген жок.", "(Г) Байкеси кайда иштесе, үй-бүлөсү да ошол жакка көчөт."],
        answer: "(А) Карантин бүтсө, ишибизди калган жерден уланталы.",
    },
    {
        question: "10. Кайсы варианттагы сүйлөмдө асты сызылган сөз туура жазылган сөз?",
        options: ["(А) Эмильдин үйүндө жүргөндөр –ревизорлор.", "(Б) Атам 1967-жылы 20-январьда төрөлгөн.", "(В) 20-октябрь – алардын баш кошкон күнү.","(Г) Мираида журналистика факултетинде окуган."],
        answer: "(В) 20-октябрь – алардын баш кошкон күнү.",
    },
    {
        question: "11. Кайсы варианттагы асты сызылган сөз тике маанисинде колдонулду?",
        options: ["(А) Бул машина ар бир адамдын көзү түшчүдөй экен.", "(Б) Ошол апаатта канча адамдын көзү өттү.", "(В) Өмүр бою Аскардын көзүн карап жашады.", "(Г) Аңырайган көзүн көрсөң, жүрөгүң түшчүдөй..."],
        answer: "(Г) Аңырайган көзүн көрсөң, жүрөгүң түшчүдөй...",
    },
    {
        question: "12.     Кайсы варианттагы сүйлөмдө тыныш белгилери туура коюлган?",
        options: ["(А) “Эмне болсо да, чынчылдыгыңдан жазба” – дечү эле атасы.", "(Б) Атасы “Эмне болсо да, чынчылдыктан жазбаш” керектигин көп айтчу.", "(В) “Эмне болсо да, дечү эле атасы, -чынчылдыгыңдан жазба.”", "(Г) Атасы: “Эмне болсо да, чынчылдыгыңдан жазба,” – дечү эле"],
        answer: "(Г) Атасы: “Эмне болсо да, чынчылдыгыңдан жазба,” – дечү эле",
    },
   
    {
        question: "13.   Ата-энемдин жумушуна байланыш-туу, Бишкек шаарына көчүп жаткан-дыктан, № 5 гимназияда окуп жатам. Ошондуктан өздүк деломду берүүңүздү өтүнөм. Гимназия администрациясы тарабынан берилген маалымат катты тиркеймин. (Жогоруда берилген үлгү иш кагаздардын кайсы түрүнө кирет)? ",
        options: ["(А) Түшүнүк кат ", "(Б) Арыз", "(В) Билдирүү", "(Г) Маалымдама"],
        answer: "(Б) Арыз",
    },
    
    {
        question: "14.     Кайсы катардагы сүйлөмдө асты сызылган сөз өкүнүү маанисин билдирип турат?",
        options: ["(А) Анын бул жаатта тажрыйбасы бар, андан бир ооз сурасаңчы.", "(Б) Анын кайда барарын сурабапмын, же сен сурасаңчы,", "(В) Биз сага уруксат алып коёлу, же өзүң эле сурасаңчы.", "(Г) Өзүм билемдик кылып тил укпайлы, атаман бир сурасаңчы."],
        answer: "(Б) Анын кайда барарын сурабапмын, же сен сурасаңчы,",
    },
    {
        question: "15. Кайсы варианттагы татаал сүйлөмдө биринчи жөнөкөй сүйлөм натыйжаны, экинчиси анын себебин көрсөтөт?",
        options: ["(А) Тапшырмаңды аткарбасаң да, сабактан калба.", "(Б) Ал атасын көргөн эмес, кандай адам экенин билбейт.","(В) Керегем, сага айтам, келиним сен ук.", "(Г) Укпайт деп ушак айтпа, жердин да кулагы бар."],
        answer: "(Г) Укпайт деп ушак айтпа, жердин да кулагы бар.",
    },
   {
        question: "16. Кайсы катардагы сүйлөмдөрдө асты сызылган сөздөр бирдей мааниде колдонулду? (I. Ушунусу балага туура келет го.), (II. Бул суроонун жообу туура белгиленген),(III. Анын кылганы туура, жөн эле күнөөлөй бербе.),(IV. Оңго бурул да, туура тоону көздөй бас.)",
        options: ["(А) I, II гана", "(Б) II, III гана", "(В) III, IV гана ", "(Г) IV, I гана"],
        answer: "(Б) II, III гана",
    },
    {
        question: "17. Кайсы сүйлөйдө асты сызылган сөз кыймыл-аракетти туюндурду?",
        options: ["(А) Бул ишкана түптөлгөндөн баштап, Акыл кара жанын карч уруп иштеди.", "(Б) Бул айылга көчүп келгенден баштап оңолду.", "(В) Топтолгон жаштарды зериктирбей ыр кесе баштап жиберди.","(Г) Жеңеси Асыл келгенден баштап, кеткенге чейин аны чарк айланып жүрдү."],
        answer: "(В) Топтолгон жаштарды зериктирбей ыр кесе баштап жиберди.",
    },
    {
        question: "18. Кылган иши элге жагып урмат-сыйга татыса да Балбайдын иниси менмен-синген да көпкөн да жок. Сүйлөмдөгү кайсы сөздөрдөн кийин үтүр белгиси коюлушу керек",
        options: ["(А) урмат-сыйга, балбайдын иниси, менменсинген да", "(Б) татыса да, менменсинген да, көпкөн да", "(В) жагып, татыса да, менменсинген да", "(Г) жагып, балбайдын иниси, көпкөн да"],
        answer: "(В) жагып, татыса да, менменсинген да",
    },
    {
        question: "19. Кайсы варианттагы сүйлөмдүн биринчи бөлүгү экинчи бөлүгүндөгү ойдун аткарылган максатын билдирип турат? ",
        options: ["(А) Атасына таянып, эрке өстү.", "(Б) Сен жардамдашпасаң, ким каралашат аларга?", "(В) Жоо билип калбасын деп, муну экөөнөн башка эч кимге айткан жок.","(Г) Таң агарып, күн чыкканча, кирпик-кашын ирмебей ойгоо жатты"],
        answer: "(В) Жоо билип калбасын деп, муну экөөнөн башка эч кимге айткан жок.",
    },
    
    {
        question: "20. Кайсы катардагы сүйлөмдө асты сызылган сөз ”белгисиз” деген сөзгө маанилеш? ",
        options: ["(А) Бир нече жолу аны ишендирүүгө аракет кылды.", "(Б) Экөөнун барчу жери да бир эле.", "(В) Текчедеги китептердин арасынан бир эле китепте окуй элек экен.", "(Г) Жерди айдап арпа себүүгө бир күн кетти."],
        answer: "(Б) Экөөнун барчу жери да бир эле.",
    },
    
    {
            question: "21. Кайсы варианттагы асты сызылган сөз жаңсоо иретинде колдонулду?",
            options: ["(А) Ал окуду.", "(Б)Ал аябай таланттуу эле.", "(В) Ал досу дайыма келет.", "(Г) Ал- эң мыкты адам."],
            answer: "(Г) Ал- эң мыкты адам."
    },
        {
            question: "22. Мен ооруп калгандыгыма байланыштуу, жумушту өз убагында бүтүрө албай калдым. Мындан кийин кандай болбосун милдетимди так аткарам деп ишендирем. Текст иш кагаздарынын кайсы түрүнүн үлгүсү боло алат?",
            options: ["(А) Арыз", "(Б) Тил кат", "(В) Түшүнүк кат", "(Г) Ишеним кат"],
            answer: "(В) Түшүнүк кат"
        },
        {
            question: "23. Анарбайдын колдоочусу ушул досу. Сүйлөмдөгү асты сызылган сөздөн кийин кайсы тыныш белгиси коюлат?",
            options: ["(А) Үтүр", "(Б) Сызыкча", "(В) Кош чекит", "(Г) Коюлбайт"],
            answer: "(Б) Сызыкча"
        },
        {
            question: "24. Ысык-Көл туризмге ылайыктуу жер. Эгер туризм тармагын өнүктүрөбүз десек, дал ушул жерден башташыбыз керек. Бул үчүн ыңгайлуу жер да, шарт да бар. Калганы биздин эмгегибизге, аракетибизге байланыштуу. Жогорудагы үзүндү тексттин кайсы түрүнөн алынган?",
            options: ["(А) Илимий макаладан", "(Б) Көркөм чыгармадан", "(В) Расмий билдирүүдөн", "(Г) Публицистикалык макаладан"],
            answer: "(Г) Публицистикалык макаладан"
        },
        {
            question: "25. Кайсы варианттагы сөз эрежеге ылайык жазылган?",
            options: ["(А) Коёюн", "(Б) Коёйун", "(В) Койойун", "(Г) Койоюн"],
            answer: "(А) Коёюн"
        },
        {
            question: "26. Кайсы варианттагы сүйлөм адабий тилге ылайык жазылган?",
            options: [
                "(А) Бул актка он беш катышуучулардын колу коюлду.",
                "(Б) Биз өз ишибизди так, туура аткарганга милдеттүүбүз.",
                "(В) Т. Касымбеков Сынган кылычтагы ар бир маалыматты тактаганга аракет кылган.",
                "(Г) Ушунун баары сенин беймаралдагыңдын айынан болду."
            ],
            answer: "(Б) Биз өз ишибизди так, туура аткарганга милдеттүүбүз."
        },
        {
            question: "27 Кайсы варианттагы асты сызылган сөз өтмө маанисинде колдонулду?",
            options: [
                "(А) ”Арстан падыша” мультфильми балдардын сүймөнчүлүгүнө татыган.",
                "(Б) Короого түлкү кирип, тооктун баарын жеп кетиптир.",
                "(В) Торпок болгончо эркеледиң го, чиркин.",
                "(Г) Кечээ кулундар желеден бошоп кетиптир."
            ],
            answer: "(В) Торпок болгончо эркеледиң го, чиркин."
        },
        {
            question: "28. Биз жарандар добушубузду сатпай татыктуу адамды шайлашыбыз керек. Сүйлөмдөгү кайсы сөздөдөн кийин үтүр белгиси коюлат?",
            options: ["(А) Биз, сатпай", "(Б) Биз, татыктуу", "(В) Биз, жарандар, татыктуу", "(Г) Биз, жарандар, сатпай"],
            answer: "(Г) Биз, жарандар, сатпай",
        },
        {
            question: "29. Достор, албетте, ар дайым бири-бирин колдошот. (Сүйлөмдөгү кайсы сөз сүйлөмгө мүчө боло албайт?)",
            options: ["(А) Достор", "(Б) Албетте", "(В) Ар дайым", "(Г) Колдошо"],
            answer: "(Б) Албетте",
        },
        {
            question: "30. Та...байм, кө..сүз, парад..а,шаар..ык Жогорудагы сөздөргө кайсы варианттагы тамгаларды ирети менен койсок сөздөр туура жазылган болот? ",
            options: ["(А) ң, з, к, д", "(Б) м, з, к, л", "(В) н, з, г, л", "(Г) м, с, г, д"],
            answer: "(В) н, з, г, л",
        },
];

// Таймер для одного вопроса
function startQuestionTimer() {
    let timeLeft = questionTimeLimit;
    document.getElementById('timer').innerText = `Время на текущий вопрос:⏳: ${timeLeft}секунд`;

    questionTimer = setInterval(() => {
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            alert('Время на вопрос истекло! Переходим к следующему.');
            userAnswers.push(null); // Добавляем "Нет ответа"
            moveToNextQuestion(); // Переходим к следующему вопросу
        } else {
            document.getElementById('timer').innerText = `Время на текущий вопрос:⏳: ${timeLeft}скеунд`;
        }
    }, 1000);
}

// Переход к следующему вопросу
function moveToNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults(); // Завершаем тест
    }
}

// Отображение текущего вопроса
function showQuestion() {
    clearInterval(questionTimer); // Очищаем предыдущий таймер
    let currentQuestion = questions[currentQuestionIndex];
    let questionSection = document.getElementById('questionSection');
    let cleanedQuestionText = currentQuestion.question.replace(/\$\$\$\$/g, '_____');

    questionSection.innerHTML = `
        <h3>${cleanedQuestionText}</h3>
        <form id="questionForm">
            ${currentQuestion.options.map((option) => `
                <label>
                    <input type="radio" name="answer" value="${option}">
                    ${option}
                </label><br>
            `).join('')}
        </form>
    `;

    // Запускаем таймер на текущий вопрос
    startQuestionTimer();

    document.getElementById('nextQuestionBtn').style.display = 'inline-block';
}

// Обработка кнопки "Следующий вопрос"
document.getElementById('nextQuestionBtn').addEventListener('click', function () {
    let selectedAnswer = document.querySelector('input[name="answer"]:checked')?.value;

    if (selectedAnswer) {
        userAnswers.push(selectedAnswer); // Сохраняем выбранный ответ
        moveToNextQuestion();
    } else {
        alert('Пожалуйста, выберите ответ или дождитесь завершения времени!');
    }
});

// Завершение теста
function showResults() {
    clearInterval(questionTimer); // Останавливаем последний таймер

    let resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';
    let score = 0;

    questions.forEach((question, index) => {
        let cleanedQuestionText = question.question.replace(/\$\$\$\$/g, '_____');
        let userAnswer = userAnswers[index];
        let isCorrect = userAnswer === question.answer;
        let resultIcon = isCorrect ? '✓' : '✗';
        let resultColor = isCorrect ? 'green' : 'red';

        resultsList.innerHTML += `
            <p><strong>Вопрос ${index + 1}:</strong> ${cleanedQuestionText}</p>
            <p>Ваш ответ: <span>${userAnswer || 'Нет ответа'}</span></p>
            <p>Правильный ответ: <span>${question.answer}</span></p>
            <p>
                <span style="color: ${resultColor}; font-weight: bold;">${resultIcon}</span> 
                ${isCorrect ? 'Правильно' : 'Неправильно'}
            </p>
            <p><strong>Объяснение:</strong> ${question.explanation}</p>
            <hr>
        `;

        if (isCorrect) {
            score++;
        }
    });

    let percentage = (score / questions.length) * 100;
    let grade = percentage >= 70 ? '5 😇😇😇' : percentage >= 50 ? '4  🙃🙃🙃' : percentage >= 40 ? '3  😟😟😟' : '2  😫😫😫';

    resultsList.innerHTML += `<h4>Ваш результат: ${score} из ${questions.length} (${percentage.toFixed(2)}%)</h4>`;
    resultsList.innerHTML += `<p>Ваша оценка : <strong>${grade}</strong></p>`;

    // Вывод времени, затраченного на тест
    let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    let minutes = Math.floor(elapsedTime / 60);
    let seconds = elapsedTime % 60;
    resultsList.innerHTML += `<p>Время, затраченное на тест: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}</p>`;

    // Переход к блоку с результатами
    document.getElementById('testSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'block';
}

// Старт теста
    document.getElementById('startTestBtn').addEventListener('click', function () {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('testSection').style.display = 'block';
    showQuestion(); // Показываем первый вопрос
});
document.getElementById('restartTestBtn').addEventListener('click', function () {
    // Сброс переменных
    currentQuestionIndex = 0;
    userAnswers = [];
    startTime = Date.now(); // Сброс времени начала

    // Скрыть результаты и показать тест
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('testSection').style.display = 'block';

    // Показать первый вопрос
    showQuestion();
});




