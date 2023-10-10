/*GET: não tem body
DELETE: não tem body
POST: tem body
    exemplo:
        POST http://localhost:3003/playlists
        Body {
            "name": "Rock"
        }
PUT: tem body
    exemplo:
        PUT http://localhost:3003/playlists
        Body {
            "name": "Forróck"
        }*/

/*
function calcularDigitosVerificadores(codigoBarras: string):string {
    const numeros = codigoBarras.replace(/-/g, '').split('').map(Number);
          
    if (numeros.length !== 9) {
        return 'Código de barras inválido (comprimento incorreto)';
    }
          
function calcularDigitoVerificador(inicio: number, multiplicador:number[]) {
    const soma = numeros.slice(inicio - 1, inicio - 1 + 7)
    .reduce((acc, val) => acc + val, 0);
          
    const resultado = (11 - (soma % 11)) % 11;
        return resultado === 10 || resultado === 11 ? 0 : resultado;
    }
          
    const primeiroDigitoVerificador = calcularDigitoVerificador(1, [8, 7, 6, 5, 4, 3, 2]);
          
    const segundoDigitoVerificador = calcularDigitoVerificador(1, [9, 8, 7, 6, 5, 4, 3, 2]);

    if (numeros[7] === primeiroDigitoVerificador && numeros[8] === segundoDigitoVerificador) {
        return 'Código de barras válido';
    } else {
        return 'Código de barras inválido (dígitos verificadores incorretos)';
    }
}
console.log(calcularDigitosVerificadores("123-4567-97"))
*/

/*
let contatos=[
    {nome: "João", tipo: "amigo"},
    {nome: "João", tipo: "amigo"},
    {nome: "João", tipo: "amigo"},
    {nome: "Maria", tipo: "família"},
    {nome: "Maria", tipo: "família"}
]
   
function verifyNameType(nome: string, tipo: string): object{
    return contatos.filter((contato) => {
        return( 
        contato.nome === nome && contato.tipo === tipo
    )})
}
console.log(verifyNameType("Maria", "família")
*/
    
import express, { Request, Response } from 'express';
import cors from 'cors';
        
const app = express();
        
app.use(express.json()); // Use 'express.json()' em vez de 'express.JSON()'
app.use(cors());

/*
function registerStudent(name: string, grade: string) {
    const students: any[] = [];
    const student = { name, grade };
    students.push(student);
    console.log(students)
    return student;
    }

app.post('/register', (req: Request, res: Response) => {
    const {name, grade} = req.body
    if(!name || !grade){
        res.send("Requisição sem body correto.")
    }
    registerStudent(name, grade)
    res.send("Registro criado!").status(201)
})
*/


/*
const products: any[] = [
    { id: 1, name: 'Teclado', price: 100.00, stock: 50 },
    { id: 2, name: 'Mouse', price: 50.00, stock: 100 },
];

function updateProductDetails(productId: number, price: number, stock: number) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            products[i].price = price
            products[i].stock = stock
            console.log(products[i])
        }
    }
}
app.put('/updateProduct', (req: Request, res: Response) => {
        const {productId, price, stock} = req.body
        if(!productId || !price || !stock){
            return res.send("Body incorreto").status(400)
        }
        updateProductDetails(productId, price, stock)
        res.send("Produto atualizado com sucesso!").status(200)
    });
    

app.listen(3003, () => {
    console.log("Rodando na porta 3003")
})
 

/*
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
})

app.get('/users', (req: Request, res: Response) => {
    if(req.headers.key === "key"){
        res.send("Chave válida")
    }else{
        res.send("Chave inválida")
    }
})

app.get('/usuarios', (req: Request, res: Response) => {
    if(req.body.chave === "chave"){
        res.send("Body válido")
    }else{
        res.send("Body Inválido")
    }
})

app.get('/usuario', (req: Request, res: Response) => {
    if(req.query.chave === "chave"){
        res.send("Query válido")
    }else{
        res.send("Query inválido")
    }
})

app.get('/user/:id', (req: Request, res: Response) => {
    let idUser = req.params.id
    if(idUser === "1"){
        res.send(`Seu id é: ${idUser}`)
    }else{
        res.send(`Seu id não é 1, é: ${idUser}`)
    }
})
*/

interface Task {
    id: number;
    description: string;
    completed: boolean;
  }
  
  const tasks: Task[] = [
    { id: 1, description: 'Comprar mantimentos', completed: false },
    { id: 2, description: 'Lavar o carro', completed: true },
    { id: 3, description: 'Estudar TypeScript', completed: false },
  ];

function deleteTask(id: number) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
    }
}

        
app.delete('/tasks/:id', (req: Request, res: Response) => {
    tasks.forEach((task) => {
        console.log(`ID: ${task.id}, Descrição: ${task.description}, Completada: ${task.completed}`);
    });
    console.log("------------------------------------------")
    let idTask = Number(req.params.id)
    if (!idTask){
        return (res.send("ID inválido"))
    }
    deleteTask(idTask)
    res.send("Task deletada com sucesso!").status(200)
    console.log("------------------------------------------")
    tasks.forEach((task) => {
        console.log(`ID: ${task.id}, Descrição: ${task.description}, Completada: ${task.completed}`);
    });
})

app.listen(3003, () => {
    console.log("Server rodando na porta 3003");
    });