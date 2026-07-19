// static
class Data {
    data = 10
    static data_s = 10

    increase(){
        this.data++
    }

    increaseS(){
        Data.data_s++
    }
}

let staticTest = new Data()
staticTest.increaseS()
staticTest.increaseS()
staticTest.increaseS()
staticTest.increaseS()
staticTest.increaseS()
staticTest = new Data()
staticTest.increaseS()
staticTest.increaseS()
staticTest.increaseS()
staticTest.increaseS()
staticTest.increaseS()

console.log(staticTest.data_s)
console.log(Data.data_s)