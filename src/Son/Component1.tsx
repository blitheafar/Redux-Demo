import React from 'react';
import { _PropsBro } from '../IProps';
import { C2 as Component2 } from './Component2';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../reducer';

class Component1 extends React.Component<_PropsBro>{
  render() {
    const { bro, broAdd, broCut } = this.props;
    return (
      <div style={{ border: '1px solid red' }}>
        <span>父组件</span>
        <br />
        <span>
          <button onClick={broAdd}>兄弟+</button>
          <button onClick={broCut}>兄弟-</button>
          <span> 兄弟传参:{bro}</span>
        </span>
        <Component2 />
      </div>
    )
  }
}

const C1 = connect(mapStateToProps, mapDispatchToProps)(Component1)

export default C1;