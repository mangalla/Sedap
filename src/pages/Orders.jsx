import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ordersData from '../data/orders.json';

export default function Orders() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div className="p-6 space-y-6 animate-in fade-in duration-500">
            <PageHeader 
                title="Order Management" 
                breadcrumb={['E-Commerce', 'Orders']}
            >
                <button className="hidden md:block text-gray-500 font-semibold hover:text-gray-700 transition-colors">
                    Export to CSV
                </button>
                <button 
                    onClick={() => setIsFormOpen(!isFormOpen)}
                    className="bg-hijau text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-green-100 hover:scale-105 active:scale-95 transition-all"
                >
                    {isFormOpen ? 'Cancel' : '+ New Order'}
                </button>
            </PageHeader>
            
            {isFormOpen && (
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-50 animate-in slide-in-from-top-5 duration-300">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Create New Order</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Customer</label>
                            <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border-none p-3 rounded-xl focus:ring-2 focus:ring-hijau outline-none" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Status</label>
                            <select className="w-full bg-gray-50 border-none p-3 rounded-xl focus:ring-2 focus:ring-hijau outline-none">
                                <option>Pending</option>
                                <option>Completed</option>
                                <option>Cancelled</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Amount</label>
                            <input type="text" placeholder="Rp 0" className="w-full bg-gray-50 border-none p-3 rounded-xl focus:ring-2 focus:ring-hijau outline-none" />
                        </div>
                        <div className="flex items-end">
                            <button className="w-full bg-hijau text-white py-3 rounded-xl font-black shadow-md">Create Order</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50/50 border-b border-gray-100 text-gray-400 text-xs uppercase tracking-widest">
                        <tr>
                            <th className="px-8 py-5">Order Info</th>
                            <th className="px-8 py-5">Customer</th>
                            <th className="px-8 py-5">Status</th>
                            <th className="px-8 py-5 text-right">Revenue</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {ordersData.map((order) => (
                            <tr key={order.orderId} className="hover:bg-green-50/30 transition-colors group">
                                <td className="px-8 py-5">
                                    <div className="font-bold text-gray-900">{order.orderId}</div>
                                    <div className="text-xs text-gray-400">{order.orderDate}</div>
                                </td>
                                <td className="px-8 py-5 font-semibold text-gray-700">{order.customerName}</td>
                                <td className="px-8 py-5">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                                        order.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                                        order.status === 'Cancelled' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                                    }`}>
                                        <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                                            order.status === 'Completed' ? 'bg-green-500' : 
                                            order.status === 'Cancelled' ? 'bg-red-500' : 'bg-orange-500'
                                        }`}></span>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-8 py-5 text-right font-black text-gray-900">{order.totalPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}