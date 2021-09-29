import React from 'react';

export const RegisterModal = ()=>{
  return(
  <>
    {/* Register Modal */}
    <div className="modal" id="register_modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Sign up</h4>
                  <button type="button" className="close" data-dismiss="modal">X</button>
                </div>

                <div className="modal-body">
                  <form>
                    <label className="sr-only" htmlFor="username">Username</label>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3"><i className="fa fa-user"></i></span>
                      </div>
                      <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon3" />
                    </div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon4"><i className="fas fa-at"></i></span>
                      </div>
                      <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon4" />
                    </div>

                    <label className="sr-only" htmlFor="password">Password</label>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon5"><i className="fa fa-key"></i></span>
                      </div>
                      <input id="password" type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon5" />
                    </div>
                    <label className="sr-only" htmlFor="password_confirmation">Password Confirmation</label>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon6"><i className="fas fa-key"></i></span>
                      </div>
                      <input id="password_confirmation" type="password" className="form-control" placeholder="Password Confirmation" aria-label="Password Confirmation" aria-describedby="basic-addon6" />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary" >Register</button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
  </>
  )
}