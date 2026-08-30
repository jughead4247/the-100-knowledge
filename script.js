const questions = [

    // QUESTION 1
    {
        question: "What is the name of the space station where humanity's survivors live at the beginning of The 100?",
        answers: [
            ["Arkadia", 0],
            ["The Colony", 0],
            ["The Exodus", 0],
            ["The Ark", 2]
        ]
    },

    // QUESTION 2
    {
        question: "Why are the 100 juvenile prisoners sent down to Earth in the first episode?",
        answers: [
            ["To test whether Earth is survivable", 2],
            ["To rescue other survivors", 0],
            ["To find the Grounders", 0],
            ["To search for food", 0]
        ]
    },

    // QUESTION 3
    {
        question: "What is Bellamy Blake's relationship to Octavia?",
        answers: [
            ["Step-siblings", 0],
            ["Half-siblings", 2],
            ["Cousins", 0],
            ["Adoptive siblings", 0]
        ]
    },

    // QUESTION 4
    {
        question: "What is the Grounder name given to Clarke after she kills many people at Mount Weather?",
        answers: [
            ["Wanheda", 2],
            ["Flamekeeper", 0],
            ["Sheidheda", 0],
            ["Heda", 0]
        ]
    },

    // QUESTION 5
    {
        question: "Who created A.L.I.E. and later became the first person to possess the Flame?",
        answers: [
            ["Lexa Kom Trikru", 0],
            ["Becca Franko", 2],
            ["Raven Reyes", 0],
            ["Abby Griffin", 0]
        ]
    },

    // QUESTION 6
    {
        question: "What is the name of the device implanted in Commanders that contains A.L.I.E. 2.0?",
        answers: [
            ["The Flame", 2],
            ["The Core", 0],
            ["The Chip", 0],
            ["The Key", 0]
        ]
    },

    // QUESTION 7
    {
        question: "What is the name of the bunker where many survivors shelter during Praimfaya?",
        answers: [
            ["Mount Weather Bunker", 0],
            ["Ark Bunker", 0],
            ["Sanctum Bunker", 0],
            ["Second Dawn Bunker", 2]
        ]
    },

    // QUESTION 8
    {
        question: "Who is the leader of the Second Dawn movement?",
        answers: [
            ["Marcus Kane", 0],
            ["Jaha", 0],
            ["Bill Cadogan", 2],
            ["Thelonious Jaha", 0]
        ]
    },

    // QUESTION 9
    {
        question: "Who is the leader of the Eligius IV prisoners when they return to Earth?",
        answers: [
            ["McCreary", 0],
            ["Echo", 0],
            ["Charmaine Diyoza", 2],
            ["Shaw", 0]
        ]
    },

    // QUESTION 10
    {
        question: "What is the name of the habitable planet where the Eligius III mission eventually establishes Sanctum?",
        answers: [
            ["Skyring", 0],
            ["Beta", 0],
            ["Alpha", 2],
            ["Bardo", 0]
        ]
    },

    // QUESTION 11
    {
        question: "What is the name of the warrior who becomes known as Blodreina?",
        answers: [
            ["Octavia", 2],
            ["Indra", 0],
            ["Echo", 0],
            ["Lexa", 0]
        ]
    },

    // QUESTION 12
    {
        question: "Why was Octavia hidden under the floor of the Blake family's apartment on the Ark?",
        answers: [
            ["She was infected with a disease", 0],
            ["She was an escaped prisoner", 0],
            ["She was an unregistered second child", 2],
            ["She was wanted for a crime", 0]
        ]
    },

    // QUESTION 13
    {
        question: "Who was responsible for killing Chancellor Jaha's son Wells in the early part of the series?",
        answers: [
            ["Diana Sydney", 0],
            ["Murphy", 0],
            ["Charlotte", 2],
            ["Octavia", 0]
        ]
    },

    // QUESTION 14
    {
        question: "Which Grounder clan is known as the Ice Nation?",
        answers: [
            ["Azgeda", 2],
            ["Podakru", 0],
            ["Trikru", 0],
            ["Sangedakru", 0]
        ]
    },

    // QUESTION 15
    {
        question: "Who was Lexa's mentor and the person who trained her before she became Commander?",
        answers: [
            ["Costia", 0],
            ["Anya", 0],
            ["Titus", 2],
            ["Indra", 0]
        ]
    },

    // QUESTION 16
    {
        question: "What is the name of the Grounder ritual combat used to determine a new Commander?",
        answers: [
            ["The Gathering", 0],
            ["The Blood Trial", 0],
            ["The Ascension", 0],
            ["The Conclave", 2]
        ]
    },

    // QUESTION 17
    {
        question: "What was the original purpose of the Eligius III mission?",
        answers: [
            ["To find habitable worlds for human settlement", 2],
            ["To transport Grounders to another planet", 0],
            ["To destroy A.L.I.E.", 0],
            ["To rescue the people on the Ark", 0]
        ]
    },

    // QUESTION 18
    {
        question: "What is the name of the stone that connects the planets in the final seasons?",
        answers: [
            ["The Anomaly Stone", 2],
            ["The Bardo Core", 0],
            ["The Ascension Stone", 0],
            ["The Flame Stone", 0]
        ]
    },

    // QUESTION 19
    {
        question: "Which planet is known as Bardo?",
        answers: [
            ["Planet Gamma", 2],
            ["Planet Beta", 0],
            ["Planet Beta-2", 0],
            ["Planet Alpha", 0]
        ]
    },

    // QUESTION 20
    {
        question: "What is the name of the test humanity must pass to achieve transcendence?",
        answers: [
            ["The Last War", 0],
            ["The Final Judgment", 0],
            ["The Ascension Trial", 0],
            ["The Final Test", 2]
        ]
    },

    // QUESTION 21
    {
        question: "Who ultimately takes the final test on behalf of humanity?",
        answers: [
            ["Clarke Griffin", 0],
            ["Raven Reyes", 2],
            ["Octavia Blake", 0],
            ["Bellamy Blake", 0]
        ]
    },

    // QUESTION 22
    {
        question: "What was Murphy's original crime that led to him being sent to the Ark's juvenile detention?",
        answers: [
            ["He stole food to feed his younger sister", 0],
            ["He stole medicine for his injured father", 0],
            ["He set fire to the living quarters of the guard who arrested his father", 2],
            ["He sabotaged the Ark air filtration system", 0]
        ]
    },

    // QUESTION 23
    {
        question: "What was the name of the valley that remained habitable after the second Praimfaya?",
        answers: [
            ["Sanctum Valley", 0],
            ["Shallow Valley", 2],
            ["Dead Zone Valley", 0],
            ["Eden Valley", 0]
        ]
    },

    // QUESTION 24
    {
        question: "What was Charles Pike's role on the Ark before coming to Earth?",
        answers: [
            ["Head of security", 0],
            ["Head of engineering", 0],
            ["Chief medical officer", 0],
            ["Earth Skills teacher", 2]
        ]
    },

    // QUESTION 25
    {
        question: "Where did the Farm Station originally land when it reached Earth?",
        answers: [
            ["Iowa", 2],
            ["Nebraska", 0],
            ["Wyoming", 0],
            ["Montana", 0]
        ]
    },

    // QUESTION 26
    {
        question: "What was the name of the woman who became the first Flamekeeper after Becca's death?",
        answers: [
            ["Callie Cadogan", 2],
            ["Trikru's first Commander", 0],
            ["August", 0],
            ["The Commander of Polis", 0]
        ]
    },

    // QUESTION 27
    {
        question: "What is the name of Charmaine Diyoza's daughter?",
        answers: [
            ["Hope Diyoza", 2],
            ["Hannah Diyoza", 0],
            ["Eden Diyoza", 0],
            ["Maya Diyoza", 0]
        ]
    },

    // QUESTION 28
    {
        question: "What name do Gabriel's followers use for themselves on Sanctum?",
        answers: [
            ["Sons of Gabriel", 0],
            ["Disciples of Gabriel", 0],
            ["Gabriel's Wonkru", 0],
            ["Children of Gabriel", 2]
        ]
    },

    // QUESTION 29
    {
        question: "Which Prime's mind drive was implanted into Clarke's body during the Sanctum storyline?",
        answers: [
            ["Josephine Lightbourne", 2],
            ["Simone Lightbourne", 0],
            ["Priya Desai", 0],
            ["Kayleigh Lee", 0]
        ]
    },

    // QUESTION 30
    {
        question: "At the end of the series, why is Clarke the only human who does not transcend with the others?",
        answers: [
            ["She voluntarily chose to remain on Earth", 0],
            ["She had never possessed the Flame", 0],
            ["She was already genetically incapable of transcendence", 0],
            ["She failed the test because she killed Cadogan during it", 2]
        ]
    },

    // QUESTION 31
    {
        question: "In Season 3, which character's mind is temporarily taken over by A.L.I.E. after A.L.I.E. exploits their neural implant?",
        answers: [
            ["Raven Reyes", 2],
            ["Octavia Blake", 0],
            ["Jasper Jordan", 0],
            ["Bellamy Blake", 0]
        ]
    },

    // QUESTION 32
    {
        question: "What was the name of the experimental station where Becca Franko developed A.L.I.E. 2.0 before returning to Earth?",
        answers: [
            ["Alpha Station", 0],
            ["Eligius IV", 0],
            ["Arkadia", 0],
            ["Polaris", 2]
        ]
    },

    // QUESTION 33
    {
        question: "In Season 7's flashback episode \"Anaconda,\" what was the name of Bill Cadogan's daughter who became involved in creating the early Grounder society?",
        answers: [
            ["Grace Cadogan", 0],
            ["Callie Cadogan", 2],
            ["Josephine Cadogan", 0],
            ["Hope Cadogan", 0]
        ]
    },

    // QUESTION 34
    {
        question: "What did the Mountain Men call the substance they extracted from the bone marrow of Grounders and Skaikru prisoners to help them survive Earth's radiation?",
        answers: [
            ["Marrow Fluid", 0],
            ["Nightblood Serum", 2],
            ["Bone Marrow", 0],
            ["Red Blood Serum", 0]
        ]
    },

    // QUESTION 35
    {
        question: "What was the name of the settlement where the remaining Skaikru lived after the Mount Weather conflict and before it was renamed Arkadia?",
        answers: [
            ["Camp Jaha", 2],
            ["Camp Phoenix", 0],
            ["Camp Alpha", 0],
            ["Camp Polaris", 0]
        ]
    },

    // QUESTION 36
    {
        question: "Which of these characters was one of the original members of the Eligius III colonization mission who became a Prime on Sanctum?",
        answers: [
            ["Russell Lightbourne", 2],
            ["Bill Cadogan", 0],
            ["Charmaine Diyoza", 0],
            ["John Murphy", 0]
        ]
    },

    // QUESTION 37
    {
        question: "What was Echo's original name before she took the identity of the real Echo?",
        answers: [
            ["Nia", 0],
            ["Ash", 2],
            ["Sierra", 0],
            ["Kara", 0]
        ]
    },

    // QUESTION 38
    {
        question: "What is Gaia's official role within Grounder tradition?",
        answers: [
            ["Flamebearer", 0],
            ["Flamekeeper", 2],
            ["Flame feeder", 0],
            ["Flame Guardian", 0]
        ]
    },

    // QUESTION 39
    {
        question: "Where was Hope Diyoza born?",
        answers: [
            ["Skyring", 2],
            ["Bardo", 0],
            ["Earth", 0],
            ["Sanctum", 0]
        ]
    },

    // QUESTION 40
    {
        question: "What was the name of the Ice Nation warrior who was Queen Nia's son and heir?",
        answers: [
            ["Roan", 2],
            ["Ontari", 0],
            ["Echo", 0],
            ["Emori", 0]
        ]
    },

    // QUESTION 41
    {
        question: "What was the name of the artificial intelligence created by Becca that caused the nuclear apocalypse?",
        answers: [
            ["A.L.I.E. 2.0", 0],
            ["The Flame", 0],
            ["A.L.I.E.", 2],
            ["The Key", 0]
        ]
    },

    // QUESTION 42
    {
        question: "What was the name of Jasper Jordan's girlfriend at Mount Weather?",
        answers: [
            ["Costia", 0],
            ["Maya Vie", 2],
            ["Harper McIntyre", 0],
            ["Madi Griffin", 0]
        ]
    },

    // QUESTION 43
    {
        question: "Who was the President of Mount Weather at the beginning of Season 2?",
        answers: [
            ["Theodore Wallace", 0],
            ["Cage Wallace", 0],
            ["Charles Wallace", 0],
            ["Dante Wallace", 2]
        ]
    },

    // QUESTION 44
    {
        question: "What was the name of Emori's twin brother?",
        answers: [
            ["Roan", 0],
            ["Gustus", 0],
            ["Otán", 2],
            ["Echo", 0]
        ]
    },

    // QUESTION 45
    {
        question: "What was the name of Monty Green's mother?",
        answers: [
            ["Abby Green", 0],
            ["Diana Green", 0],
            ["Aurora Green", 0],
            ["Hannah Green", 2]
        ]
    },

    // QUESTION 46
    {
        question: "Which Nightblood was secretly trained by the Ice Queen and later became the false Commander?",
        answers: [
            ["Madi", 0],
            ["Ontari", 2],
            ["Luna", 0],
            ["Ash", 0]
        ]
    },

    // QUESTION 47
    {
        question: "What was the name of the Eligius crew member who was a skilled pilot and became Raven Reyes's romantic partner on Earth?",
        answers: [
            ["Zeke Shaw", 0],
            ["Vincent Veil", 0],
            ["Miles Shaw", 2],
            ["Paxton McCreary", 0]
        ]
    },

    // QUESTION 48
    {
        question: "What was the name of the doctor who served as one of the chief physicians at Mount Weather?",
        answers: [
            ["Dr. Tsing", 2],
            ["Dr. Jackson", 0],
            ["Dr. Sinclair", 0],
            ["Dr. Griffin", 0]
        ]
    },

    // QUESTION 49
    {
        question: "What was the name of the Grounder clan that Luna belonged to before she founded Floukru?",
        answers: [
            ["Trikru", 2],
            ["Azgeda", 0],
            ["Floukru", 0],
            ["Sangedakru", 0]
        ]
    },

    // QUESTION 50
    {
        question: "Who was the first known person to become a Nightblood and later the first Commander?",
        answers: [
            ["Luna Kom Floukru", 0],
            ["Madi Griffin", 0],
            ["Becca Franko", 2],
            ["Callie Cadogan", 0]
        ]
    }

];

