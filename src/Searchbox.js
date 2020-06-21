import React from 'react';


const SearchBox=(props)=>{
    return(
        <div className="pa2">
            <input type="search" className="pa3 ba b--greeen bg-lightest-blue" placeholder="Search" onChange={props.serchchange}/>

        </div>
    )
}

export default SearchBox;