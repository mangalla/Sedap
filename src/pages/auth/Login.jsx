import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// Import ikon untuk mempercantik notifikasi
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
    // 1. Inisialisasi Hooks
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [dataForm, setDataForm] = useState({
        email: "", // Akan dikirim sebagai 'username' ke API DummyJSON
        password: "",
    });

    // 2. Fungsi untuk mencatat perubahan input
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    // 3. Fungsi untuk menangani proses Login
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(""); // Bersihkan error lama

        axios
            .post("https://dummyjson.com/user/login", {
                username: dataForm.email, // API DummyJSON menggunakan field 'username'
                password: dataForm.password,
            })
            .then((response) => {
                // Jika sukses (status 200)
                console.log("Login Berhasil:", response.data);
                // Simpan token jika perlu: localStorage.setItem("token", response.data.token);
                navigate("/");
            })
            .catch((err) => {
                // Jika gagal
                if (err.response) {
                    setError(err.response.data.message || "Username atau password salah");
                } else {
                    setError("Gagal terhubung ke server");
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // 4. Komponen Info (Loading & Error)
    const errorInfo = error ? (
        <div className="bg-red-100 border border-red-200 mb-5 p-3 text-sm font-medium text-red-700 rounded-lg flex items-center">
            <BsFillExclamationDiamondFill className="me-2 text-lg" />
            {error}
        </div>
    ) : null;

    const loadingInfo = loading ? (
        <div className="bg-blue-100 border border-blue-200 mb-5 p-3 text-sm font-medium text-blue-700 rounded-lg flex items-center">
            <ImSpinner2 className="me-2 animate-spin text-lg" />
            Memverifikasi data...
        </div>
    ) : null;

    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                Welcome Back 👋
            </h2>

            {/* Tampilkan status loading atau error di atas form */}
            {errorInfo}
            {loadingInfo}

            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Username / Email
                    </label>
                    <input
                        type="text"
                        name="email" // Harus sama dengan key di dataForm
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-green-500 outline-none transition-all"
                        placeholder="Masukkan username (ex: emilys)"
                        onChange={handleChange}
                        value={dataForm.email}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password" // Harus sama dengan key di dataForm
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-green-500 outline-none transition-all"
                        placeholder="********"
                        onChange={handleChange}
                        value={dataForm.password}
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ${
                        loading 
                        ? "bg-gray-400 cursor-not-allowed" 
                        : "bg-green-500 hover:bg-green-600 shadow-md active:scale-95"
                    }`}
                >
                    {loading ? "Tunggu Sebentar..." : "Login"}
                </button>
            </form>
        </div>
    );
}