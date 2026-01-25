import express,{Request,Response,NextFunction} from "express"
import { CreateVandorInput } from "../dto"
import { vendor } from "../models"

export const createVendor = async (req:Request,res:Response,next:NextFunction)=>{
    const {name,ownerName,foodType,pincode,address,phone,email,password} = <CreateVandorInput>req.body
    
    const createdVendor = await vendor.create(
        {
        name: name,
        address: address,
        pincode: pincode,
        foodType: foodType,
        email: email,
        password: password,
        ownerName: ownerName,
        phone: phone,
        rating: 0,
        serviceAvailable: false,
        coverImages: [],
        lat: 0,
        lng: 0
        }
    ) 

    return res.json(createdVendor)

    // return res.json({name,ownerName,foodType,pincode,address,phone,email,password})
}

export const getVendors = async (req:Request,res:Response,next:NextFunction)=>{

}

export const getVendorById = async (req:Request,res:Response,next:NextFunction)=>{

}