let currentQuestion = 0;
let score = 0;

// Remember selected answer for every question
let selectedAnswers = new Array(questions.length).fill(null);


const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const homeInfo = document.getElementById("home-info");

const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");
const shareButton = document.getElementById("share-btn");
const challengeButton = document.getElementById("challenge-btn");

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const progressBar = document.getElementById("progress-bar");


// --------------------------------------------------
// NAVIGATION BUTTONS
// --------------------------------------------------

let backButton = document.getElementById("back-btn");
let nextButton = document.getElementById("next-btn");


// Create buttons if they don't exist
if (!backButton || !nextButton) {

    const navigation = document.createElement("div");

    navigation.className = "quiz-navigation";

    backButton = document.createElement("button");
    backButton.id = "back-btn";
    backButton.className = "quiz-nav-btn";
    backButton.textContent = "← Back";

    nextButton = document.createElement("button");
    nextButton.id = "next-btn";
    nextButton.className = "quiz-nav-btn";
    nextButton.textContent = "Next →";

    navigation.appendChild(backButton);
    navigation.appendChild(nextButton);

    quizScreen.appendChild(navigation);
}


// --------------------------------------------------
// EVENTS
// --------------------------------------------------

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
shareButton.addEventListener("click", shareResult);
challengeButton.addEventListener("click", shareResult);

