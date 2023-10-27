import React from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilter, setCategoryId, setCurrentPage, setFilters } from '../../redux/slices/filterSlice';
import { fetchPizzas, selectPizzaData } from '../../redux/slices/pizzaSlice';
import { Components } from '../../components';
import { list } from '../../components/sort/Sort';
import { useAppDispatch } from '../../redux/store';

const Home: React.FC = () => {
  const { items, status} = useSelector(selectPizzaData);
  const { categoryId, sort, currentPage, searchValue} = useSelector(selectFilter);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const sortType = sort.sortProperty;

  const isMounted = React.useRef(false);
  const isSearch = React.useRef(false);
  

  const onChangeCategory = React.useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page))
  };

  const getPizzas = async () => {
    const order = sortType.includes("-") ? "asc" : "desc";
    const sortBy = sortType.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";


      dispatch(
        fetchPizzas({
          order,
          sortBy,
          category,
          search,
          currentPage: String(currentPage)
        })
      );

      window.scrollTo(0, 0);
  };

  // React.useEffect(() => {
  //   if(isMounted.current) {
  //     const params = {
  //       categoryId: categoryId > 0 ? categoryId : null,
  //       sortProperty: sortType,
  //       currentPage
  //     };

  //     const queryString = qs.stringify(params, {skipNulls: true});

  //     navigate(`/?${queryString}`);
  //   }

  //   if(!window.location.search) {
  //     dispatch(fetchPizzas({} as SearchPizzaParams));
  //   }
  // }, [categoryId, sortType, currentPage]);

  
  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sortType, searchValue, currentPage]);

  // React.useEffect(() => {
  //   if(window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1)) as unknown as SearchPizzaParams;
  //     const sort = list.find(obj => obj.sortProperty === params.sortBy); 

  //     dispatch(
  //       setFilters({
  //         searchValue: params.search,
  //         categoryId: Number(params.category),
  //         currentPage: Number(params.currentPage),
  //         sort: sort || list[0]
  //       }));
  //   }
  //   isMounted.current = true;
  // }, []);


  const sceletons = [...new Array(6)].map((_, index) => <Components.Skeleton key={index}/>);

  const pizzas = items.map((item: any) => (
    <Components.Block key={item.id} {...item}/>
  ));

  

  return (
    <div className="container">
      <div className="content__top">
        <Components.Categories 
          value={categoryId} 
          onChangeCategories={onChangeCategory}
        />
        <Components.Sort/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {
        status === "error" ? (
          <div className='content__error-info'>
            <h2>Произошла ошибка 😕</h2>
            <p>
              К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.
            </p>
          </div>
        ) : (
          <div className="content__items">
            {
              status === "loading"
                ? sceletons
                : pizzas
            }
          </div>
        )
      }
      
      <Components.Pagination currentPage={currentPage} onChangePage={onChangePage}/>
    </div>
  )
}

export default Home;
