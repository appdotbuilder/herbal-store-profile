import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    benefits?: string;
    ingredients?: string;
    usage_instructions?: string;
    stock: number;
}

interface Props {
    product: Product;
    relatedProducts: Product[];
    [key: string]: unknown;
}

export default function ProductShow({ product, relatedProducts }: Props) {
    return (
        <>
            <Head title={`${product.name} - Herbal Nusantara`} />
            
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

                {/* Breadcrumb */}
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <Link href="/" className="text-gray-700 hover:text-green-600 inline-flex items-center">
                                    🏠 Beranda
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <span className="text-gray-400 mx-2">/</span>
                                    <Link href={route('products')} className="text-gray-700 hover:text-green-600">
                                        Produk
                                    </Link>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <span className="text-gray-400 mx-2">/</span>
                                    <span className="text-green-600 font-medium">{product.name}</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>

                {/* Product Detail */}
                <section className="pb-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Product Image */}
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <div className="h-96 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-6">
                                    <div className="text-9xl">🌿</div>
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                    {[1, 2, 3, 4].map((index) => (
                                        <div key={index} className="h-20 bg-gradient-to-br from-green-100 to-green-200 rounded flex items-center justify-center">
                                            <div className="text-2xl">🌿</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <div className="mb-4">
                                    <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                                        {product.category}
                                    </span>
                                    {product.stock > 0 ? (
                                        <span className="ml-2 text-sm text-green-600">✅ Stok: {product.stock}</span>
                                    ) : (
                                        <span className="ml-2 text-sm text-red-600">❌ Stok Habis</span>
                                    )}
                                </div>
                                
                                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                                
                                <div className="text-3xl font-bold text-green-600 mb-6">
                                    Rp {Number(product.price).toLocaleString('id-ID')}
                                </div>

                                <div className="prose prose-gray max-w-none mb-6">
                                    <p className="text-gray-700 leading-relaxed">{product.description}</p>
                                </div>

                                {product.benefits && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                                            💊 Manfaat & Khasiat
                                        </h3>
                                        <p className="text-gray-700 bg-green-50 p-4 rounded-lg">{product.benefits}</p>
                                    </div>
                                )}

                                {product.ingredients && (
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                                            🌱 Komposisi
                                        </h3>
                                        <p className="text-gray-700 bg-green-50 p-4 rounded-lg">{product.ingredients}</p>
                                    </div>
                                )}

                                {product.usage_instructions && (
                                    <div className="mb-8">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                                            📋 Cara Penggunaan
                                        </h3>
                                        <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">{product.usage_instructions}</p>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link 
                                        href={route('contact')} 
                                        className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-green-700 transition"
                                    >
                                        💬 Pesan Sekarang
                                    </Link>
                                    <Link 
                                        href={route('contact')} 
                                        className="flex-1 border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg text-center font-semibold hover:bg-green-600 hover:text-white transition"
                                    >
                                        📞 Konsultasi
                                    </Link>
                                </div>

                                {/* Safety Notice */}
                                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                    <div className="flex items-start">
                                        <div className="text-yellow-600 mr-2">⚠️</div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-yellow-800">Perhatian Penting</h4>
                                            <p className="text-xs text-yellow-700 mt-1">
                                                Konsultasikan dengan ahli herbal sebelum menggunakan. Hentikan penggunaan jika terjadi reaksi alergi. 
                                                Tidak disarankan untuk ibu hamil dan menyusui tanpa konsultasi dokter.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section className="pb-16">
                        <div className="max-w-6xl mx-auto px-4">
                            <h3 className="text-2xl font-bold text-green-900 mb-8 text-center">
                                🌿 Produk Sejenis
                            </h3>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {relatedProducts.map((relatedProduct) => (
                                    <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                                        <div className="h-40 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                                            <div className="text-5xl">🌿</div>
                                        </div>
                                        <div className="p-4">
                                            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
                                                {relatedProduct.category}
                                            </span>
                                            <h4 className="font-semibold text-gray-900 mb-2 text-sm">{relatedProduct.name}</h4>
                                            <p className="text-gray-600 text-xs mb-3 line-clamp-2">{relatedProduct.description}</p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-lg font-bold text-green-600">
                                                    Rp {Number(relatedProduct.price).toLocaleString('id-ID')}
                                                </span>
                                                <Link 
                                                    href={route('product.show', relatedProduct.id)}
                                                    className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700 transition"
                                                >
                                                    Detail
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Call to Action */}
                <section className="py-16 bg-green-600 text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h3 className="text-3xl font-bold mb-6">🤝 Butuh Bantuan?</h3>
                        <p className="text-xl mb-8">
                            Tim ahli kami siap membantu Anda dengan konsultasi gratis dan panduan penggunaan produk
                        </p>
                        <Link 
                            href={route('contact')} 
                            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
                        >
                            📞 Hubungi Kami Sekarang
                        </Link>
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