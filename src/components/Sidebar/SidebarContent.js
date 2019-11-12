import React from 'react';

const SidebarContent = (props) => {
	return(
    <div className="sidebar-content">
      <div className="search-container">
        <div className="sidebar-title">Search</div>
        <input type="text" value={props.search}  onChange={props.handleSearchProducts}/>
      </div>          
      <div className="sort-container">
        <div className="sidebar-title">Sort</div>
        <div>
          <h5 className="filter-title">by Price</h5>
          <form className="sort-form">
            <input type="radio" className="hidden-radio" name="price" value={props.sort} onChange={props.handlePriceSort}/>
            <ul className="sidebar-list">
              <li>
                <input type="radio" name="price" value="lowest" id="price-asc" onChange={props.handlePriceSort}/>
                <label htmlFor="price-asc">ascending</label>
              </li>
              <li>
                <input type="radio"  name="price"value="highest" id="price-desc" onChange={props.handlePriceSort}/>
                <label htmlFor="price-desc">descending</label>
              </li>
            </ul>
          </form>
        </div>
          <div>
            <h5 className="filter-title">by Name</h5>
            <form className="sort-form">
              <input type="radio" className="hidden-radio" name="artist" value={props.sort} onChange={props.handleArtistSort}/>
              <ul className="sidebar-list">
                <li>
                  <input type="radio" name="artist" value="atoz" id="artist-asc" onChange={props.handleArtistSort}/>
                  <label htmlFor="artist-asc">ascending</label>
                </li>
                <li>
                  <input type="radio"  name="artist" value="ztoa" id="artist-desc" onChange={props.handleArtistSort}/>
                  <label htmlFor="artist-desc">descending</label>
                </li>
              </ul>
            </form>                  
          </div>
        </div>            
        <div className="filter-container">
          <div className="sidebar-title">Filter</div>
          <div className="filter-box">
            <h5 className="filter-title">by Genre</h5>
            <form className="filter-form">
              <ul className="sidebar-list">
                <li>
                  <input type="radio"  name="genre" value="" id="genre-all" onChange={props.handleGenreFilter} defaultChecked={true}/> 
                  <label htmlFor="genre-all">all</label>
                </li>    
                <li>
                  <input type="radio" name="genre" value="britpop" id="genre-britpop"  onChange={props.handleGenreFilter}/>
                  <label htmlFor="genre-britpop">britpop</label>
                </li>
                <li>
                  <input type="radio" name="genre" value="electro-trance" id="genre-electro-trance"  onChange={props.handleGenreFilter}/>
                  <label htmlFor="genre-electro-trance">electro trance</label>
                </li>
                <li>
                  <input type="radio"  name="genre" value="electropop" id="genre-electropop"  onChange={props.handleGenreFilter}/>
                  <label htmlFor="genre-electropop">electropop</label>
                </li>
                <li>
                  <input type="radio"  name="genre" value="grunge" id="genre-grunge"  onChange={props.handleGenreFilter}/>
                  <label htmlFor="genre-grunge">grunge</label>
                </li>
                <li>
                  <input type="radio"  name="genre" value="postpunk" id="genre-postpunk"  onChange={props.handleGenreFilter}/>
                  <label htmlFor="genre-postpunk">postpunk</label>
                </li>
                <li>
                  <input type="radio"  name="genre" value="reggae" id="genre-reggae"  onChange={props.handleGenreFilter}/>
                  <label htmlFor="genre-reggae">reggae</label>
                </li>
                <li>
                  <input type="radio" name="genre" value="rock" id="genre-rock"  onChange={props.handleGenreFilter}/>
                  <label htmlFor="genre-rock">rock</label>
                </li>
                <li>
                  <input type="radio"  name="genre" value="trash-metal" id="genre-trash-metal"  onChange={props.handleGenreFilter}/>
                  <label htmlFor="genre-trash-metal">trash metal</label>
                </li>
              </ul>
            </form>
          </div>
          <div className="filter-box">
            <h5 className="filter-title">by Type</h5>
            <form className="filter-form">
              <ul className="sidebar-list">
                <li>
                  <input type="radio"  name="type" value="" id="type-all" onChange={props.handleTypeFilter} defaultChecked={true} /> 
                  <label htmlFor="type-all" >All</label>
                </li>    
                <li>
                  <input type="radio" name="type" value="CD" id="type-CD" onChange={props.handleTypeFilter}/>
                  <label htmlFor="type-CD">CD</label>
                </li>
                <li>
                  <input type="radio"  name="type" value="LP" id="type-LP" onChange={props.handleTypeFilter}/>
                  <label htmlFor="type-LP">LP</label>
                </li>
              </ul>
            </form>
          </div>
      </div>
    </div>
	)
};

export default SidebarContent;