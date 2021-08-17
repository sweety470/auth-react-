const express=require('express')
const mongoose=require('../database/database')
const User=require('../model/model')

exports.loginRoute=(req,res)=>{
    const{email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(user){
                
                if(password===user.password){
                    res.status(400).json({
                        message:'Success'
                    })
                    res.send({message:"Login successfully",user:user})
                }else{
                    
                    res.send({message:"password does not match"})
                }
            }
        }else{
            
            res.send({message:"User not register "})
        }
    })
}

exports.registerRoute=(req,res)=>{
    const{name,email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already registered"})
        }
    })
    const user=new User({
        name,
        email,
        password
    })
    user.save(err =>{
        if(err){
            //console.log(err)
            res.send({message:"error"})
        }else{
            res.send({message:"Successfully Registered!!,Please login.."})
        }
    })
}