backButton.addEventListener("click", goBack);
nextButton.addEventListener("click", goNext);


// --------------------------------------------------
// START
// --------------------------------------------------

function startQuiz() {

    homeInfo.classList.add("hidden");

    currentQuestion = 0;
    score = 0;

    selectedAnswers = new Array(questions.length).fill(null);

    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion();
}


// --------------------------------------------------
// SHOW QUESTION
// --------------------------------------------------

function showQuestion() {

    const current = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent = current.question;

    answersContainer.innerHTML = "";


    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width = `${progress}%`;


    current.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent = answer[0];


        // ------------------------------------------
        // SHOW PREVIOUSLY SELECTED ANSWER
        // ------------------------------------------

        if (selectedAnswers[currentQuestion] === index) {

            button.classList.add("selected", "selected-answer");
        }


        // ------------------------------------------
        // ANSWER CLICK
        // ------------------------------------------

        button.addEventListener("click", () => {

            selectAnswer(index);

        });


        answersContainer.appendChild(button);

    });


    updateNavigation();
}


// --------------------------------------------------
// SELECT ANSWER
// --------------------------------------------------

function selectAnswer(answerIndex) {

    const previousAnswer =
        selectedAnswers[currentQuestion];


    // If the user changes an already-selected answer,
    // remove the old score first.
    if (previousAnswer !== null) {

        score -=
            questions[currentQuestion].answers[previousAnswer][1];

    }


    // Save selected answer
    selectedAnswers[currentQuestion] = answerIndex;


    // Add new score
    score +=
        questions[currentQuestion].answers[answerIndex][1];


    // ------------------------------------------
    // SHOW SELECTED ANSWER IMMEDIATELY
    // ------------------------------------------

    const buttons =
        answersContainer.querySelectorAll(".answer");

    buttons.forEach((button, index) => {

        button.classList.remove("selected", "selected-answer");

if (index === answerIndex) {
    button.classList.add("selected", "selected-answer");
}

    });


    // ------------------------------------------
    // FINAL QUESTION
    // ------------------------------------------

    if (currentQuestion === questions.length - 1) {

        nextButton.textContent = "Finish ✓";

        nextButton.disabled = false;

        return;

    }


    // ------------------------------------------
    // AUTOMATICALLY MOVE FORWARD
    // ------------------------------------------

    setTimeout(() => {

        currentQuestion++;

        showQuestion();

    }, 250);
}


