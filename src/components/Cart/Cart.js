import React from 'react';
const Cart = (props) => {
    const population = props.cart
    // let totalPopulation = 0;
    // for (let i = 0; i < population.length; i++) {
    //     const element = population[i];
    //     totalPopulation = totalPopulation + element.population;
    // }

    const pop = population.reduce((sum,elm)=>sum + elm.population,0)
    return (
        <div>
            <h2>Total population: {pop}</h2>
        </div>
    );
};

export default Cart;