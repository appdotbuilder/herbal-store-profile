import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    formatted_price: string;
    image_url?: string;
}

interface CompanyInfo {
    about_us: string;
    phone: string;
    email: string;
    address: string;
    whatsapp?: string;
    instagram?: string;
    facebook?: string;
    business_hours?: string;
}

interface Props {
    companyInfo?: CompanyInfo;
    featuredProducts?: Product[];
    [key: string]: unknown;
}

export default function Welcome({ companyInfo, featuredProducts = [] }: Props) {
    return (
        <>
            <Head title="Toko Herbal Nusantara - Obat Herbal Tradisional Berkualitas" />
            
            <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
                {/* Header */}
                <header className="bg-white shadow-md border-b-4 border-green-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-6">
                            <div className="flex items-center">
                                <div className="text-3xl mr-3">🌿</div>
                                <div>
                                    <h1 className="text-2xl font-bold text-green-800">Herbal Nusantara</h1>
                                    <p className="text-sm text-green-600">Obat Tradisional Berkualitas</p>
                                </div>
                            </div>
                            
                            <nav className="hidden md:flex space-x-8">
                                <Link href="/" className="text-green-800 hover:text-green-600 font-medium">
                                    🏠 Beranda
                                </Link>
                                <Link href={route('about')} className="text-green-800 hover:text-green-600 font-medium">
                                    📖 Tentang Kami
                                </Link>
                                <Link href={route('products')} className="text-green-800 hover:text-green-600 font-medium">
                                    🌱 Produk
                                </Link>
                                <Link href={route('contact')} className="text-green-800 hover:text-green-600 font-medium">
                                    📞 Kontak
                                </Link>
                                <Link 
                                    href={route('login')} 
                                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                                >
                                    🔐 Login Admin
                                </Link>
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-20 text-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-5xl font-bold text-green-900 mb-6">
                            🌿 Kesehatan Alami untuk Keluarga Indonesia
                        </h2>
                        <p className="text-xl text-green-700 mb-8 leading-relaxed">
                            Temukan solusi kesehatan tradisional terpercaya dengan ramuan herbal berkualitas tinggi yang telah terbukti selama puluhan tahun melayani masyarakat Indonesia.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                href={route('products')} 
                                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition inline-flex items-center justify-center"
                            >
                                🛒 Lihat Produk Kami
                            </Link>
                            <Link 
                                href={route('contact')} 
                                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition inline-flex items-center justify-center"
                            >
                                💬 Konsultasi Gratis
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <h3 className="text-3xl font-bold text-center text-green-900 mb-12">
                            ✨ Mengapa Memilih Herbal Nusantara?
                        </h3>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                                <div className="text-4xl mb-4">🏆</div>
                                <h4 className="text-xl font-semibold text-green-800 mb-3">Kualitas Terjamin</h4>
                                <p className="text-green-700">Produk herbal berkualitas tinggi dengan standar kebersihan dan keamanan yang ketat</p>
                            </div>
                            
                            <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                                <div className="text-4xl mb-4">🌾</div>
                                <h4 className="text-xl font-semibold text-green-800 mb-3">100% Natural</h4>
                                <p className="text-green-700">Menggunakan bahan-bahan alami pilihan tanpa campuran bahan kimia berbahaya</p>
                            </div>
                            
                            <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                                <div className="text-4xl mb-4">👨‍⚕️</div>
                                <h4 className="text-xl font-semibold text-green-800 mb-3">Resep Turun Temurun</h4>
                                <p className="text-green-700">Dibuat berdasarkan resep tradisional yang telah terbukti khasiatnya selama generasi</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Products */}
                {featuredProducts.length > 0 && (
                    <section className="py-16 bg-green-50">
                        <div className="max-w-6xl mx-auto px-4">
                            <h3 className="text-3xl font-bold text-center text-green-900 mb-12">
                                🌟 Produk Unggulan
                            </h3>
                            
                            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
                                {featuredProducts.slice(0, 6).map((product) => (
                                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                                        <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                                            <div className="text-6xl">🌿</div>
                                        </div>
                                        <div className="p-6">
                                            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
                                                {product.category}
                                            </span>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h4>
                                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-xl font-bold text-green-600">
                                                    Rp {Number(product.price).toLocaleString('id-ID')}
                                                </span>
                                                <Link 
                                                    href={route('product.show', product.id)}
                                                    className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition"
                                                >
                                                    Detail
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="text-center mt-10">
                                <Link 
                                    href={route('products')} 
                                    className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
                                >
                                    🔍 Lihat Semua Produk
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {/* About Preview */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h3 className="text-3xl font-bold text-green-900 mb-8">🏪 Tentang Toko Kami</h3>
                        <div className="prose prose-lg text-green-700 max-w-none">
                            {companyInfo ? (
                                <p className="leading-relaxed">
                                    {companyInfo.about_us.substring(0, 300)}...
                                </p>
                            ) : (
                                <p className="leading-relaxed">
                                    Toko Herbal Nusantara adalah toko obat herbal tradisional yang telah melayani masyarakat dengan berbagai ramuan herbal berkualitas tinggi. Kami berkomitmen memberikan solusi kesehatan alami yang aman dan berkhasiat.
                                </p>
                            )}
                        </div>
                        <Link 
                            href={route('about')} 
                            className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                        >
                            📖 Baca Selengkapnya
                        </Link>
                    </div>
                </section>

                {/* Contact Info */}
                <section className="py-16 bg-green-600 text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h3 className="text-3xl font-bold mb-8">📞 Hubungi Kami</h3>
                        {companyInfo && (
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-xl font-semibold mb-4">📍 Alamat</h4>
                                    <p>{companyInfo.address}</p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-4">☎️ Kontak</h4>
                                    <p>Telepon: {companyInfo.phone}</p>
                                    <p>Email: {companyInfo.email}</p>
                                    {companyInfo.whatsapp && (
                                        <p>WhatsApp: {companyInfo.whatsapp}</p>
                                    )}
                                </div>
                            </div>
                        )}
                        <div className="mt-8">
                            <Link 
                                href={route('contact')} 
                                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
                            >
                                💬 Hubungi Sekarang
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-green-800 text-white py-8">
                    <div className="max-w-6xl mx-auto px-4 text-center">
                        <div className="flex items-center justify-center mb-4">
                            <div className="text-2xl mr-2">🌿</div>
                            <span className="text-xl font-bold">Herbal Nusantara</span>
                        </div>
                        <p className="text-green-200">
                            © 2024 Herbal Nusantara. Kesehatan alami untuk keluarga Indonesia.
                        </p>
                        {companyInfo && (companyInfo.instagram || companyInfo.facebook) && (
                            <div className="mt-4 flex justify-center space-x-4">
                                {companyInfo.instagram && (
                                    <span className="text-green-200">📷 {companyInfo.instagram}</span>
                                )}
                                {companyInfo.facebook && (
                                    <span className="text-green-200">📘 {companyInfo.facebook}</span>
                                )}
                            </div>
                        )}
                    </div>
                </footer>
            </div>
        </>
    );
}