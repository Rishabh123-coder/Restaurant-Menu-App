import React, { useState } from 'react';
import './card.css';
import Menu from './card';
import menuData from './menuAPI';
import Navbar from './navbar';

const uniqueList = [...new Set(
    menuData.map((curEle) =>{
        return curEle.category;
    })
),'All',];

console.log(uniqueList);
const Restaurant = () => {
    const [data, setData] = useState(menuData);
    const [menuList, setmenuList] = useState(uniqueList);

    const filterFunc = (category) => {
        const updatedList = data.filter((curEle) => {
            return (curEle.category === category);
        });
        setData(updatedList);
    };
    return (
        <>
            <Navbar filterFunc={filterFunc} menuList={menuList}/>
            <Menu data={data} />
        </>
    );
}

export default Restaurant;