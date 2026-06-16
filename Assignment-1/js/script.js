//Arrays for each column
const subjects = ["The  turkey", "A  dog", "My  grandma", "His  turtle", "Our  family"];

const verbs = ["sat  on", "ate", "danced with", "saw", "doesn't like"];

const adjectives = ["a  funny", "a  scary", "a  goofy", "a  slimy", "a  barking"];

const nouns = ["goat", "monkey", "fish", "cow", "frog"];

const places = ["on the moon", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

//Current position in each array
var subjectIndex = 0;
var verbIndex = 0;
var adjectiveIndex = 0;
var nounIndex = 0;
var placesIndex = 0;

//Buttons
var part1 = document.getElementById("part1");
var part2 = document.getElementById("part2");
var part3 = document.getElementById("part3");
var part4 = document.getElementById("part4");
var part5 = document.getElementById("part5");
var output = document.getElementById("output");

//Subject button
part1.onclick = function() {
    if (subjectIndex >= subjects.length) {
        subjectIndex++;
    }
    part1.innerHTML = subjects[subjectIndex];
};

//Verb button
part2.onclick = function() {
    if (verbIndex >= verbs.length) {
        verbIndex++;
    }
    part2.innerHTML = verbs[verbIndex];
};

//Adjective button
part3.onclick = function() {
    if (adjectiveIndex >= adjectives.length) {
        adjectiveIndex++;
    }
    part3.innerHTML = adjectives[adjectiveIndex];
};

//Noun button
part4.onclick = function() {
    if (nounIndex >= nouns.length) {
        nounIndex++;
    }
    part4.innerHTML = nouns[nounIndex];
};

//Places button
part5.onclick = function() {
    if (placesIndex >= places.length) {
        placesIndex++;
    }
    part5.innerHTML = places[placesIndex];
}; 

//Tell Story button
document.getElementById("showStory").onclick = function() {
    subjectIndex = Math.floor(Math.random() * subjects.length);
    verbIndex = Math.floor(Math.random() * verbs.length);
    adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    nounIndex = Math.floor(Math.random() * nouns.length);
    placesIndex = Math.floor(Math.random() * places.length);

    part1.innerHTML = subjects[subjectIndex];
    part2.innerHTML = verbs[verbIndex];
    part3.innerHTML = adjectives[adjectiveIndex];
    part4.innerHTML = nouns[nounIndex];
    part5.innerHTML = places[placesIndex];

    output.innerHTML = subjects[subjectIndex] + " " + verbs[verbIndex] + " " + adjectives[adjectiveIndex] + " " + nouns[nounIndex] + " " + places[placesIndex];
};

//Random Story button
document.getElementById("randomStory").onclick = function() {
    subjectIndex = Math.floor(Math.random() * subjects.length);
    verbIndex = Math.floor(Math.random() * verbs.length);
    adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    nounIndex = Math.floor(Math.random() * nouns.length);
    placesIndex = Math.floor(Math.random() * places.length);

    part1.innerHTML = subjects[subjectIndex];
    part2.innerHTML = verbs[verbIndex];
    part3.innerHTML = adjectives[adjectiveIndex];
    part4.innerHTML = nouns[nounIndex];
    part5.innerHTML = places[placesIndex];

    output.innerHTML = subjects[subjectIndex] + " " + verbs[verbIndex] + " " + adjectives[adjectiveIndex] + " " + nouns[nounIndex] + " " + places[placesIndex];
};

//Reset button
document.getElementById("reset").onclick = function() {
    subjectIndex = 0;
    verbIndex = 0;
    adjectiveIndex = 0;
    nounIndex = 0;
    placesIndex = 0;

    part1.innerHTML = subjects[0];
    part2.innerHTML = verbs[0];
    part3.innerHTML = adjectives[0];
    part4.innerHTML = nouns[0];
    part5.innerHTML = places[0];

    output.innerHTML = "";
};
