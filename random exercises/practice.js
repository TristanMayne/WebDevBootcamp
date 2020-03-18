var movies = [
    {
        name: "ice age",
        rating: 3,
        watched: true,
    },
    {
        name: "ice age 2",
        rating: 2,
        watched: false,
    },
    {
    name: "ice age 3",
        rating: 3,
        watched: true,
    }
]

movies.forEach(function(movies)
{
    console.log(buildstring(movies))
})

function buildstring(movies){
    var print = ""
    if (movies.watched == true){
        print += 'You have watched ';
    }
    else{
        print += 'You have not watched ';
    }
    print += "\""+ movies.name +"\"" + " - "+movies.rating +" stars";
    return print;
}