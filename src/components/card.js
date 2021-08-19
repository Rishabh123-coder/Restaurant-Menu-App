import React from 'react';

const Menu = ({ data }) => {
    console.log(data);
    return (
        <>
            <section className="main-card--cointainer">
                {data.map((curEle) => {
                    return (
                        <>
                            <div className="card-container" key={curEle.id}>
                                <div className="card ">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{curEle.id}</span>
                                        <span className="card-author subtle">{curEle.category}</span>
                                        <h2 className="card-title"> {curEle.name} </h2>
                                        <span className="card-description subtle">{curEle.description}</span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <span className="card-tag  subtle">Order Now</span>
                                </div>
                            </div>
                        </>
                    )
                })}

            </section>
        </>
    );
}

export default Menu;