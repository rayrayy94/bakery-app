import React from 'react'

export default function SubHeader(props) {
  return (
    <div>
       <div className="container-fluid bg-dark bg-img p-5 mb-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="display-4 text-uppercase text-white">{props.headerName}</h1>
                </div>
            </div>
        </div>
    </div>
  )
}
