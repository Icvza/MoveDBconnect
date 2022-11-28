let numOfline = 60
let random = 5 


while( numOfline > 0){
    console.log("(" + random + "," + numOfline + ")" + ",")

    random = random - 1

    if (random < 0 || random === 0){
        random = random + 4
    }

    numOfline --
}