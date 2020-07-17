class question {
    constructor(text, altA, altB, altC, altD, correct) {
        this.text = text;
        this.altA = altA;
        this.altB = altB;
        this.altC = altC;
        this.altD = altD;
        this.correct = correct;
    }
}

var questions = [
    new question(
        "Which two calendar months are named after Roman Emperors?",
        "July and June",
        "December and May", 
        "May and September", 
        "July and August", 
        "d"),

    new question(
        "How many holes are on a standard bowling ball?", 
        "2 holes", 
        "3 holes", 
        "5 holes", 
        "None of the above", 
        "b"),

    new question(
        "How did Spider-Man get his powers?",
        "Military experiment gone awry", 
        "Born with them", 
        "Woke up with them after a strange dream", 
        "Bitten by a radioactive spider ", 
        "d"),

    new question(
        "What are the main colors on the flag of Spain?", 
        "Red and yellow", 
        "Green and white", 
        "Blue and white", 
        "Black and yellow", 
        "a"),

    new question(
        "Which philosopher coined the term 'I think, therefore I am'?", 
        "Plato", 
        "Descartes", 
        "Socrates", 
        "Karl Marx", 
        "b"),

    new question(
        "Which of these means a speech in a play where a character talks to themselves rather than to other characters?", 
        "Interlude",
        "Monologue",
        "Soliloquy",
        "Revue",
        "c"),

    new question(
        "Who was mayor of London before Boris Johnson?", 
        "Ken Livingston",
        "John Major",
        "August Johnes",
        "Albert Kembly",
        "a"),

    new question(
        "Casterly Rock is the ancestral home of which family in Game of Thrones?", 
        "Rocky Landerson's",
        "The Starks",
        "The Tully's",
        "The Lannisters",
        "d"),
];