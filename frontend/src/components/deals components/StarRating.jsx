import { FaStar } from 'react-icons/fa';
import React, {useState} from 'react'

const StarRating = (props) => {
    const [rating, setRating] = useState(5);
    const [hover, setHover] = useState(null);
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i+1;
                 
                return(
                    <label key={i}>
                        <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
                        <FaStar 
                            className="star" 
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                            size={props.size}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)} />
                    </label>
                );
            })}
        </div>
    )
}

export default StarRating;
