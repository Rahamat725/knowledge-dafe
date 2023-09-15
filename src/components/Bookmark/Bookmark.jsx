import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-400 p-4 m-2'>
            <h2>{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    Bookmark: PropTypes.func,
   
    bookmark: PropTypes.object
}
export default Bookmark;