import { Link } from "react-router-dom";

const NotFound=()=> {
    return (
        <div className='not-found'>
            <h2>Sorry</h2>
            <p>the page canot found</p>
            <Link to="/">Back to home bage ...</Link>
        </div>
    );
}

export default NotFound
