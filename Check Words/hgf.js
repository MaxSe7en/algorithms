
function compareInput2(input, test){
    if(typeof input != 'string' || typeof test != 'string') return false

    if(input.length != test.length) return false

    const list_of_words_in_input = input.split(' ')
    const list_of_words_in_test = test.split(' ')

    let is_the_same = true

    for(const one_word of list_of_words_in_test){
        if(!list_of_words_in_input.includes(one_word)){
            is_the_same = false

            break
        }
    }

    return is_the_same

}

console.log(compareInput2('Darko Jackson', 'Jackson Darko'))