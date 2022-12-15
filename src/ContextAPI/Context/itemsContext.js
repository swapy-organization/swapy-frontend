import { addItemAction, updateItemAction } from "ContextAPI/actions/itemsActions";
import { itemData } from "ContextAPI/config/initials";
import { itemsReducer } from "ContextAPI/Reducers/itemsReducer";

const { createContext, useContext, useReducer } = require( "react" );



const ItemContext = createContext();
export const useItem = () => useContext( ItemContext );

const ItemContextProvider = ( props ) => {
    const [ itemState, dispatch ] = useReducer( itemsReducer, itemData );

    const handleAddItem = async ( e ) => {
        e.preventDefault();
        const name = e.target.name.value,
            description = e.target.description.value,
            sellingPrice = e.target.sellingPrice.value,
            category = e.target.category.value,
            owner = localStorage.getItem( "id" ),
            cityOfSwap = e.target.cityOfSwap.value,
            countryOfSwap = e.target.countryOfSwap.value,
            swapFor = e.target.swapFor.value,
            uploadedImages = e.target.uploadedImages.files,
            sellingStatus = e.target.sellingStatus.value;
        const item = new FormData();
        item.append( "name", name );
        item.append( "description", description );
        item.append( "sellingPrice", sellingPrice );
        item.append( "category", category );
        item.append( "owner", owner );
        item.append( "cityOfSwap", cityOfSwap );
        item.append( "countryOfSwap", countryOfSwap );
        item.append( "swapFor", swapFor );
        item.append( "sellingStatus", sellingStatus );
        for ( let i = 0; i < uploadedImages.length; i++ ) {
            item.append( "uploadedImages", uploadedImages[ i ] );
        }
        addItemAction( dispatch, item );
    };

    const handleEditItem = async ( e, id ) => {
        e.preventDefault();
        const name = e.target.name.value,
            description = e.target.description.value,
            sellingPrice = e.target.sellingPrice.value,
            category = e.target.category.value,
            cityOfSwap = e.target.cityOfSwap.value,
            countryOfSwap = e.target.countryOfSwap.value,
            swapFor = e.target.swapFor.value,
            uploadedImages = e.target.uploadedImages.files,
            sellingStatus = e.target.sellingStatus.value,
            owner = localStorage.getItem( "id" );
        const item = new FormData();
        item.append( "name", name );
        item.append( "description", description );
        item.append( "sellingPrice", sellingPrice );
        item.append( "category", category );
        item.append( "cityOfSwap", cityOfSwap );
        item.append( "countryOfSwap", countryOfSwap );
        item.append( "swapFor", swapFor );
        item.append( "sellingStatus", sellingStatus );
        item.append( "owner", owner );
        for ( let i = 0; i < uploadedImages.length; i++ ) {
            item.append( "uploadedImages", uploadedImages[ i ] );
        }
        updateItemAction( dispatch, item, id );
    };
    return (
        <ItemContext.Provider
            value={{
                itemState,
                handleAddItem,
                handleEditItem,
            }}
        >
            {props.children}
        </ItemContext.Provider>
    );
};

export default ItemContextProvider;