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

//Cycle through each array
part1.addEventListener("click", () => {
    index1 = (index1 + 1) % subjects.length;
    part1.textContent = subjects[index1];
});

part2.addEventListener("click", () => {
    index2 = (index2 + 1) % verbs.length;
    part2.textContent = verbs[index2];
});

part3.addEventListener("click", () => {
    index3 = (index3 + 1) % adjectives.length;
    part3.textContent = adjectives[index3];
});

part4.addEventListener("click", () => {
    index4 = (index4 + 1) % nouns.length;
    part4.textContent = nouns[index4];
});

part5.addEventListener("click", () => {
    index5 = (index5 + 1) % places.length;
    part5.textContent = places[index5];
});

//Create Story
document.getElementById("showStory").addEventListener("click", () => {
    let story = `${subjects[index1]} ${verbs[index2]} ${adjectives[index3]} ${nouns[index4]} ${places[index5]}.`;
    output.textContent = story;
});

//Random Story
document.getElementById("randomStory").addEventListener("click", () => {
    index1 = Math.floor(Math.random() * subjects.length);
    index2 = Math.floor(Math.random() * verbs.length);
    index3 = Math.floor(Math.random() * adjectives.length);
    index4 = Math.floor(Math.random() * nouns.length);
    index5 = Math.floor(Math.random() * places.length);

    part1.textContent = subjects[index1];
    part2.textContent = verbs[index2];
    part3.textContent = adjectives[index3];
    part4.textContent = nouns[index4];
    part5.textContent = places[index5];

    output.textContent = `${subjects[index1]} ${verbs[index2]} ${adjectives[index3]} ${nouns[index4]} ${places[index5]}.`;
});

//Reset Button
document.getElementById("reset").addEventListener("click", () => {
    index1 = 0;
    index2 = 0;
    index3 = 0;
    index4 = 0;
    index5 = 0;

    part1.textContent = subjects[0];
    part2.textContent = verbs[0];
    part3.textContent = adjectives[0];
    part4.textContent = nouns[0];
    part5.textContent = places[0];

    output.textContent = "";
}); 