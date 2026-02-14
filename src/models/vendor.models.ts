import mongoose, { Schema, Document, Model } from 'mongoose';
import { timeStamp } from 'node:console';

interface IVendorDoc extends Document{
    name: string;
    ownerName: string;
    foodType: [string];
    pincode: string;
    address: string;
    phone: string;
    email: string;
    password: string;
    salt: string;
    serviceAvailable: boolean;
    coverImages: [string];
    rating: number;
    foods: any,
    lat: number;
    lng: number;
}

const vendorSchema = new Schema({
    name:{ type: String, required: true},
    ownerName: { type: String, required: true},
    foodType: { type: [String] },
    pincode: { type: String, required: true},
    address: { type: String},
    phone: { type: String, required: true},
    email: { type: String, required: true},
    password:{ type: String, required: true,select:false},
    salt: { type: String, required: false,select:false},
    serviceAvailable: { type: Boolean},
    coverImages: { type: [String]},
    rating: { type: Number},
    foods: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'food'
    }],
    lat: { type: Number},
    lng: {type: Number},
},{timestamps:false})

vendorSchema.set('toJSON', { virtuals: true });

const vendor = mongoose.model<IVendorDoc>('vendor',vendorSchema)

interface UserDoc extends Document{
    username:string;
    email:string;
    dob:Date;
    isActive:boolean
}

const userSchema = new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    dob:{type:Date},
    isActive:{type:Boolean,required:true,default:true}
}, { timestamps: true })

const userModel = mongoose.model<UserDoc>('user',userSchema)


export {vendor}

