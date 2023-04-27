import React, { useState, useEffect } from 'react'

import Swal from 'sweetalert2'

export default function Service() {

    return (
        <div>
            <div class="topCustomers nogap">
                <div class="row">
                    <div class="p-4 mb-4 text-xl text-blue-100 bg-blue-700 rounded-lg dark:bg-blue-900 dark:text-blue-100"
                        role="alert">
                        <span class="font-medium">
                            <h1> My Designs </h1>
                        </span>
                    </div>
                </div>
                <div class="row">

                    <div class="overflow-x-auto relative">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="py-3 px-6">
                                        Client Name
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Design Id
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Date
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        View
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Delete
                                    </th>

                                </tr>
                            </thead>

                            {/* <tbody>
                                {recordList()}
                            </tbody> */}
                        </table>
                    </div>
                </div>
            </div>

            <div class="topCustomers">
                <div class="row">
                    <div class="p-4 mb-4 text-xl text-blue-100 bg-blue-700 rounded-lg dark:bg-blue-900 dark:text-blue-100"
                        role="alert">
                        <span class="font-medium">
                            <h1> My Orders </h1>
                        </span>
                    </div>
                </div>
                <div class="row">
                    <div class="overflow-x-auto relative">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="py-3 px-6">
                                        Client Name
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Placed Date
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        View Order
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Total Price
                                    </th>

                                </tr>
                            </thead>
                            {/* <tbody>
                                {recordList2()}

                            </tbody> */}
                        </table>
                    </div>
                </div>

            </div>
            <br/><br/>
            <div class="topCustomers">
                <div class="row">
                    <div class="p-4 mb-4 text-xl text-blue-100 bg-blue-700 rounded-lg dark:bg-blue-900 dark:text-blue-100"
                        role="alert">
                        <span class="font-medium">
                            <h1> Production </h1>
                        </span>
                    </div>
                </div>
                <div class="row">

                    <div class="overflow-x-auto relative">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="py-3 px-6">
                                        Client Name
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Order Id
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Date
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                {recordList3()}

                            </tbody> */}
                        </table>
                    </div>
                    <br />
                </div>
            </div>
            <br/>
            <div class="topCustomers">
                <div class="row">
                    <div class="p-4 mb-4 text-xl text-blue-100 bg-blue-700 rounded-lg dark:bg-blue-900 dark:text-blue-100"
                        role="alert">
                        <span class="font-medium">
                            <h1>Deliverey</h1>
                        </span>
                    </div>
                </div>
                <div class="row">

                    <div class="overflow-x-auto relative">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="py-3 px-6">
                                        Client Name
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Placed Date
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        View Order
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Total Price
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                {recordList4()}

                            </tbody> */}
                        </table>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    )

}