import React from 'react'
import { connect, MapDispatchToPropsParam } from 'react-redux'

function redux(props: IProps) {
  return (
    <>
      <h1>redux</h1>
      <h2>{props.num}</h2>
      <button onClick={props.add}>改变state</button>
    </>
  )
}
const mapStateProps = (state: IState) => {
  return {
    num: state.num,
  }
}

const mapDispatchToProps = (
  dispatch: (arg0: { type: string }) => void
): MapDispatchToPropsParam<{ add(): void }, {}> => {
  return {
    add() {
      const action = { type: 'add' }
      dispatch(action)
    },
  }
}

export default connect(mapStateProps, mapDispatchToProps)(redux)

interface IProps {
  num: number
  add: () => void
}

interface IState {
  num: number
}
