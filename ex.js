console.log('hello')

function hello() {
    console.log("howdy")
}

hello()

const helloArrow = () => {
    console.log("howdy")
}

function addStuff(cats, dogs) {
    return cats + dogs
}

console.log(addStuff(5, 5))
console.log(addStuff(10, -5))

const addArrow = (cats, dogs) => cats + dogs
console.log(addArrow(5, 5))
console.log(addArrow(10, -5))