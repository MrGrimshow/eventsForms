import React from 'react'

class ClassForm extends React.Component {
    constructor() {
      super();
      this.state = { name: "", location: "" , school: "" , department:"" , pet:""};
    }
  
    handlenameChange(event) {
      this.setState({ name: event.target.value });
    }
  
    handlelocationChange(event) {
      this.setState({ location: event.target.value });
    }
  
    handleschoolChange(event) {
      this.setState({ school: event.target.value });
    }
  
    handledepartmentChange(event) {
      this.setState({department: event.target.value });
    }
  
    handlepetChange(event) {
      this.setState({ pet: event.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      this.setState({ name: "", location: "" ,school: "" ,department:"" , pet:""});
      //sign in user
    }
  
    render() {
      return (
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            name="name"
            type="name"
            value={this.state.name}
            onChange={(event) => this.handlenameChange(event)}
          />
  
          <input
            name="location"
            type="location"
            value={this.state.location}
            onChange={(e) => this.handlelocationChange(e)}
          />
          
          <input
            name="school"
            type="school"
            value={this.state.school}
            onChange={(event) => this.handleschoolChange(event)}
          />
  
          <input
            name="department"
            type="department"
            value={this.state.department}
            onChange={(event) => this.handledepartmentChange(event)}
          />
  
          <input
            name="pet"
            type="pet"
            value={this.state.pet}
            onChange={(event) => this.handlepetChange(event)}
          />    
  
          <input type="submit" />
        </form>
      );
    }
  }

  export default ClassForm