/* DESESTRUCTURACION DE ARGUMENTOS */
export interface Product {
    description: string;
    price: number;
}

/*const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}*/

/*const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}*/

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation( options: TaxCalculationOptions ): [number, number] {    
    const { tax, products } = options;
    let total = 0;

    products.forEach( ({ price }) => {
        total += price;
    })

    return [total, total * tax];
}

//const shoppingCart = [phone, tablet];
//const tax = 0.15;

/*const[ total, taxTotal ] = taxCalculation({        
    tax,    //como la constante la hemos llamado igual al tipo de objeto,
            // equivale a poner tax:tax
    products: shoppingCart,
});*/


//console.log('Total: ', result[0]);
//console.log('Tax: ', result[1]);

//console.log('Total: ', total);
//console.log('Tax: ', taxTotal);