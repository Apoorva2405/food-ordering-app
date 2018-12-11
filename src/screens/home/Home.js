import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';

class Home extends Component {
    constructor() {
        super();
        // Intialized State Variables.
        this.state = {
            id : "",
            restaurantName : "" ,
            photoUrl : "" ,
            userRating : "" ,
            avgPrice : "" ,
            numberUsersRated : "" ,
            address : "" ,
            categories : [],
            data : {
                id : ""
            }
        }
    }
    

    componentWillMount() {

        // get restaurant data
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        // store relevant details
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({
                    data : JSON.parse(this.responseText) 
                 
                });
                
                console.log( JSON.parse(this.responseText) ) ;
             }
        });

        xhr.open("GET", "http://localhost:8080/api/restaurant");
        xhr.send(data);

    }


    render() {
        return (
            <div className="home">
                <Header />
                HURRAY
                {this.state.data}
            </div>
        ) }

}
export default Home;