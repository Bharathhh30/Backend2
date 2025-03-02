import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name is required"],
        trim : true,
        minLength: 2,
        maxLength:100,
    },

    price : {
        type : Number,
        required : [true, "Price is required"],
        min: [0,'Price must be a greater than 0']

    },

    currency : {
        type:'String',
        enum : ['USD','EUR','GBP'],
        default : 'USD'
    },

    frequency : {
        type: 'String',
        enum : ['monthly','yearly','daily','weekly'],

    },

    category : {
        type: 'String',
        enum : ['sports','movies','news','music','entertainment','finance','polictics','technology','lifestyle','education','health','travel','food','gaming','other'],
        required : true
    },

    paymentMethod:{
        type : 'String',
        required : true,
        trim : true,
    },

    status : {
        type : 'String',
        enum : ['active','cancelled','expired'],
        default : 'active'
    },

    startDate : {
        type:Date,
        required : true,
        validate : {
            validator : (value)=> value <= new Date(),
            message : "Start date must be in the past"
        }
    },

    renewalDate : {
        type : Date,
        validate : {
            validator : function(value) {return value > this.startDate} ,
            message : "Renewal datE must be after the start date"
        }
    },

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
        index : true
    }
},{timestamps:true});


// auto calculator for renewal date
subscriptionSchema.pre('save',function(next){
    if(!this.renewalDate){
        const renewalPeriods = {
            'monthly' : 30,
            'yearly' : 365,
            'daily' : 1,
            'weekly' : 7
        }

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }

    // Auto-update the status if renewal date has passed
    if(this.renewalDate < new Date()){
        this.status = 'expired';
    }

    next()
})

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;