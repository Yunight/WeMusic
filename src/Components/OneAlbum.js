import React, { Component } from 'react';



class OneAlbum extends Component {

    render() {
        const {data} = this.props;
        console.log(data)
        return (
            <tr className={"alignLeft rowData"}>
                <td className={"albumtitle"}>
                    {data}
                </td>
            </tr>
        )
    }
}

export default OneAlbum;
