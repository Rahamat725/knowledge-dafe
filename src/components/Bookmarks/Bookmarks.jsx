import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'



const Bookmarks = ({bookmarks, readingTime}) => {
    return (
       
       <div className="w-1/3 bg-gray-200 ">
        <div>
            <h2 className="text-center text-xl">Readng Time Spent: {readingTime} min</h2>
        </div>
            <h1 className="text-3xl text-center">Book marks: {bookmarks.length}</h1>
       {
        bookmarks.map((bookmark) => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
       }
        </div>
    );
};

Bookmarks.propTypes = {
   
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number

}
export default Bookmarks;

