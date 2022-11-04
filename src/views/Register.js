import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ArchitectRegister from '../components/Register/ArchitectRegister';
import CustomerRegister from '../components/Register/CustomerRegister';
import PartnerRegister from '../components/Register/PartnerRegister';
import UserType from '../components/Register/UserType';
import { motion } from 'framer-motion';

function Register(props) {

const history=useHistory()
const [selectType, setSelectType] = useState(0)

const SelectTypeHandle=(id)=>{
    setSelectType(id)
}

const LoginHandle=(id)=>{
    history.push("/")
    }

useEffect(() => {
    
}, [selectType])

    return (
        <div>     
             
            {selectType===0 ? 
             <motion.div initial={{x: 1000}} animate={{x:0}}>  
                <UserType selectType={SelectTypeHandle}/>
             </motion.div> :null }
            {selectType===1 ? 
             <motion.div initial={{x: 1000}} animate={{x:0}}>
                 <CustomerRegister login={LoginHandle} selectType={SelectTypeHandle}/>
             </motion.div>:null }
            {selectType===3 ?  
            <motion.div initial={{x: 1000}} animate={{x:0}}>
                <ArchitectRegister login={LoginHandle} selectType={SelectTypeHandle}/>
            </motion.div>:null }
            {selectType===2 ? 
             <motion.div initial={{x: 1000}} animate={{x:0}}>
                <PartnerRegister login={LoginHandle} selectType={SelectTypeHandle}/>
             </motion.div>:null } 
           
        </div>
    );
}

export default Register;