import React, { Component } from 'react';
import OnePlaylist from "./OnePlaylist";


class MyPlaylist extends Component {


    constructor(props) {
        super(props);
        this.state = {
            sorted: false,
        };

    }

    changeOrder= (e) =>{
        if(this.state.sorted == false){
            this.props.datas.sort(
                function(a,b){
                    let c = a.size;
                    let d = b.size;
                    return c-d;
                });

            this.setState({
                sorted : true,
            })
        }
    }

    render() {
        const {datas,columns} = this.props;
        console.log(datas)

        let rows;
        rows = datas.map((data) => {
            return <OnePlaylist
                key={data.name}
                data={data}
                listOfColumns={columns}
            />
        })
        return (
            <div className={"tableContainer center"}>
                <table className={"nospacing"}>
                    <thead className={"alignLeft"}>
                        <tr>
                            <th className={"tableTitle titleLeft"}>Titre</th>
                            <th onClick={(e) => this.changeOrder(e)}  className={"tableTitle titleRight"}>Taille</th>
                        </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MyPlaylist;
