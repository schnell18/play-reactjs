import React from 'react'

function Conditional(props) {
    if (props.isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <h1>Loaded</h1>
    )
}

export default Conditional