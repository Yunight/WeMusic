import React, { Component } from 'react';
import Header from "./Header";
import MyAlbums from "./MyAlbums";
import MyPlaylist from "./MyPlaylist";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Mes Playlists',
            active:'ALBUMS',
        };

    }

    changeTitle = (event) =>{
        if(event.target.value === "ALBUMS"){
            this.setState({
                title: "Mes Albums",
                active:"ALBUMS",
            })
        }else{
            this.setState({
                title: "Mes Playlist",
                active:"PLAYLIST",
            })
        }

    }
    render() {
        const activeStyle = { color: '#907114' };

        return (
            <div className={"content"}>
                <Header title={this.state.title}/>
                <div className={"center buttonbg"}>
                    <button style ={this.state.active === 'ALBUMS' ? activeStyle :{}} onClick={(e) => this.changeTitle(e)} value="ALBUMS" className={"customButtom topButton"}>MES ALBUMS</button>
                    <button style ={this.state.active === 'PLAYLIST' ? activeStyle :{}} onClick={(e) => this.changeTitle(e)} value="PLAYLIST" className={"customButtom bottomButton "}>MES PLAYLISTS</button>
                </div>

                {this.state.active === "ALBUMS"&&
                    <MyAlbums/>
                }

                {
                    this.state.active === "PLAYLIST"&&
                    <MyPlaylist/>
                }
            </div>
        )

    }
}

export default HomePage;
