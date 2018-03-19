import React, { Component } from 'react';
import { createStore } from 'redux';

const ReduxComponent = ({name = ""}) => {

    const reducer = (state, action) => {
        if (action.type==="changeName"){
            return action.payload;
        }
        return state;
    }

    const store = createStore(reducer, {name:"", msg:""}, window.devToolsExtension && window.devToolsExtension());

    store.subscribe(
        ()=>console.log("done")
    );

    const action = {
        type:"changeName", 
        payload:{
            name:"vibodha"
        }
    }

    store.dispatch(action)

    const setName = event => {
        store.dispatch(action)
    }

    const getData = () => {
        fetch(`https://a4fvymw638.execute-api.us-east-1.amazonaws.com/dev/path`,{
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            //   'Authorization': 'Bearer ' + localStorage.getItem('TOKEN'),
            },
          }).then(result=>result.json())
          .then(data=> {
            console.log(data);
        });
    }

    return(
        <div onClick={getData}>
            this is new thing {store.getState().name}
        </div>
    );
}

export default ReduxComponent;