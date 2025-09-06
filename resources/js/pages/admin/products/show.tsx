import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    benefits?: string;
    ingredients?: string;
    usage_instructions?: string;
    image_url?: string;
    is_active: boolean;
    stock: number;
    created_at: string;
    updated_at: string;
}

interface Props {
    product: Product;
    [key: string]: unknown;
}

export default function ProductsShow({ product }: Props) {
    const handleDelete = () => {
        if (confirm(`Apakah Anda yakin ingin menghapus produk "${product.name}"?`)) {
            router.delete(route('admin.products.destroy', product.id));
        }
    };

    return (
        <AppShell>
            <Head title={`${product.name} - Admin Panel`} />
            
            <div className="py-6">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <div className="flex items-center space-x-2 mb-4">
                            <Link href={route('admin.products.index')} className="text-gray-500 hover:text-gray-700">
                                🌱 Produk
                            </Link>
                            <span className="text-gray-400">/</span>
                            <span className="text-green-600 font-medium">{product.name}</span>
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                                <div className="flex items-center space-x-4 mt-2">
                                    <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                                        product.is_active 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-red-100 text-red-800'
                                    }`}>
                                        {product.is_active ? '✅ Aktif' : '❌ Nonaktif'}
                                    </span>
                                    <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-800">
                                        {product.category}
                                    </span>
                                    <span className={`text-sm font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        Stok: {product.stock}
                                    </span>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                <Link 
                                    href={route('admin.products.edit', product.id)}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                                >
                                    ✏️ Edit
                                </Link>
                                <button
                                    onClick={handleDelete}
                                    className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition"
                                >
                                    🗑️ Hapus
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Product Image */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">📸 Gambar Produk</h2>
                            <div className="h-80 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4">
                                {product.image_url ? (
                                    <img 
                                        src={product.image_url} 
                                        alt={product.name}
                                        className="max-h-full max-w-full object-contain rounded-lg"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            const next = e.currentTarget.nextElementSibling as HTMLElement;
                                            if (next) {
                                                next.style.display = 'flex';
                                            }
                                        }}
                                    />
                                ) : null}
                                <div className="text-8xl">🌿</div>
                            </div>
                            {product.image_url && (
                                <p className="text-sm text-gray-600 break-all">
                                    <strong>URL:</strong> {product.image_url}
                                </p>
                            )}
                        </div>

                        {/* Basic Info */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">📝 Informasi Dasar</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Harga</label>
                                    <p className="text-2xl font-bold text-green-600">
                                        Rp {Number(product.price).toLocaleString('id-ID')}
                                    </p>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Deskripsi</label>
                                    <p className="text-gray-700 leading-relaxed">{product.description}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600 mb-1">Dibuat</label>
                                        <p className="text-sm text-gray-700">
                                            {new Date(product.created_at).toLocaleDateString('id-ID', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600 mb-1">Diperbarui</label>
                                        <p className="text-sm text-gray-700">
                                            {new Date(product.updated_at).toLocaleDateString('id-ID', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Details */}
                    <div className="mt-8 space-y-6">
                        {product.benefits && (
                            <div className="bg-white rounded-lg shadow p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">💊 Manfaat & Khasiat</h2>
                                <p className="text-gray-700 leading-relaxed">{product.benefits}</p>
                            </div>
                        )}

                        {product.ingredients && (
                            <div className="bg-white rounded-lg shadow p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">🌱 Komposisi</h2>
                                <p className="text-gray-700 leading-relaxed">{product.ingredients}</p>
                            </div>
                        )}

                        {product.usage_instructions && (
                            <div className="bg-white rounded-lg shadow p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">📋 Cara Penggunaan</h2>
                                <p className="text-gray-700 leading-relaxed">{product.usage_instructions}</p>
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 bg-gray-50 rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">⚡ Tindakan Cepat</h2>
                        <div className="flex flex-wrap gap-4">
                            <Link 
                                href={route('admin.products.edit', product.id)}
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                            >
                                ✏️ Edit Produk
                            </Link>
                            <Link 
                                href={route('product.show', product.id)}
                                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
                                target="_blank"
                            >
                                👁️ Lihat di Website
                            </Link>
                            <Link 
                                href={route('admin.products.create')}
                                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition"
                            >
                                ➕ Tambah Produk Baru
                            </Link>
                            <button
                                onClick={handleDelete}
                                className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition"
                            >
                                🗑️ Hapus Produk
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}