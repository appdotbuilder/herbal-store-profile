import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    benefits?: string;
    stock: number;
}

interface Props {
    products: {
        data: Product[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
        links: Array<{
            url: string | null;
            label: string;
            active: boolean;
        }>;
    };
    categories: string[];
    [key: string]: unknown;
}

export default function ProductsIndex({ products, categories }: Props) {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const filteredProducts = selectedCategory === 'all' 
        ? products.data 
        : products.data.filter(product => product.category === selectedCategory);

    return (
        <>
            <Head title="Daftar Produk - Herbal Nusantara" />
            
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
                                <Link href={route('products')} className="text-green-800 hover:text-green-600 font-medium border-b-2 border-green-600">
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
                            🌱 Produk Herbal Berkualitas
                        </h2>
                        <p className="text-xl text-green-700 mb-8">
                            Temukan berbagai ramuan herbal tradisional yang telah terbukti khasiatnya untuk kesehatan keluarga
                        </p>
                        
                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                                    selectedCategory === 'all'
                                        ? 'bg-green-600 text-white'
                                        : 'bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white'
                                }`}
                            >
                                🌿 Semua Kategori ({products.total})
                            </button>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                                        selectedCategory === category
                                            ? 'bg-green-600 text-white'
                                            : 'bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Products Grid */}
                <section className="pb-16">
                    <div className="max-w-6xl mx-auto px-4">
                        {filteredProducts.length > 0 ? (
                            <>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {filteredProducts.map((product) => (
                                        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                                            <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                                                <div className="text-6xl">🌿</div>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                                        {product.category}
                                                    </span>
                                                    {product.stock > 0 ? (
                                                        <span className="text-xs text-green-600">✅ Tersedia</span>
                                                    ) : (
                                                        <span className="text-xs text-red-600">❌ Habis</span>
                                                    )}
                                                </div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                                                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                                                {product.benefits && (
                                                    <p className="text-green-700 text-xs mb-3 line-clamp-1">
                                                        💊 {product.benefits}
                                                    </p>
                                                )}
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
                                
                                {/* Pagination (if needed) */}
                                {products.last_page > 1 && (
                                    <div className="mt-12 flex justify-center">
                                        <div className="flex space-x-2">
                                            {products.links.map((link, index) => (
                                                link.url ? (
                                                    <Link
                                                        key={index}
                                                        href={link.url}
                                                        className={`px-4 py-2 rounded ${
                                                            link.active
                                                                ? 'bg-green-600 text-white'
                                                                : 'bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white'
                                                        } transition`}
                                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                                    />
                                                ) : (
                                                    <span
                                                        key={index}
                                                        className="px-4 py-2 rounded bg-gray-100 text-gray-400"
                                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                                    />
                                                )
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">🔍</div>
                                <h3 className="text-2xl font-bold text-gray-700 mb-4">Produk Tidak Ditemukan</h3>
                                <p className="text-gray-600 mb-6">
                                    Tidak ada produk dalam kategori "{selectedCategory}". 
                                    Coba pilih kategori lain atau lihat semua produk.
                                </p>
                                <button
                                    onClick={() => setSelectedCategory('all')}
                                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                                >
                                    🌿 Lihat Semua Produk
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-green-600 text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h3 className="text-3xl font-bold mb-6">💬 Butuh Konsultasi?</h3>
                        <p className="text-xl mb-8">
                            Tim ahli kami siap membantu Anda memilih produk herbal yang tepat sesuai kebutuhan kesehatan
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