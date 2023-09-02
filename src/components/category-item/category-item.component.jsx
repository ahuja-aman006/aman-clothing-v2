import './category-item.style.scss'


const CategoryItem = ({category, key})=>{

    const {title,id,imageUrl} = category;

    return (
        <div key={id} className='category-container'>
          {/* <img /> */}
          <div 
            className="background-image"
            style={{
                backgroundImage:`url(${imageUrl})`
            }}/>
           
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>

    )


}


export default CategoryItem