import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./payments.css";

export default function AddPayments() {
    const navigate = useNavigate();

    const [TotalAmount, setTotalAmount] = useState("");
    const [RecipientName, setRecipientName] = useState("");
    const [RecipientEmail, setRecipientEmail] = useState("");
    const [ContactNumber, setContactNumber] = useState("");
    const [Purpose, setPurpose] = useState("");

    function sentData1(e){
        e.preventDefault();
        console.log("Details added")
        const newPaymentdetails = {

            TotalAmount,
            RecipientName,
            RecipientEmail,
            ContactNumber,
            Purpose,

        }

        axios.post("http://localhost:8070/paymentDetails/add", newPaymentdetails).then(()=>{
            alert("Details added")
            setTotalAmount("");
            setRecipientName("");
            setRecipientEmail("");
            setContactNumber("");
            setPurpose("");
            
        }).catch((err)=>{
            alert(err);
        })
       navigate("/paymentpayment") 
    }



    return (
        <div>
            <br/>
            <br/>
            <div className='paycont'>
                <div class="flex p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300 payalert" role="alert">
                    <div>
                        <span class="font-large epd"><b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Enter New Payment Details</b></span>
                    </div>
                </div>

                <div className="payform">
                    <form >
                        <div class="mb-6">
                            <label
                                for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Total Amount<required/></label>
                            <input
                                type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="500000"
                                onChange={(e)=>{   // onChange Function --- occuring this one continuously
                                    setTotalAmount(e.target.value)
                  }}
                                required />
                        </div>

                        <div class="mb-6">
                            <label
                                for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Recipient Name</label>
                            <input
                                type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John Doe"
                                onChange={(e)=>{   // onChange Function --- occuring this one continuously
                                    setRecipientName(e.target.value)
                            }}
                                required />
                        </div>

                        <div class="mb-6">
                            <label
                                for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Recipient Email</label>
                            <input
                                type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="JohnDoe@gmail.com"
                                onChange={(e)=>{   // onChange Function --- occuring this one continuously
                                    setRecipientEmail(e.target.value)
                                }}
                                required />
                        </div>

                        <div class="mb-6">
                            <label
                                for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Recipient Contact Number</label>
                            <input
                                type=" " name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="011-5533621" maxLength='10'
                                onChange={(e)=>{   // onChange Function --- occuring this one continuously
                                    setContactNumber(e.target.value)
                  }}
                                required />
                        </div>
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                            Payment Purpose</label>
                        <textarea
                            id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Purpose"
                            onChange={(e)=>{   // onChange Function --- occuring this one continuously
                                setPurpose(e.target.value)
                            }}
                            required></textarea>

                        <br />
                        <a href={"/paymentpayment"}><button type="submit" className="btnsubmit" onClick={sentData1}>Submit</button></a>
                    </form>
                </div>
                <br />
            </div>
        </div>
    )
}