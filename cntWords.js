function numberOfWords(str) {
    const words = str.match(/\S+/g);
    if(words.length!==0){
        return words.length;
    }
    else{
        return 0;
    }
}

const str = "Welcome, to the Geeksforgeeks";
console.log("Word count:", numberOfWords(str));
