import { itemsActions } from "ContextAPI/config/constants";


export const itemsReducer = ( state, action ) => {
    switch ( action.type ) {
        case itemsActions.GET_ITEMS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case itemsActions.GET_ITEMS_SUCCESS:
            return {
                ...state,
                items: action.payload.items,
                isLoading: false,
                error: null,
            };
        case itemsActions.GET_ITEMS_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false,
            };

        case itemsActions.ADD_ITEM_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case itemsActions.ADD_ITEM_SUCCESS:
            return {
                ...state,
                items: [ ...state.items, action.payload.item ],
                isLoading: false,
                error: null,
            };
        case itemsActions.ADD_ITEM_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false,
            };

        case itemsActions.DELETE_ITEM_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case itemsActions.DELETE_ITEM_SUCCESS:
            return {
                ...state,
                items: state.items.filter( item => item.id !== action.payload.id ),
                isLoading: false,
                error: null,
            };
        case itemsActions.DELETE_ITEM_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false,
            };

        case itemsActions.UPDATE_ITEM_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case itemsActions.UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                items: state.items.map( item => {
                    if ( item._id === action.payload.item.id ) {
                        return action.payload.item;
                    }
                    return item;
                } ),
                isLoading: false,
                error: null,
            };
        case itemsActions.UPDATE_ITEM_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false,
            };
        default:
            throw new Error( `Unhandled action type: ${action.type}` );
    }
};