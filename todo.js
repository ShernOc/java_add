const List = [
    "Pray", "BrushTeeth", "WashFace", "MakeBed", "Shower", "Breakfast", "Study", "CleanRoom"
];

function ToDo(Todo) {
    return (Todo);
}

console.log(ToDo(List));
console.log(ToDo(List[5])); //  Breakfast 

List[0]="life is great"; // this will update prayer to "life is great"
List.push("Lunch")// Adds lunch at the end of the list 
List.unshift("Wakeup")// adds the element to the beginning of an array

console.log(ToDo(List))

List.slice(2)
// console.log(Todo(List)); 



console.log(goodJob(todo));