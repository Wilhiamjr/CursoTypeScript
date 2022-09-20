const sum = (a: number, b: number) => {
  return a + b;
};

const value = sum(2, 3);

//retorno

const sum2 = (a: number, b: number): string => {
  return a + b.toString();
};

const value2 = sum2(2, 3);

// Tipo void em função não retorna nada

const log = (messagem: string): void => {
  console.log(messagem);
};

// Interface com funções

interface Sum {
  (x: number, y: number): number;
}

const soma: Sum = (x:number,y:number) => { 
 return x+y;
}