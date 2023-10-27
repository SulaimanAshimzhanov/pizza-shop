import React from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategories: (i: number) => void;
}

const categories = ["Все", "Мясные", "Вегетрианская", "Гриль", "Острые", "Закрытые"];

const Categories: React.FC<CategoriesProps> = ({value, onChangeCategories}) => {

  return (
    <div className="categories">
        <ul>
            {
              categories.map((item, i) => (
                <li 
                  key={i} 
                  onClick={() => onChangeCategories(i)} 
                  className={value === i ? "active" : ""}
                >
                  {item}
                </li>
              ))
            }
        </ul>
    </div>
  )
}

export default Categories;
