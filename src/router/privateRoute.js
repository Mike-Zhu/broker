import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'

const checkToken = () => {
    const token = localStorage.getItem('token'),
          tokenTime = localStorage.getItem('tokenTime'),
          validTime = 60*60*12*1000,
          currentTime = new Date().getTime();
    if(!token || !tokenTime || !parseInt(tokenTime,10)){
        return false;
    }
    const checkTime = currentTime - parseInt(tokenTime,10);
    if(checkTime <= validTime){
        return true;
    }else{
        return false;
    }
}

const  PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={
        props => {
            return (
                checkToken() ? (
                    <Component {...props} />
                ) : (
                        <Redirect to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }} />
                    )
            )
        }
    } />
)
export default PrivateRoute;