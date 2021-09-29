import React from 'react';


export const SignInModal = ()=> {
  return (
    <>
    {/* Sign In Modal */}
    <div className="modal" id="signin_modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Sign In</h4>
                  <button type="button" className="close" data-dismiss="modal">X</button>
                </div>
                <div className="modal-body">
                  <form>
                    <label htmlFor="signin_email">Username/Email:</label>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="email"><i className="fa fa-user"></i></span>
                      </div>
                      <input type="text" className="form-control" placeholder="Username/Email" aria-label="Email" aria-describedby="email" />
                      </div>

                    <label htmlFor="signin_password">Password:</label>
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="password"><i className="fa fa-key"></i></span>
                        </div>
                        <input type="password" id="signin_password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password" />
                        </div>
                    </form>
                  </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary" >Sign In</button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}