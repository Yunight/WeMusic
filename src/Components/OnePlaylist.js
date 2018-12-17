import React, { Component } from 'react';
class OnePlaylist extends Component {



    render() {
        const {data,listOfColumns} = this.props;
        const cells = listOfColumns.map((columnName)=>{
            const columnValue = data.size

            let cellContent = String(columnValue);

            if(columnName ===  "Titre"){
                if(data.size === "0"){
                    cellContent = <tr className={"playlisttitle"}> <img className={"marginleftminus25"}  src={require('../Pictures/icon-empty.svg')} />  {data.name}</tr>
                }else{
                    cellContent = <tr className={"playlisttitle"}>{data.name}</tr>
                }

            }

            if(columnName === "Taille"){
                cellContent = <tr className={"playlistright"}>{data.size}</tr>
            }


            return <td key={columnName}>
                {cellContent}
            </td>

        });

        return (
            <tr className={"alignLeft "}>
                    {cells}
            </tr>
        )
    }
}

export default OnePlaylist;
