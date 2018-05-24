import React from 'react';
import NavigationBar from './NavigationBar';



const Jumbotron = () => {
    
        return (
            <header className="container jumbotronContainer">
            <NavigationBar />
                <div className="text-center">
                <h1 className="jumbotronOne">Andres Haayen</h1>
                    <img src="public/images/me.jpg" className="image img-fluid" alt="Responsive image" />
                    <h3 className="jumbotronHeader">Javascript ◉ Front-end Developer ◉ Musician</h3>
                </div>
            </header>
        )
}

export default Jumbotron;