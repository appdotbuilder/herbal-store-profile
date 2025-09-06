import React from 'react';
import { Head, Link } from '@inertiajs/react';

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
    [key: string]: unknown;
}

export default function About({ companyInfo }: Props) {
    return (
        <>
            <Head title="Tentang Kami - Herbal Nusantara" />
            
            <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
                {/* Header */}
                <header className="bg-white shadow-md border-b-4 border-green-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-6">
                            <Link href="/" className="flex items-center">
                                <div className="text-3xl mr-3">🌿</div>
                                <div>
                                    <h1 className="text-2xl font-bold text-green-800">Herbal Nusantara</h1>
                                    <p className="text-sm text-green-600">Obat Tradisional Berkualitas</p>
                                </div>
                            </Link>
                            
                            <nav className="hidden md:flex space-x-8">
                                <Link href="/" className="text-green-800 hover:text-green-600 font-medium">
                                    🏠 Beranda
                                </Link>
                                <Link href={route('about')} className="text-green-800 hover:text-green-600 font-medium border-b-2 border-green-600">
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
                <section className="py-16 text-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-4xl font-bold text-green-900 mb-6">
                            📖 Tentang Herbal Nusantara
                        </h2>
                        <p className="text-xl text-green-700">
                            Mengenal lebih dekat perjalanan dan komitmen kami dalam menyediakan obat herbal tradisional berkualitas
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="pb-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <div className="text-center mb-8">
                                <div className="text-6xl mb-4">🏪</div>
                                <h3 className="text-2xl font-bold text-green-900 mb-4">Sejarah Kami</h3>
                            </div>
                            
                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                                {companyInfo ? (
                                    <p className="text-center">{companyInfo.about_us}</p>
                                ) : (
                                    <p className="text-center">
                                        Toko Herbal Nusantara adalah toko obat herbal tradisional yang telah melayani masyarakat sejak 1985. 
                                        Kami menghadirkan berbagai ramuan herbal berkualitas tinggi yang diolah secara tradisional dengan resep turun temurun. 
                                        Komitmen kami adalah memberikan solusi kesehatan alami yang aman dan berkhasiat untuk keluarga Indonesia.
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Values Section */}
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                                <div className="text-4xl mb-4">🌿</div>
                                <h4 className="text-xl font-bold text-green-800 mb-3">Alami & Berkualitas</h4>
                                <p className="text-gray-600">
                                    Menggunakan bahan-bahan herbal alami pilihan dengan proses pengolahan yang higienis dan terjamin kualitasnya
                                </p>
                            </div>
                            
                            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                                <div className="text-4xl mb-4">🏆</div>
                                <h4 className="text-xl font-bold text-green-800 mb-3">Terpercaya</h4>
                                <p className="text-gray-600">
                                    Melayani masyarakat selama puluhan tahun dengan berbagai testimonial positif dari pelanggan setia
                                </p>
                            </div>
                            
                            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                                <div className="text-4xl mb-4">👨‍⚕️</div>
                                <h4 className="text-xl font-bold text-green-800 mb-3">Konsultasi Ahli</h4>
                                <p className="text-gray-600">
                                    Didukung oleh ahli herbal berpengalaman yang siap memberikan konsultasi dan saran terbaik
                                </p>
                            </div>
                        </div>

                        {/* Mission & Vision */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="text-center mb-4">
                                    <div className="text-4xl mb-2">🎯</div>
                                    <h4 className="text-xl font-bold text-green-800">Visi Kami</h4>
                                </div>
                                <p className="text-gray-700 text-center">
                                    Menjadi toko herbal terdepan dalam menyediakan solusi kesehatan alami yang terpercaya 
                                    dan mudah diakses oleh seluruh keluarga Indonesia.
                                </p>
                            </div>
                            
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="text-center mb-4">
                                    <div className="text-4xl mb-2">🚀</div>
                                    <h4 className="text-xl font-bold text-green-800">Misi Kami</h4>
                                </div>
                                <ul className="text-gray-700 space-y-2 text-sm">
                                    <li>• Menyediakan produk herbal berkualitas tinggi</li>
                                    <li>• Memberikan pelayanan terbaik kepada pelanggan</li>
                                    <li>• Melestarikan warisan pengobatan tradisional Indonesia</li>
                                    <li>• Memberikan edukasi kesehatan alami kepada masyarakat</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-green-600 text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h3 className="text-3xl font-bold mb-6">🤝 Mari Berkenalan Lebih Dekat</h3>
                        <p className="text-xl mb-8">
                            Kami siap membantu Anda menemukan solusi kesehatan alami yang tepat untuk keluarga
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                href={route('products')} 
                                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
                            >
                                🌱 Lihat Produk Kami
                            </Link>
                            <Link 
                                href={route('contact')} 
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition"
                            >
                                📞 Hubungi Kami
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
                    </div>
                </footer>
            </div>
        </>
    );
}