function closure(){
    let count = 0;
    function increment(){
        count++;
        console.log(`Count : ${count}`);
    }
    function getCount(){
        return count;
    }

    return {increment,getCount};
}
const counter = closure();
counter.increment();
counter.increment();
counter.increment();
console.log(`The Current count : ${counter.getCount()}`)
counter.increment();
