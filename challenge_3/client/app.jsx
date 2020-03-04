
console.log('...loaded.')

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    	name: '',
    	email: '',
    	password: ''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.name);
    console.log('An email was submitted: ' + this.state.email);
    console.log('A password was submitted: ' + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChangeName} />
        </label>

        <label>
          Email:
          <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
        </label>


        <label>
          Password:
          <input type="text" value={this.state.password} onChange={this.handleChangePassword} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    	line1: '',
    	line2: '',
    	city: '',
    	state: '',
    	zipcode: ''
    };

    this.handleChangeName = this.handleChangeline1.bind(this);
    this.handleChangeEmail = this.handleChangeline2.bind(this);
    this.handleChangePassword = this.handleChangecity.bind(this);
    this.handleChangeEmail = this.handleChangestate.bind(this);
    this.handleChangePassword = this.handleChangezipcode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeline1(event) {
    this.setState({name: event.target.value});
  }

  handleChangeline2(event) {
    this.setState({email: event.target.value});
  }

  handleChangecity(event) {
    this.setState({password: event.target.value});
  }

  handleChangestate(event) {
    this.setState({name: event.target.value});
  }

  handleChangezipcode(event) {
    this.setState({email: event.target.value});
  }

  handleSubmit(event) {
    console.log('line1 was submitted: ' + this.state.line1);
    console.log('line2 was submitted: ' + this.state.line2);
    console.log('city was submitted: ' + this.state.city);
    console.log('state was submitted: ' + this.state.state);
    console.log('zipcode was submitted: ' + this.state.zipcode);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          line1:
          <input type="text" value={this.state.line1} onChange={this.handleChangeline1} />
        </label>

        <label>
          line2:
          <input type="text" value={this.state.line2} onChange={this.handleChangeline2} />
        </label>


        <label>
          city:
          <input type="text" value={this.state.city} onChange={this.handleChangecity} />
        </label>

        <label>
          state:
          <input type="text" value={this.state.state} onChange={this.handleChangestate} />
        </label>


        <label>
          zipcode:
          <input type="text" value={this.state.zipcode} onChange={this.handleChangezipcode} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class Third extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <h5><UserInfo/></h5>,
  document.getElementById('root')
);

ReactDOM.render(
  <h4><Address/></h4>,
  document.getElementById('root')
);