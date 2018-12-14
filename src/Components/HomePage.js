import React, { Component } from 'react';
import Header from "./Header";
import MyAlbums from "./MyAlbums";
import MyPlaylist from "./MyPlaylist";
import datas from '../Data/data'

const Albums = ['Titre'];
const Playlist = ['Titre','Taille'];

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
        const activeStyle = { color: '#C2A346' };

        return (
            <div className={"content"}>
                <Header title={this.state.title}/>
                <div className={"center buttonbg"}>
                    <b><button style ={this.state.active === 'ALBUMS' ? activeStyle :{}} onClick={(e) => this.changeTitle(e)} value="ALBUMS" className={"customButtom topButton"}>MES ALBUMS</button></b>
                    <b><button style ={this.state.active === 'PLAYLIST' ? activeStyle :{}} onClick={(e) => this.changeTitle(e)} value="PLAYLIST" className={"customButtom bottomButton "}>MES PLAYLISTS</button></b>
                </div>

                {this.state.active === "ALBUMS"&&
                    <MyAlbums datas = {datas.ALBUMS} columns ={Albums}/>
                }

                {
                    this.state.active === "PLAYLIST"&&
                    <MyPlaylist datas = {datas.PLAYLIST} columns ={Playlist} />
                }
            </div>
        )

    }
}

export default HomePage;
