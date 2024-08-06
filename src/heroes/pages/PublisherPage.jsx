import React from 'react'
import { Link } from 'react-router-dom'

export const PublisherPage = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                    <Link to="/marvel">
                    
                        <div className="card">
                            <img className="card-img-top" src="/heroes/marvel-b.jpg" alt="Marvel" />
                        </div>
                    </Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/dc">
                        <div className="card">
                            <img className="card-img-top" src="/heroes/dc-b.jpg" alt="Marvel" />
                        </div>
                        
                        </Link>
                       
                    </div>
                </div>
            </div>
        </>

    )
}
