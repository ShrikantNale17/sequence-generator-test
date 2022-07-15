import React from "react";

function Input(props) {

    const [count, setCount] = React.useState();
    const [display, setDisplay] = React.useState();

    function getSequence() {
        let arr= []
        let n=1;
        let myCounter = 1;
        for(let i = 1; myCounter <= count; i++) {
            // let incr = i;
            for(let j = 1; j <= i && myCounter <= count; j++) {
                n += i;
                arr.push(n)
                myCounter++;
            }
        }
        // console.log(arr)
        props.setResult(arr,display)
    }

  return (
    <div className="card my-5 col-md-6 mx-auto">
      <div className="card-body p-4">
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <input
                type="number"
                id="N"
                placeholder="How many numbers?"
                className="form-control form-control-lg"
                onChange={(e) => setCount(e.target.value)}
              />
            </div>
          </div>
          <div className="col-12 my-3">
            <div className="form-group">
              <select className="form-control form-control-lg" onChange={(e) => setDisplay(e.target.value)}>
                <option value="">Select Display Option</option>
                <option value="Circle">Circle</option>
                <option value="Square">Square</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <button type="button" className="btn btn-outline-primary btn-lg me-2" onClick={() => getSequence()}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