// --------------------------------------------------
// NEXT BUTTON
// --------------------------------------------------

function goNext() {

    // No answer selected
    if (selectedAnswers[currentQuestion] === null) {

        return;

    }


    // Final question
    if (currentQuestion === questions.length - 1) {

        showResult();

        return;

    }


    currentQuestion++;

    showQuestion();
}


// --------------------------------------------------
// BACK BUTTON
// --------------------------------------------------

function goBack() {

    if (currentQuestion <= 0) {

        return;

    }


    currentQuestion--;

    showQuestion();
}


// --------------------------------------------------
// NAVIGATION STATE
// --------------------------------------------------

function updateNavigation() {

    // ------------------------------------------
    // BACK
    // ------------------------------------------

    if (currentQuestion === 0) {

        backButton.disabled = true;
        backButton.style.visibility = "hidden";

    } else {

        backButton.disabled = false;
        backButton.style.visibility = "visible";

    }


    // ------------------------------------------
    // NEXT / FINISH
    // ------------------------------------------

    if (currentQuestion === questions.length - 1) {

        nextButton.textContent = "Finish ✓";

    } else {

        nextButton.textContent = "Next →";

    }


    // If question has an answer, Next is available.
    // This is useful when the user comes back to a question.
    if (selectedAnswers[currentQuestion] !== null) {

        nextButton.disabled = false;

    } else {

        nextButton.disabled = true;

    }
}


