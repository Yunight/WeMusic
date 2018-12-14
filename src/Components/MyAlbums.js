import React, { Component } from 'react';
import OneAlbum from './OneAlbum'


class MyAlbums extends Component {


    render() {
        const {datas,columns} = this.props;
        console.log(datas)


        let rows;
       datas.sort(
            function(a,b){
            let c = new Date(a.date);
            let d = new Date(b.date);
            return c-d;
        });

        rows = datas.map((data) => {
            return <OneAlbum
                key={data.name}
                data={data.name}
            />
        })

        return (
            <div className={"tableContainer center"}>
                <table className={"nospacing"}>
                    <thead className={"albumtitle"}>
                        <tr>
                            <th scope="col" className={"tableTitle albumtitle"}>Titre</th>
                        </tr>
                    </thead>
                    {rows}
                </table>
            </div>
        )

    }
}

export default MyAlbums;
