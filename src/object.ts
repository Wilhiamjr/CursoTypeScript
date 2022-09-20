// type
type order ={
    productId:number
    price:number
}
type User ={
    firstname: string
    age: number
    email:string
    password?:string
    orders: order[]
}

const user:User ={
  firstname:'Wilhiam',
  age:28,
  email:'wilhiam_junior@hotmail.com',
 
  orders:[{productId:1,price:200}]
}

const printLOG = (Message?:string) =>{}
printLOG(user.password)


const printLOG2= (Message:string) =>{}
printLOG2(user.password!)


// Unions serve para unir dois types 
type Author ={
    books :string[]
}

const autor: Author & User ={
    firstname: 'Wilhiam',
    age: 28,
    email:'email@email.com',
    orders:[],
    books:["1"]
}

// Interfaces é quase a mesma coisa que types com umas pequenas diferenças

interface author{
    books: string[]
    qt: number
    readonly name: string
}

const autores: author ={
    name:'wilhiam',
    qt:2,
    books:['1']
}
// funções em types e interfaces

type login = {
    name:string
    password: string
    login(): string
}

const Login: login = {
     name:'wilhiam',
     password:"123",
     login(){
        return 'Acessado ou negado'
     }

}

interface Acesso {
    permitido: boolean
    rota(): string
}

const acessar :Acesso ={
    permitido: true,
    rota(){
        return 'localhost'
    }
}