
// import { useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MyChatComponent () {
    
    // const [ currentUser, setCurrentUser ] = useState( null );
    // const [ otherUser, setOtherUser ] = useState( null );
    const { id } = useParams();

    async function getOrCreateUser () {
        await axios.get( `${process.env.REACT_APP_BACKEND_LINK}/userprofile/${localStorage.getItem( 'id' )}` ).then( res => {
            console.log( res.data.user );
            
        } );
        await axios.get( `${process.env.REACT_APP_BACKEND_LINK}/userprofile/${id}` ).then( res => {
            console.log( res.data.user );
        } );
    };
    getOrCreateUser();
    
}

export default MyChatComponent;