import React, { Component }  from 'react'
import Modal from 'react-responsive-modal';


class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sign: false,
            login: false,

        }
    }

    onOpenModal = () => {
        this.setState({ sign: true });
    };

    onOpenModalLogin = () => {
        this.setState({ login: true });
    };

    onCloseModal = () => {
        this.setState({ sign: false });
    };

    onCloseModalclose = () => {
        this.setState({ login: false });
    };

    
    render() {
      const { login } = this.state;

  return (
    <>
    
    <Modal open={login} onClose={this.onCloseModalclose}>
                
                <div className="modal-body">
                    <h2>Login and Get <span>Started</span></h2>
                    <span className="subtitle">Just fill in the form below</span>
                    <form className="contact-form form-validate4" novalidate="novalidate">
                        <div className="form-group">
                            <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
                        </div>
                        <input className="btn btn-md btn-primary btn-center" id="login_btn" type="button" value="Login" />
                    </form>
                </div>
    </Modal>

    
    </>
  )
}

}

export default Header