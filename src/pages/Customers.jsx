import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import customersData from '../data/customers.json';

export default function Customers() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div className="p-6 space-y-8 animate-in fade-in duration-700">
            <PageHeader title="Customers Database" breadcrumb="Customers">
                <button 
                    onClick={() => setIsFormOpen(!isFormOpen)}
                    className="bg-hijau text-white px-8 py-3 rounded-2xl font-black shadow-xl shadow-green-100 hover:shadow-green-200 transition-all active:scale-95"
                >
                    {isFormOpen ? 'Close' : 'Add New Member'}
                </button>
            </PageHeader>

            {isFormOpen && (
                <div className="bg-white p-10 rounded-[2.5rem] border-2 border-green-100 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
                    <h3 className="text-2xl font-black text-gray-900 mb-8">Join the VIP Circle</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                        <input type="text" placeholder="Full Name" className="bg-gray-100/50 border-2 border-transparent p-4 rounded-2xl focus:border-hijau focus:bg-white transition-all outline-none" />
                        <input type="email" placeholder="Email Address" className="bg-gray-100/50 border-2 border-transparent p-4 rounded-2xl focus:border-hijau focus:bg-white transition-all outline-none" />
                        <input type="text" placeholder="Phone Number" className="bg-gray-100/50 border-2 border-transparent p-4 rounded-2xl focus:border-hijau focus:bg-white transition-all outline-none" />
                        <select className="bg-gray-100/50 border-2 border-transparent p-4 rounded-2xl focus:border-hijau focus:bg-white transition-all outline-none font-bold">
                            <option>Bronze Member</option>
                            <option>Silver Member</option>
                            <option>Gold Member</option>
                        </select>
                        <button className="md:col-span-2 bg-gray-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-hijau transition-colors duration-500">Register Customer</button>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {customersData.map((cust) => (
                    <div key={cust.customerId} className="group bg-white p-8  border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                        {/* Decorative Background Element */}
                        <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-5 group-hover:scale-150 transition-transform duration-700 ${
                            cust.loyalty === 'Gold' ? 'bg-yellow-500' : 'bg-hijau'
                        }`}></div>

                        <div className="flex justify-between items-center mb-6">
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center font-black text-xl text-gray-300 group-hover:bg-green-500 group-hover:text-white transition-all duration-500">
                                {cust.customerName.charAt(0)}
                            </div>
                            <span className={`px-4 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest ${
                                cust.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-700' :
                                cust.loyalty === 'Silver' ? 'bg-slate-100 text-slate-500' : 'bg-orange-100 text-orange-700'
                            }`}>
                                {cust.loyalty}
                            </span>
                        </div>

                        <h4 className="text-xl font-black text-gray-900 mb-1">{cust.customerName}</h4>
                        <p className="text-sm font-bold text-indigo-600 mb-6 opacity-60 group-hover:opacity-100">{cust.customerId}</p>
                        
                        <div className="space-y-4 border-t border-gray-50 pt-6">
                            <div className="flex items-center text-sm">
                                <span className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-lg mr-3 text-gray-400 group-hover:text-hijau transition-colors">@</span>
                                <span className="text-gray-600 font-medium">{cust.email}</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <span className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-lg mr-3 text-gray-400 group-hover:text-hijau transition-colors">#</span>
                                <span className="text-gray-600 font-medium">{cust.phone}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}