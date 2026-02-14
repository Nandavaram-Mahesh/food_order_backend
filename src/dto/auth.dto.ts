import { VendorPayload } from './vendor.dto.js'
import { CustomerPayload } from './customer.dto.js';

export type AuthPayload = VendorPayload | CustomerPayload;