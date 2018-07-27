import React, { Component}  from 'react';

class Template extends Component{
    render(){
        return (
            <div>
                <header>
                    <h1>Header</h1>
                </header>
                <main>
                    {this.props.children}
                </main>
                <footer>
                    <i>footer</i>
                </footer>

            </div>
        )
    }
}

export default Template