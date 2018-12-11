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
            restaurantList : []
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
                    restaurantList : JSON.parse(this.responseText)
                 
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
                console.log( "ss" + {this.state.restaurantList});
            </div>
        ) }

}
export default Home;