// --------------------------------------------------
// RESULT
// --------------------------------------------------

function showResult() {

    homeInfo.classList.remove("hidden");

    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");


    document.getElementById("final-score").textContent = score;


    let title;
    let description;
    let survival;
    let icon;


    if (score <= 20) {

        title = "☠️ Skaikru Casualty";

        description =
            "Your knowledge of The 100 is still pretty limited. You might want to stay away from Polis until you've done some serious studying.";

        survival = "You'd struggle on the Ground";

        icon = "☠️";

    } else if (score <= 40) {

        title = "🗡️ Grounder Survivor";

        description =
            "You know some of the important characters and events, but the world of The 100 still has plenty of surprises left for you.";

        survival = "Survive the early seasons";

        icon = "🗡️";

    } else if (score <= 60) {

        title = "🛡️ Skaikru Survivor";

        description =
            "You've got a solid knowledge of The 100. You know the Ark, the Grounders and many of the major events.";

        survival = "Survive most of the series";

        icon = "🛡️";

    } else if (score <= 80) {

        title = "🔥 Wonkru Warrior";

        description =
            "You know The 100 very well. The major characters, clans, conflicts and events are clearly familiar territory.";

        survival = "Survive the apocalypse";

        icon = "🔥";

    } else if (score <= 94) {

        title = "👑 Heda";

        description =
            "Impressive. Your knowledge of The 100 is strong enough to make you a serious contender for Commander.";

        survival = "Lead the clans";

        icon = "👑";

    } else {

        title = "⚔️ Pramheda";

        description =
            "You know The 100 inside and out. From the Ark and the Grounders to Sanctum, Bardo and transcendence, almost nothing escaped your memory.";

        survival = "You know everything";

        icon = "⚔️";
    }


    document.getElementById("result-title").textContent = title;

    document.getElementById("result-description").textContent =
        description;

    document.getElementById("survival-time").textContent =
        survival;

    document.getElementById("result-icon").textContent =
        icon;

    progressBar.style.width = "100%";
}


