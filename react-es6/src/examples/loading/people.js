import React from 'react';
import Person from './person';
import * as Api from './Api';

class People extends React.Component {

  state = {
    loading: true,
    people: []
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const people = await Api.getPeople();
    this.setState(
      {
        loading: false,
        people: people
      });
  }

  render() {
    const { people, loading } = this.state;
    return (<div>
        { loading ? <div>Loading</div> : <ul>
          {people.map((person) => (
            <Person key={person} name={person} />
          ))}
        </ul>}
      </div>
    )
  }
}

export default People;