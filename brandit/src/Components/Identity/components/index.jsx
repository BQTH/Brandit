import React, { Component } from 'react'
import img from './../temp-img/Wsy-logo.png'
import './../styles/styles.scss'

export class Identity extends Component {

    copyText = (entryText) => {
        navigator.clipboard.writeText(entryText);
    }

    render() {
        return (
            <div className="Identity">
                <div className="Identity__topInfo">
                    <div className="Identity__topInfo__CompanyName">
                        <p className="Identity__topInfo__CompanyName__Label">Company name</p>
                        <p className="Identity__topInfo__CompanyName__Value" onClick={() => this.copyText('Future Creatives')}>Future Creatives</p>
                    </div>
                    <div className="Identity__topInfo__Logo">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="Identity__otherInfo">
                    <div className="Identity__otherInfo__Container">
                        <div className="Identity__otherInfo__Container__Field">
                            <p className="Identity__otherInfo__Container__Field__Label">Domain</p>
                            <p className="Identity__otherInfo__Container__Field__Value" onClick={() => this.copyText('56748392034')}>Future Creatives</p>
                        </div>
                        <div className="Identity__otherInfo__Container__Field">
                            <p className="Identity__otherInfo__Container__Field__Label">KVK-Nummer</p>
                            <p className="Identity__otherInfo__Container__Field__Value" onClick={() => this.copyText('56748392034')}>65748392384</p>
                        </div>
                    </div>
                    <div className="Identity__otherInfo__Container">
                        <div className="Identity__otherInfo__Container__Field">
                            <p className="Identity__otherInfo__Container__Field__Label">BTW-Nummer</p>
                            <p className="Identity__otherInfo__Container__Field__Value" onClick={() => this.copyText('56748392034')}>2300567890</p>
                        </div>
                        <div className="Identity__otherInfo__Container__Field">
                            <p className="Identity__otherInfo__Container__Field__Label">Telefoon Nummer</p>
                            <p className="Identity__otherInfo__Container__Field__Value" onClick={() => this.copyText('56748392034')}>+31642011794</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Identity
