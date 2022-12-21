import { product } from "./product-List";
const ModelBox=(props:{sizes:string[],idValue:number})=>{
    return (
      <>
      <div className="row">
        <div className="modal" id={"id"+props.idValue}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Product</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <form className="row g-3 needs-validation">
                    <div>
                      <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text test-muted">We'll never share your email with anyone else.</div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                      </div>
                    </div>
  
                    <div>Select Quantity</div>
                      <div className="col">
                        <select className="form-select">
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                          <option value="5">Five</option>
                        </select>
                      </div>
                      <div>Available Sizes</div>
                      <div>
                      <div className="form-check form-check-inline">
                          <p>Select Size</p>
                          {props.sizes.map((size:string)=>(
                                <div className="form-check form-check-inline" key={size}>
                                   <input type="radio" name="size" value={size}/>
                                   <label> { size }</label>                                          
                               </div>))
                               }
                      </div>
                      </div>
                  </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
              </div>
            </div>
          </div>
          </div>
      </>
    );
}

export default ModelBox;
