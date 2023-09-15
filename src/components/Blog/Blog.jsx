import PropTypes from 'prop-types';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

const Blog = ({blog, handleBookmark, handleReadingTime}) => {
    // console.log(blog)
    const {title,cover,author_img,author,post_date,reading_time,hashtags
    } = blog;
    return (
        <div className='mb-20 '>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between items-center mt-7 mb-4'> 
                <div className='flex gap-2 items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h2>{author}</h2>
                        <p>{post_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <small>{reading_time} min read</small>
                   <button onClick={()=>handleBookmark(blog)}
                    className='ml-2'><FaBookmark>{FaRegBookmark}</FaBookmark></button>
                </div>
            </div>
            <h3 className='text-4xl font-bold leading-10'> {title}</h3>
            {
                hashtags.map((hash,ind)=><small key={ind} className='text-xl ml-2'><a href="#">{hash}</a></small>)
            }
            <div >
                <button onClick={()=>handleReadingTime(reading_time)} className='bg-gray-500 p-1 rounded-lg text-white' >Book Marked</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func
}

export default Blog;