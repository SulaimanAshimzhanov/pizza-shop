import React from 'react';

import cls from './index.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={cls.root}>
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={cls.description}>
        К сожалению данная страница отсуствует в интернет-магазине
      </p>
    </div>
  )
}

export default NotFound
