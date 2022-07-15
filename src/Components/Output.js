import React from 'react'

function Output(props) {


    // console.log(props);


    return (
        <div className="row justify-content-center">
            <div className="col-auto">
                <div className="card">
                    <div className="card-body" id="eight_circle">
                        <div className="row py-4">
        
                            {props.output.map((data,index) => <div key={index} className="col-auto mb-3">
                                <h4 className={`border border-info px-4 py-3 m-auto rounded ${props.display === 'Circle' ? 'rounded-circle' : ''}`}>
                                    <span>{data}</span>
                                </h4>
                            </div>)}
                            {/* <div className="col-auto mb-3">
                                <h4 className="border border-info px-4 py-3 m-auto rounded rounded-circle">
                                    <span>6</span>
                                </h4>
                            </div>
                            <div className="col-auto mb-3">
                                <h4 className="border border-info px-4 py-3 m-auto rounded rounded-circle">
                                    <span>9</span>
                                </h4>
                            </div>
                            <div className="col-auto mb-3">
                                <h4 className="border border-info px-4 py-3 m-auto rounded">
                                    <span>12</span>
                                </h4>
                            </div>
                            <div className="col-auto mb-3">
                                <h4 className="border border-info px-4 py-3 m-auto rounded">
                                    <span>15</span>
                                </h4>
                            </div>
                            <div className="col-auto mb-3">
                                <h4 className="border border-info px-4 py-3 m-auto rounded">
                                    <span>19</span>
                                </h4>
                            </div>
                            <div className="col-auto mb-3">
                                <h4 className="border border-info px-4 py-3 m-auto rounded">
                                    <span>23</span>
                                </h4>
                            </div>
                            <div className="col-auto mb-3">
                                <h4 className="border border-info px-4 py-3 m-auto rounded">
                                    <span>27</span>
                                </h4>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Output