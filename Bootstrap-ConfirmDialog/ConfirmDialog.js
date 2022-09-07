import React from 'react';

const ConfirmDialog = (props) => {
  return (
    <>
      <div class="modal-backdrop fade show"></div>
      <div
        className="modal fade show"
        id={props?.uniqueId}
        tabIndex="-1"
        style={{ display: 'block' }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header mt-3 mt-lg-4 mx-3 mx-lg-4">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  props.handleClose();
                }}
              >
                <span aria-hidden="true">
                  <h6
                    style={{
                      fontSize: '16px',
                      color: '#009BDF',
                      fontWeight: 500,
                      marginRight: 18,
                      marginTop: 5,
                    }}
                  >
                    CLOSE
                  </h6>
                </span>
              </button>
              <img
                src={process.env.PUBLIC_URL + '/createAlert.svg'}
                alt=""
                height="40"
              />
              <h5
                className="modal-title mt-3 font-weight-bolder"
                style={{ fontSize: '24px' }}
                id={props?.uniqueId}
              >
                Are you sure!
              </h5>
              <br />
              <h5>{props?.msg || ''}</h5>
            </div>

            <div className="modal-footer">
              <button
                disabled={props?.load}
                type="button"
                className="btn bg-white text-primary border border-primary rounded px-6"
                data-dismiss="modal"
                onClick={() => {
                  props.handleClose();
                }}
              >
                Cancel
              </button>
              <button
                disabled={props?.load}
                type="button"
                className="btn bg-primary text-white border rounded px-6"
                onClick={() => {
                  props.submitHandler(props.id);
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmDialog;
