import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    is_active: boolean;
    stock: number;
    created_at: string;
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
    [key: string]: unknown;
}

export default function ProductsIndex({ products }: Props) {
    const handleDelete = (product: Product) => {
        if (confirm(`Apakah Anda yakin ingin menghapus produk "${product.name}"?`)) {
            router.delete(route('admin.products.destroy', product.id));
        }
    };

    return (
        <AppShell>
            <Head title="Kelola Produk - Admin Panel" />
            
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">🌱 Kelola Produk</h1>
                            <p className="text-gray-600 mt-2">Kelola daftar produk herbal Anda</p>
                        </div>
                        <Link 
                            href={route('admin.products.create')}
                            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                        >
                            ➕ Tambah Produk
                        </Link>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex items-center">
                                <div className="text-3xl mr-3">📦</div>
                                <div>
                                    <p className="text-sm text-gray-600">Total Produk</p>
                                    <p className="text-2xl font-bold text-gray-900">{products.total}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex items-center">
                                <div className="text-3xl mr-3">✅</div>
                                <div>
                                    <p className="text-sm text-gray-600">Produk Aktif</p>
                                    <p className="text-2xl font-bold text-green-600">
                                        {products.data.filter(p => p.is_active).length}
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex items-center">
                                <div className="text-3xl mr-3">❌</div>
                                <div>
                                    <p className="text-sm text-gray-600">Produk Non-Aktif</p>
                                    <p className="text-2xl font-bold text-red-600">
                                        {products.data.filter(p => !p.is_active).length}
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex items-center">
                                <div className="text-3xl mr-3">📉</div>
                                <div>
                                    <p className="text-sm text-gray-600">Stok Habis</p>
                                    <p className="text-2xl font-bold text-orange-600">
                                        {products.data.filter(p => p.stock === 0).length}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products Table */}
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Produk
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Kategori
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Harga
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Stok
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {products.data.map((product) => (
                                        <tr key={product.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-12 w-12">
                                                        <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                                                            <span className="text-2xl">🌿</span>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {product.name}
                                                        </div>
                                                        <div className="text-sm text-gray-500 line-clamp-1">
                                                            {product.description}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                                                    {product.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                Rp {Number(product.price).toLocaleString('id-ID')}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                <span className={`font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                    {product.stock}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                    product.is_active 
                                                        ? 'bg-green-100 text-green-800' 
                                                        : 'bg-red-100 text-red-800'
                                                }`}>
                                                    {product.is_active ? '✅ Aktif' : '❌ Nonaktif'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                                <Link 
                                                    href={route('admin.products.show', product.id)}
                                                    className="text-blue-600 hover:text-blue-900"
                                                >
                                                    👁️ Lihat
                                                </Link>
                                                <Link 
                                                    href={route('admin.products.edit', product.id)}
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    ✏️ Edit
                                                </Link>
                                                <button 
                                                    onClick={() => handleDelete(product)}
                                                    className="text-red-600 hover:text-red-900"
                                                >
                                                    🗑️ Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {products.last_page > 1 && (
                            <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-700">
                                        Menampilkan {products.data.length} dari {products.total} produk
                                    </div>
                                    <div className="flex space-x-1">
                                        {products.links.map((link, index) => (
                                            link.url ? (
                                                <Link
                                                    key={index}
                                                    href={link.url}
                                                    className={`px-3 py-1 rounded text-sm ${
                                                        link.active
                                                            ? 'bg-green-600 text-white'
                                                            : 'bg-white text-gray-700 border hover:bg-gray-50'
                                                    }`}
                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                />
                                            ) : (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 rounded text-sm bg-gray-100 text-gray-400"
                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                />
                                            )
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {products.data.length === 0 && (
                        <div className="bg-white rounded-lg shadow p-12 text-center">
                            <div className="text-6xl mb-4">📦</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Belum Ada Produk</h3>
                            <p className="text-gray-600 mb-6">Mulai tambahkan produk herbal pertama Anda</p>
                            <Link 
                                href={route('admin.products.create')}
                                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                            >
                                ➕ Tambah Produk Pertama
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </AppShell>
    );
}