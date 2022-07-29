import React from "react";
class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>Passing data from parent Component(App) to Child component(Header) using props </h1>
                <h2>This is Header Component acquiring data from App component through props ({this.props.stat}). As the state changes in parent component same is reflected in child component</h2>
            </div>
        );
    }
}
export default Header;