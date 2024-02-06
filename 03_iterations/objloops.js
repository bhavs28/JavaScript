//for in on objects
const harrypotter={
    part1:'The sorcerers stone',
    part2:'The chamber of secrets',
    part3:'The prisoner of Azkaban',
    part4:'The Goblet of Fire',
}

//console.log(harrypotter);

for (const key in harrypotter) {
    //console.log(`${key} is ${harrypotter[key]}`);
}

//array of objects

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})