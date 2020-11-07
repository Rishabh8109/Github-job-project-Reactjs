export const initialState = {
    backet : [],
    users : null
}

// export const getBasketTotal = (backet) => {
    
// }


 const reducer = (state  , action) => {
   
    switch(action.type) {
            case 'ADD_USER' : return {
                ...state,
                users : action.user
            }
      case 'ADD TO CART' :return {
         // Add to logic form add in Backet
        ...state,
         backet : [...state.backet,action.item],
         
     }
    case 'REMOVE TO BASKET' :
        let newBasket = [...state.backet];
        const Index = state.backet.findIndex(item => item.id === action.id);
        console.log(Index);
        if(Index >=0) {
           newBasket.splice(Index , 1);
        }
        return {
            ...state,
           backet : newBasket
        }
     default : return state
    }
}

export default reducer;