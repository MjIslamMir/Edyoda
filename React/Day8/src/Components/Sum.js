import React from 'react'
import PropTypes  from 'prop-types'
const Sum=(props)=>{
    console.log(props)
    const {a,b,c,d}=props
    return (
        <div>
            <h1>Sum Component</h1>
            <h1>Sum of {a} and {b} is {a+b} and status {String(c)} and d is {d}</h1>
        </div>
    );
}
//setting the propsType for the props from App component being passed
Sum.prototype={
    a:PropTypes.number.isRequired,
    b:PropTypes.number.isRequired,
    c:PropTypes.string,//refers to the values that can be rendered
    d:PropTypes.oneOfType([PropTypes.number,PropTypes.bool,PropTypes.string])//any of these proptypes will be accepted
}
export default Sum;