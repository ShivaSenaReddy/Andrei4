import React from 'react'

const SearchBox=(props)=>{
return(
	<div className='SearchBox'>
		<input type="search" placeholder="robotname" onChange={props.SearchChange} />
	</div>
)

}

export default SearchBox;