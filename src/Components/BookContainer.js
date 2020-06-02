import React from 'react';
import {connect} from 'react-redux'
import {buyBook} from '.../redux'
const bookContainer = (props)=>{
    return(
        <div>
            <h2>Number of Books--{props.numOfBooks}</h2>
            <button onClick={props.buyBook}>Buy Books</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        numOfBooks : state.numOfBooks
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        buyBook : ()=>dispatch(buyBook())
    }
}
export default connect(mapDispatchToProps,mapStateToProps) (bookContainer)