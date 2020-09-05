import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' }); /// cada um dispara um evento na store , não temos dispatch , ams por questões de engerharia usamos o nome dispatcher
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' }); /// nao passamos o estado do counter para o componente, disparamos uma mensagem para incrementar e decrementar
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.count /// passamos o estaod referenciando o estado da store que estamos associando , e qqual compoenente local está associado 
  };
}

export default connect(mapStateToProps)(Counter); /// connect pega o componente com a store 
