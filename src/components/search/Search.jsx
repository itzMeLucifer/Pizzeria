import React,{useState} from 'react'
import './styles.scss'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  const [isChanged, setIsChanged] = useState(false)

  const searchRresult = (
    <div className='search-result'>
      <div className="pizza">
        <h2>Pizzas</h2>
          <div className="items">
            <h3>Cheese Pizza</h3>
            <h3>Macoroni Cheese Pizza</h3>
          </div>
      </div>
      <div className="pizza">
        <h2>Paastas</h2>
          <div className="items">
            <h3>Cheesy red paasta</h3>
            <h3>Macoroni Cheese paasta</h3>
          </div>
      </div>
      <div className="pizza">
        <h2>Beverages</h2>
          <div className="items">
            <h3>Coco-Cola</h3>
            <h3>Maaza</h3>
          </div>
      </div>
      <div className="pizza">
        <h2>Ice-Creams</h2>
          <div className="items">
            <h3>Cheese Vanilla</h3>
            <h3>Cheesy Chocolate</h3>
          </div>
      </div>
    </div>
  )

  const handleSearch = (e) => {
    if(e.target.value){
      setIsChanged(true)
    }
    else{
      setIsChanged(false)
    }
  }
  return (
    <div className="search-container">
      <div className="result">
        <input type="text" placeholder="Search Product" onChange={(e) => handleSearch(e)}/>
        {
          isChanged?searchRresult:null
        }
      </div>
      <div className="icon-container"><SearchIcon/></div>
    </div>
  )
}

export default Search