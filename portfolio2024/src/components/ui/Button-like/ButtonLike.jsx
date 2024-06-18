import './ButtonLike.css';
import { useState } from 'react';


function ButtonLike() {
    const colors =["black", "orange", "cyan", "red", "yellow"];
    const [likes, setLikes] = useState(0);

    const likesButton = () => {
        setLikes(likes + 1);
    }

    const like = likes === 1 ? 'like' : ' likes'

  return (
    <div>
        <i className='bi bi-bookmark-heart like' role='button' onClick={likesButton} style={{backgroundColor: colors[likes % 5]}} ><p className='number-like'>{likes}{like}</p></i>
    </div>
  )
}

export default ButtonLike