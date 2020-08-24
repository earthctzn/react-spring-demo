import React from 'react'
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    makeStyles 
} from '@material-ui/core'

import 
    AccountCircleRoundedIcon 
from '@material-ui/icons/AccountCircleRounded';

import { Spring } from 'react-spring/renderprops'


const useStyles = makeStyles({
    navStyle: {
        flex: 1
    }
})

const Header = () => {
    const classes = useStyles()
    return(
        <Spring
            from={{ marginTop: '-90px' }}
            to={{ marginTop: '0px' }}
        >
            {props => (
                <AppBar style={props} position='static'>
                    <Toolbar>
                        <Typography className={classes.navStyle}>
                            React Counter with Material-UI
                        </Typography>
                        <AccountCircleRoundedIcon />
                    </Toolbar> 
                </AppBar> 
            )}
        </Spring>
    )
}

export default Header