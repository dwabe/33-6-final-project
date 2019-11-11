import React, { Component } from "react";
import MediaQuery from 'react-responsive';
import SidebarContent from "./SidebarContent";

require('./sidebar.css');

export default class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarShow: true
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState ({
      sidebarShow: !this.state.sidebarShow
    });
  }

  render() {
    return (   
      <div  className="sidebar-wrapper">
        <MediaQuery query="(min-device-width: 769px)">   
          <div className={this.state.sidebarShow ?  "sidebar-container sidebar-container-visible"   : "sidebar-container"}>
            <SidebarContent 
              genre={this.props.genre} 
              type={this.props.type} 
              sort={this.props.sort} 
              search={this.props.search} 
              handlePriceSort={this.props.handlePriceSort}
              handleArtistSort={this.props.handleArtistSort}
              handleGenreFilter={this.props.handleGenreFilter} 
              handleTypeFilter={this.props.handleTypeFilter} 
              handleSearchProducts={this.props.handleSearchProducts}
            />
          </div>                    
        </MediaQuery>
        <MediaQuery query="(max-device-width: 768px)">                
          <button className="hamburger" onClick={this.handleToggle}></button>    
            <div className={this.state.sidebarShow ?  "sidebar-container" : "sidebar-container sidebar-container-visible" }>
              <SidebarContent 
                genre={this.props.genre} 
                type={this.props.type} 
                sort={this.props.sort} 
                search={this.props.search} 
                handlePriceSort={this.props.handlePriceSort}
                handleArtistSort={this.props.handleArtistSort}
                handleGenreFilter={this.props.handleGenreFilter} 
                handleTypeFilter={this.props.handleTypeFilter} 
                handleSearchProducts={this.props.handleSearchProducts}
              />
            </div>
        </MediaQuery>
      </div>
    );
  }
}