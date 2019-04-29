import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addTodo } from 'store/todos/actions'

const Create = props => {
  const [title, setTitle] = useState('')

  return (
    <div>
      <input onChange={({ target: { value } }) => setTitle(value)} defaultValue="" />
      <button onClick={() => props.addTodo(title)}>Add</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addTodo,
    },
    dispatch,
  )
}

export default connect(
  null,
  mapDispatchToProps,
)(Create)

Create.propTypes = {
  addTodo: PropTypes.func.isRequired,
}
