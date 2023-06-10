// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItemList} = props
  const {title, description, publishedDate} = blogItemList

  return (
    <li className="blog-list-items">
      <div className="blog-details">
        <h1 className="tittle">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="para">{description}</p>
    </li>
  )
}
export default BlogItem
