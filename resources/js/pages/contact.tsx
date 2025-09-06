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

export default function Contact({ companyInfo }: Props) {
    return (
        <>
            <Head title="Kontak Kami - Herbal Nusantara" />
            
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
                                <Link href={route('about')} className="text-green-800 hover:text-green-600 font-medium">
                                    📖 Tentang Kami
                                </Link>
                                <Link href={route('products')} className="text-green-800 hover:text-green-600 font-medium">
                                    🌱 Produk
                                </Link>
                                <Link href={route('contact')} className="text-green-800 hover:text-green-600 font-medium border-b-2 border-green-600">
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
                            📞 Hubungi Kami
                        </h2>
                        <p className="text-xl text-green-700 mb-8">
                            Kami siap membantu Anda dengan konsultasi gratis dan informasi produk herbal terbaik
                        </p>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="pb-16">
                    <div className="max-w-6xl mx-auto px-4">
                        {companyInfo ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {/* Address */}
                                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                    <div className="text-4xl mb-4">📍</div>
                                    <h3 className="text-xl font-bold text-green-800 mb-3">Alamat Toko</h3>
                                    <p className="text-gray-700">{companyInfo.address}</p>
                                </div>

                                {/* Phone & Email */}
                                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                    <div className="text-4xl mb-4">📞</div>
                                    <h3 className="text-xl font-bold text-green-800 mb-3">Hubungi Langsung</h3>
                                    <div className="space-y-2">
                                        <p className="text-gray-700">
                                            <strong>Telepon:</strong><br />
                                            <a href={`tel:${companyInfo.phone}`} className="text-green-600 hover:text-green-700">
                                                {companyInfo.phone}
                                            </a>
                                        </p>
                                        <p className="text-gray-700">
                                            <strong>Email:</strong><br />
                                            <a href={`mailto:${companyInfo.email}`} className="text-green-600 hover:text-green-700">
                                                {companyInfo.email}
                                            </a>
                                        </p>
                                        {companyInfo.whatsapp && (
                                            <p className="text-gray-700">
                                                <strong>WhatsApp:</strong><br />
                                                <a 
                                                    href={`https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`} 
                                                    className="text-green-600 hover:text-green-700"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {companyInfo.whatsapp}
                                                </a>
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Business Hours */}
                                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                    <div className="text-4xl mb-4">🕒</div>
                                    <h3 className="text-xl font-bold text-green-800 mb-3">Jam Operasional</h3>
                                    {companyInfo.business_hours ? (
                                        <div className="text-gray-700 whitespace-pre-line">
                                            {companyInfo.business_hours}
                                        </div>
                                    ) : (
                                        <div className="text-gray-700">
                                            <p>Senin - Sabtu: 08:00 - 20:00</p>
                                            <p>Minggu: 09:00 - 17:00</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-3 gap-8 mb-12">
                                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                    <div className="text-4xl mb-4">📍</div>
                                    <h3 className="text-xl font-bold text-green-800 mb-3">Alamat Toko</h3>
                                    <p className="text-gray-700">Jl. Raya Herbal No. 123, Jakarta Selatan, DKI Jakarta 12345</p>
                                </div>

                                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                    <div className="text-4xl mb-4">📞</div>
                                    <h3 className="text-xl font-bold text-green-800 mb-3">Hubungi Langsung</h3>
                                    <p className="text-gray-700">
                                        <strong>Telepon:</strong> 021-12345678<br />
                                        <strong>Email:</strong> info@herbalnusantara.com<br />
                                        <strong>WhatsApp:</strong> 081234567890
                                    </p>
                                </div>

                                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                    <div className="text-4xl mb-4">🕒</div>
                                    <h3 className="text-xl font-bold text-green-800 mb-3">Jam Operasional</h3>
                                    <p className="text-gray-700">
                                        Senin - Sabtu: 08:00 - 20:00<br />
                                        Minggu: 09:00 - 17:00
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Social Media */}
                        {companyInfo && (companyInfo.instagram || companyInfo.facebook) && (
                            <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-12">
                                <h3 className="text-2xl font-bold text-green-800 mb-6">🌐 Media Sosial</h3>
                                <p className="text-gray-700 mb-6">Ikuti kami untuk tips kesehatan dan info produk terbaru</p>
                                <div className="flex justify-center space-x-6">
                                    {companyInfo.instagram && (
                                        <a 
                                            href={`https://instagram.com/${companyInfo.instagram.replace('@', '')}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
                                        >
                                            📷 Instagram
                                        </a>
                                    )}
                                    {companyInfo.facebook && (
                                        <a 
                                            href={`https://facebook.com/${companyInfo.facebook}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                                        >
                                            📘 Facebook
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Quick Contact Actions */}
                        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                            <h3 className="text-2xl font-bold text-green-800 mb-6">💬 Konsultasi Cepat</h3>
                            <p className="text-gray-700 mb-8">
                                Pilih cara yang paling nyaman untuk berkonsultasi dengan ahli herbal kami
                            </p>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <a 
                                    href={companyInfo ? `tel:${companyInfo.phone}` : 'tel:021-12345678'}
                                    className="bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700 transition"
                                >
                                    <div className="text-2xl mb-2">📞</div>
                                    <div className="font-semibold">Telepon</div>
                                    <div className="text-sm">Langsung bicara</div>
                                </a>
                                
                                <a 
                                    href={`https://wa.me/${companyInfo ? companyInfo.whatsapp?.replace(/\D/g, '') || '081234567890' : '081234567890'}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500 text-white p-4 rounded-lg text-center hover:bg-green-600 transition"
                                >
                                    <div className="text-2xl mb-2">💬</div>
                                    <div className="font-semibold">WhatsApp</div>
                                    <div className="text-sm">Chat langsung</div>
                                </a>
                                
                                <a 
                                    href={companyInfo ? `mailto:${companyInfo.email}` : 'mailto:info@herbalnusantara.com'}
                                    className="bg-red-600 text-white p-4 rounded-lg text-center hover:bg-red-700 transition"
                                >
                                    <div className="text-2xl mb-2">📧</div>
                                    <div className="font-semibold">Email</div>
                                    <div className="text-sm">Kirim pertanyaan</div>
                                </a>
                                
                                <div className="bg-yellow-600 text-white p-4 rounded-lg text-center">
                                    <div className="text-2xl mb-2">🏪</div>
                                    <div className="font-semibold">Kunjungi Toko</div>
                                    <div className="text-sm">Konsultasi langsung</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <h3 className="text-3xl font-bold text-center text-green-900 mb-12">
                            ❓ Pertanyaan Umum
                        </h3>
                        
                        <div className="space-y-6">
                            <div className="bg-green-50 rounded-lg p-6">
                                <h4 className="text-lg font-semibold text-green-800 mb-2">
                                    Apakah produk herbal aman untuk dikonsumsi?
                                </h4>
                                <p className="text-gray-700">
                                    Ya, semua produk kami terbuat dari bahan alami berkualitas tinggi dan telah melalui proses yang higienis. 
                                    Namun, kami selalu menyarankan konsultasi terlebih dahulu, terutama untuk ibu hamil, menyusui, atau yang memiliki kondisi medis khusus.
                                </p>
                            </div>
                            
                            <div className="bg-green-50 rounded-lg p-6">
                                <h4 className="text-lg font-semibold text-green-800 mb-2">
                                    Bagaimana cara pemesanan produk?
                                </h4>
                                <p className="text-gray-700">
                                    Anda dapat menghubungi kami melalui telepon, WhatsApp, atau datang langsung ke toko. 
                                    Tim kami akan membantu Anda memilih produk yang sesuai dengan kebutuhan kesehatan Anda.
                                </p>
                            </div>
                            
                            <div className="bg-green-50 rounded-lg p-6">
                                <h4 className="text-lg font-semibold text-green-800 mb-2">
                                    Apakah tersedia layanan konsultasi gratis?
                                </h4>
                                <p className="text-gray-700">
                                    Ya, kami menyediakan konsultasi gratis dengan ahli herbal berpengalaman. 
                                    Konsultasi dapat dilakukan via telepon, WhatsApp, atau langsung datang ke toko.
                                </p>
                            </div>
                            
                            <div className="bg-green-50 rounded-lg p-6">
                                <h4 className="text-lg font-semibold text-green-800 mb-2">
                                    Berapa lama efek produk herbal dapat dirasakan?
                                </h4>
                                <p className="text-gray-700">
                                    Efek produk herbal bervariasi tergantung jenis produk, kondisi kesehatan, dan konsistensi penggunaan. 
                                    Umumnya efek dapat dirasakan dalam 1-4 minggu pemakaian teratur. Tim ahli kami dapat memberikan panduan lebih spesifik.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-green-600 text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h3 className="text-3xl font-bold mb-6">🤝 Siap Memulai Hidup Sehat?</h3>
                        <p className="text-xl mb-8">
                            Jangan ragu untuk menghubungi kami. Tim ahli herbal kami siap membantu Anda menemukan solusi kesehatan alami terbaik.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href={`https://wa.me/${companyInfo ? companyInfo.whatsapp?.replace(/\D/g, '') || '081234567890' : '081234567890'}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
                            >
                                💬 Chat WhatsApp
                            </a>
                            <a 
                                href={companyInfo ? `tel:${companyInfo.phone}` : 'tel:021-12345678'}
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition"
                            >
                                📞 Telepon Sekarang
                            </a>
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