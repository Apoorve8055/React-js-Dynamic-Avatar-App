import React from 'react';

const AvatarList = (props) => {
    return (
        <div className="AvatarBody ma4 bg-light-purple dib pa4 grow shadow-4">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`}/>
            <h2> {props.name} </h2>
            <p> {props.work} </p>
        </div>)

}

export default AvatarList;