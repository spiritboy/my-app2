import React, { Component}  from 'react';
import Button from '@material-ui/core/Button';

class Admin extends Component{
    render(){
        return (
           <div>
               <h2>Admin!...</h2>
               <Button variant={"raised"} color={"secondary"} onClick={()=>{console.log(343434)}} >
                DASHBOARDS
               </Button>
           </div>
        )
    }
}
export default Admin