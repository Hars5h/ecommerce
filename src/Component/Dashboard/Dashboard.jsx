import React from 'react'
import "./Dashboard.css"
import logo from "../../assets/download.jpg"
function Dashboard() {
    return (
        <div className='dash-wrapper'>
            <div className="cards">
                {/* <img className="card-image" src={logo} /> */}
                <div className="card-content">
                    <h2 className="card-title">Total Product</h2>
                    <p className="card-description">harsh</p>
                </div>
            </div>
            <div className="card">
                {/* <img className="card-image" src={logo} /> */}
                <div className="card-content">
                    <h2 className="card-title">Name </h2>
                    <p className="card-description">harsh</p>
                </div>
            </div> <div className="card">
                {/* <img className="card-image" src={logo} /> */}
                <div className="card-content">
                    <h2 className="card-title">Name </h2>
                    <p className="card-description">harsh</p>
                </div>
            </div>
        </div>

    )
}

export default Dashboard