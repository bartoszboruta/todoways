import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleTodo, removeTodo } from 'store/todos/actions'

const Item = props => {
  const {
    todo: { id, title, createdAt, completed },
  } = props
  return (
    <div>
      <span>{completed}</span>
      <span>{createdAt}</span>
      <span style={{ textDecorationLine: completed ? 'line-through' : 'none' }}>{title}</span>
      <span onClick={() => props.toggleTodo(id)}>toggler</span>
      <span onClick={() => props.removeTodo(id)}>remove</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toggleTodo,
      removeTodo,
    },
    dispatch,
  )
}

export default connect(
  null,
  mapDispatchToProps,
)(Item)

Item.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
}
