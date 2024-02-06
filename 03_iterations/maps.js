//unique pairs
//keeps track of the insertion order
//can be iterated easily through built in loops 

//for of and for each on maps

const map=new Map();
map.set('klaus','joseph moragan');
map.set('stefan','paul wesly');
map.set('damon','ian somerholder');

//console.log(map);

//for of loop
for (const [character,realname] of map) {
     //console.log(`${realname} played the character ${character}`);
}

// for in loop
 for(const [character,realname] in map){
//     console.log(`character: ${character} and Cast: ${realname}`);
 }

//we cant use for in loop for maps.Its mainly for objects

map.forEach((value,key)=>{
    console.log(`${key} is played by ${value}`);
})