// --------------------------------------------------
// RESTART
// --------------------------------------------------

function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    selectedAnswers = new Array(questions.length).fill(null);

    resultScreen.classList.add("hidden");

    startScreen.classList.remove("hidden");

    homeInfo.classList.remove("hidden");

    progressBar.style.width = "0%";
}


// --------------------------------------------------
// SHARE
// --------------------------------------------------

async function shareResult() {

    const title =
        document.getElementById("result-title").textContent;

    const survival =
        document.getElementById("survival-time").textContent;

    const finalScore =
        document.getElementById("final-score").textContent;


    const shareText =
        `⚔️ I scored ${finalScore}/100 on The 100 Quiz!\n\n` +
        `${title}\n` +
        `${survival}\n\n` +
        `How well do YOU know The 100?`;


    const shareData = {

        title: "How Well Do You Know The 100?",

        text: shareText,

        url: "https://apocalypsequizzes.com/the-100-quiz/"

    };


    try {

        if (navigator.share) {

            await navigator.share(shareData);

        } else {

            await navigator.clipboard.writeText(
                shareText +
                "\n\nhttps://apocalypsequizzes.com/the-100-quiz/"
            );

            alert(
                "Your result has been copied! You can paste it anywhere."
            );

        }

    } catch (error) {

        console.log("Sharing cancelled.");

    }
}
