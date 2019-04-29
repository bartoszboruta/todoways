import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Item from './Item'

const List = ({ todos }) => {
  return todos.map(todo => todo && <Item key={todo.id} todo={todo} />)
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
  }
}

export default connect(
  mapStateToProps,
  null,
)(List)

List.propTypes = {
  todos: PropTypes.array.isRequired,
}
