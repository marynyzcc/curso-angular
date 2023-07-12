export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Jane',
}

const passenger2: Passenger = {
    name: 'John',
    children: ['Michael', 'Anne'],
}

const returnChildrenNumber = (passenger: Passenger) => {
    const howManyChidren = passenger.children?.length || 0;
    //const howManyChidren = passenger.children!.length || 0; // ! --> Not Null Assertion Operator
                                                              // define que nunca va a recibir un valor nulo
    console.log(passenger.name, howManyChidren);

    return howManyChidren;
}

returnChildrenNumber(passenger1);