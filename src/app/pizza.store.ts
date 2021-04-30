
import { createAction , createReducer, on,createFeatureSelector,createSelector, select } from "@ngrx/store";

interface PizzaState{
    hasPepperoni: boolean;
    hasSausage: boolean;
}

//Actions
export const addPepperoni = createAction('[Pizza Detail] Add Pepperoni');
export const removePepperoni = createAction('[Pizza Detail] Remove Pepperoni')
export const addSausage = createAction('[Pizza Detail] Add Sousage')
export const removeSausage = createAction('[Pizza Detail] Remove Sausage')

//reducer  federate one property on the larger object(state transition)
const initialState: PizzaState = {
    hasPepperoni:false,
    hasSausage:false
}
const CHEESE_PIZZA_IMAGE = 'assets/cheese_pizza.jpeg'
const PEPPERONI_PIZZA_IMAGE = 'assets/pepperoni_pizza.jpeg'
const SAUSAGE_PIZZA_IMAGE = 'assets/sausage_pizza.jpeg'
const PEPPERONI_AND_SAUSAGE_IMAGE = 'assets/sausage_and_pepperoni_pizza.jpeg'
export const reducer = createReducer<PizzaState>(
    initialState,
    on(addPepperoni, (state) => ({...state, hasPepperoni:true})),
    on(removePepperoni, (state) => ({...state,hasPepperoni:false})),
    on(addSausage,(state)=>({...state, hasSausage:true})),
    on(removeSausage,(state) => ({...state, hasSausage:false}))
)
function determineImageUrl({hasPepperoni,hasSausage}:PizzaState): string {
if(hasPepperoni && hasSausage){
    return PEPPERONI_AND_SAUSAGE_IMAGE;
}else if(hasSausage){
    return SAUSAGE_PIZZA_IMAGE;
}else if(hasPepperoni){
    return PEPPERONI_PIZZA_IMAGE
}else{
    return CHEESE_PIZZA_IMAGE;
}
}
const STARTING_PRICE = 12;
const PEPPERONI_PRICE = 3;
const SAUSAGE_PRICE = 2.5;
function determinePrice({hasPepperoni,hasSausage}:PizzaState):number{
    return (STARTING_PRICE + (hasPepperoni ? PEPPERONI_PRICE : 0) + (hasSausage ? SAUSAGE_PRICE : 0));

}

//selector : getting information from state object(sliced information)
export const PIZZA_FEATURE_NAME = 'pizza'; //one source of truth
const pizzaFeatureSelector = createFeatureSelector<PizzaState>(
    PIZZA_FEATURE_NAME
);

export const selectPizzaImage = createSelector(
    pizzaFeatureSelector,
    (pizzaState) => determineImageUrl(pizzaState)
);
export const selectPizzaPrice = createSelector(
    pizzaFeatureSelector,
    determinePrice
);

export const hasPepperoni = createSelector(
    pizzaFeatureSelector,
    (pizzaState) => pizzaState.hasPepperoni
);

export const hasSausage = createSelector(
    pizzaFeatureSelector,
    (pizzaState) => pizzaState.hasSausage
)


