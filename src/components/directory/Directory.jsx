import CategoryItem from '../category-item/CategoryItem'
import './Directory.scss'

const Home = ({ categories }) => (
  <div className="directory-container">
    {categories.map((category) => (
      <CategoryItem category={category} key={category.id} />
    ))}
  </div>
)

export default Home
