import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
import { useEffect, useState } from 'react';
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

    const [username, setUsername] = useState('')

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}

	return (
		<ChatEngine
			height='100vh'
			userName='zaid'
			userSecret='zaid'
			projectID='5b3b9bca-41d4-4ebd-ac97-427ee3b0704d'
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
	)
}

export default MyChatComponent;