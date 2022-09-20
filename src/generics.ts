
const returnValor = <T>(valor:T):T => valor;

const messagem = returnValor<string>('hello word');

const count = returnValor<number>(7)

function getArray<type>(array:type[]){
    return array[0]
}

const primeiroArray = getArray<string>(["1","2"]);
const segundoArray = getArray<number>([1,2])

// Promisses

const promessa = async ():Promise<number>=>{
    return 0;
}

// Classes

class generica<T>{
    valor: T;
     constructor(valor:T){
        this.valor = valor
     }
}

const Generica = new generica(5);
const Generica2 = new generica("5");