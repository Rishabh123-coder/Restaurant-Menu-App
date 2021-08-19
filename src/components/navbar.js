import React from 'react';

const Navbar = ({filterFunc, menuList}) => {

    return ( 
        <>
        <nav className="navbar">
                <div className="btn-grp">
                    {menuList.map((curEle) => {
                        return(
                        <button className="btn-grp__item" onClick={() => filterFunc(curEle)}>{curEle}</button>
                        );
                    })
                    }
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;