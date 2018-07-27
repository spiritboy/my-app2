import React, {Component} from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
const theme = createMuiTheme({
    typography: {
        // Tell Material-UI what's the font-size on the html element is.
        htmlFontSize: 10
    },
});

class Template extends Component {
    render() {
        return (
              <MuiThemeProvider theme={theme}>
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
              </MuiThemeProvider>
        )
    }
}

export default Template