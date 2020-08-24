import React from 'react'
import { connect } from 'react-redux'
import { increaseCount, decreaseCount } from './counterActions'
import { Button } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles'
import { Spring } from 'react-spring/renderprops'
const useStyles = makeStyles({
    textStyles: { textAlign: "center" },
    buttonStyles: { justifyContent: "center" }
});

function CounterInput(props){
    
    const handleOnClick = (e) => {
        e.preventDefault()
        if(e.target.innerText === 'UP') {
            props.increaseCount()  
        }else{
            props.decreaseCount()
        }
    }
    const classes = useStyles(props)
    return(
        <Spring
            from={{ marginTop: '-250px'}}
            to={{ marginTop: '20px'}}
            config={{ delay: 2000, duration: 500 }}
        
        >{ args => 
            <Card style={args}>
                <CardHeader className={classes.textStyles} title="Up Click Count"/>
                <CardContent className={classes.textStyles} component='h1'>
                    {props.count}
                </CardContent>
                
                <CardActions className={classes.buttonStyles}>
                    <Button 
                        name="up"
                        color='primary'
                        variant='outlined'                
                        onClick={e => handleOnClick(e)}
                    >Up</Button>
                    <Button                
                        name="down"
                        color='primary'
                        variant='outlined'
                        onClick={e => handleOnClick(e)}
                    >Down</Button>
                </CardActions>
            </Card>
        }
        </Spring>

    )   
}

const mapStateToProps = state => {
    return ({
        count: state.count
    })
}
export default connect(mapStateToProps, { 
    increaseCount, 
    decreaseCount 
})(CounterInput);


// import { Spring } from 'react-spring/renderprops'
// function CounterInput(props){
    
//     const handleOnClick = (e) => {
//         e.preventDefault()
//         if(e.target.innerText === 'UP') {
//           props.increaseCount()  
//         }else{
//             props.decreaseCount()
//         }
//     }
//     const classes = useStyles(props)
//     return(
//         <Spring
//             from={{ marginTop: '-250px'}}
//             to={{ marginTop: '20px'}}
//             config={{ delay: 2000 }}
        
//         >{ props => 
//             <Card style={props}>
//                 <CardHeader className={classes.textStyles} title="Up Click Count"/>
//                 <CardContent className={classes.textStyles} component='h1'>
//                     {props.count}
//                 </CardContent>
                
//                 <CardActions className={classes.buttonStyles}>
//                     <Button 
//                         name="up"
//                         color='primary'
//                         variant='outlined'                
//                         onClick={e => handleOnClick(e)}
//                     >Up</Button>
//                     <Button                
//                         name="down"
//                         color='primary'
//                         variant='outlined'
//                         onClick={e => handleOnClick(e)}
//                     >Down</Button>
//                 </CardActions>
//             </Card>
//         }
//         </Spring>

//     )   
// }

