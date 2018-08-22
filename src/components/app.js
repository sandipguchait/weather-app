import React, { Component } from 'react';
import Titles from './title';
import Form from './form';
import Weather from './weather';

//USING API
const API_KEY = "09e20a51c835df01625fdc8e10cbba8b";

class App extends Component{

    state = {
        temperature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:undefined
    }

    getWeather = async (e) => {
        
        e.preventDefault();
        const city = e.target.city.value;
        const country = e.target.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log(data);
      

          if(city && country){
             this.setState({
                temperature:data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error:''
            });
          
       }  else{
           this.setState({
               error:" Please Select City and Country "
           })
       }
       
    
    }


    render(){
        return(
            <div>
              <div className ="wrapper">
                <div className ="main">
                    <div className="container" >
                        <div className="row">
                            <div className="col-xs-5 title-container">
                                <Titles/> 
                            </div>
                            <div className="col-xs-7 form-container">
                            <Form getWeather={this.getWeather}/>
                                <Weather 
                                temperature={this.state.temperature}
                                city={this.state.city}
                                country={this.state.country}
                                humidity={this.state.humidity}
                                description={this.state.description}
                                error={this.state.error}
                                />
                            </div>
                        </div>
                    </div>
                </div>
              </div>
         </div>
        )
    }
}
export default App;