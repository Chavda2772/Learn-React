import { Component } from 'react';

class Form extends Component {
  state = {
    userName: '',
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.addUser(this.state.userName);
  };
  render() {
    return (
      <>
        <form className='form-inline'>
          <div className='form-group'>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                id='exampleInputAmount'
                placeholder='Enter UserName ..'
                value={this.state.userName}
                onChange={(event) =>
                  this.setState({ userName: event.target.value })
                }
              />
            </div>
          </div>
          <button
            type='submit'
            className='btn btn-primary'
            onClick={this.onSubmitHandler}
          >
            Add User
          </button>
        </form>
      </>
    );
  }
}

export default Form;
