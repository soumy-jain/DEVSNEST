var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
// Ambiguity
library.sort((a,b) =>{
    if(a.libraryID>b.libraryID)
        return -1;
    else
        return 1;
});
console.log(library);