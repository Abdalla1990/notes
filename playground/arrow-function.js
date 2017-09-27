// var square = (x) => {
//     var result = x * x;

//     return result;

// }
// console.log(square(9));
// var square1 = x => x * x;
// console.log(square1(9));

var user = {
    name: 'abdalla',
    sayhi: () => {
        console.log(`hi`);
        //u cant use arguments on an arrow function ! 
        //console.log(arguments); => // will not work 
        // u cant use this keyword in an arrow function ! 
        // console.log(this.name); => will not work
    },

    // sayhiAlt() fucntion {} <= another definiation 
    sayhiAlt() {

        console.log(`hi`);
        console.log(arguments); // u cant use arguments in normal function 
        console.log(this.name);
    }
};

user.sayhiAlt(1, 2, 3, 4);