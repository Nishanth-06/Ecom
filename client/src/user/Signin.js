import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import Base from '../core/Base';
import {signin, authenticate, isAuthenticated} from '../auth/helper';

const Signin = () => {
  const [values, setValues] = useState({
    email: "nishanthk889@gmail.com",
    password: "123456",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const {email, password, error, loading, didRedirect} = values;
  const {user} = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({...values, error: false, [name]: event.target.value});
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({...values, error: false, loading: true});
    signin({email, password})
      .then(data => {
        if (data.error) {
          setValues({...values, error: data.error, loading: false});
        } else {
          authenticate(data, () => {
            setValues({...values, didRedirect: true});
          });
        }
      })
      .catch(err => console.log(err));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const loadingMessage = () => {
    return(
        loading && (
            <div className="alert alert-info">
                <h2>loading...</h2>
            </div>
        )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-center">
          <div
            className="alert alert-danger"
            style={{display: error ? '' : 'none'}}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                onChange={handleChange('email')}
                className="form-control"
                type="email"
                value={email}
              />
            </div>
            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                onChange={handleChange('password')}
                className="form-control"
                type="password"
                value={password}
              />
            </div>
            <div className="d-grid py-3">
              <button onClick={onSubmit} className="btn btn-success btn-block">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title="Signin Page" description="A page for user signin!">
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
      <p className="text-white text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signin;
