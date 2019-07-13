import React from 'react';
import './AvatarStyleSheet.css';
import AvatarList from './AvatarList';


class Avatar extends React.Component {

    constructor() {
        super();
        this.state = {
            Name: "Welcome To Avatar World"
        };
    }

    ChangeState() {
        this.setState({Name: " Subscribed"});
    }

    render() {

        const AvatarListArray = [
            {
                id: 1,
                name: "Apoorv Verma",
                work: "Software Developer"
            },
            {
                id: 2,
                name: "Avi Verma",
                work: "Software Developer"
            },
            {
                id: 3,
                name: "vikas",
                work: "Network Eng."
            }
            ,
            {
                id: 4,
                name: "Devendra",
                work: "Software Developer"
            }

        ]

        const AvatarlistArrayCard = AvatarListArray.map((AvatarCard, i) => {
                return <AvatarList key={i} id={AvatarListArray[i].id} name={AvatarListArray[i].name}
                                   work={AvatarListArray[i].work}/>
            }
        )
        return (
            <div className="MainAvatarBox">
                <h1>{this.state.Name}</h1>
                <div>
                    {AvatarlistArrayCard}
                </div>
                <center>
                    <button className="no-underline grow  bg-blue white pa3 br2 mr3 mb3 dib center" onClick={() => {
                    this.ChangeState();
                }}> Subscribe
                </button>
                </center>
            </div>
        )
    }
}


export default Avatar;
