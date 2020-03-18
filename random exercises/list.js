window.setTimeout(function() {
var todo = ["Buy a new turtle"];
var input = prompt('what would you like to do')
var divider = '********';
while(input !='quit'){
if (input ==='list'){
    console.log(divider);
    todo.forEach(function(item,i){
        console.log(i+": "+item);
    })
    console.log(divider);
}
else if(input === 'new'){
    var newTodo = prompt('newtodo');
    todo.push(newTodo);
}
else if(input ==='delete'){
    var index = prompt('Enter index to delete');
    todo.splice(index,1)
}
var input = prompt('what would you like to do')
}
console.log('ok you quit')
 }, 500);