import React from 'react'

function Button(props) {
    return (
        <div>
            {props.loggedIn ? <h1>You are logged in</h1> : <h1>You are logged out</h1>}
            <input
              type="button"
              value={props.loggedIn ? 'Logout' : 'Login'}
              onClick={props.handleClick}
            />
        </div>
    )

}

export default Button