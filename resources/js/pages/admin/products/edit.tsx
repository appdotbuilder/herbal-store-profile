import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
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
}



interface Props {
    product: Product;
    [key: string]: unknown;
}

export default function ProductsEdit({ product }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        name: product.name,
        description: product.description,
        price: product.price.toString(),
        category: product.category,
        benefits: product.benefits || '',
        ingredients: product.ingredients || '',
        usage_instructions: product.usage_instructions || '',
        image_url: product.image_url || '',
        is_active: product.is_active,
        stock: product.stock.toString(),
    });

    const categories = [
        'Jamu Tradisional',
        'Herbal Kapsul',
        'Minyak Herbal',
        'Teh Herbal',
        'Ramuan Khusus',
        'Ekstrak Herbal',
        'Madu Herbal',
        'Rempah-rempah'
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('admin.products.update', product.id));
    };

    return (
        <AppShell>
            <Head title={`Edit ${product.name} - Admin Panel`} />
            
            <div className="py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <div className="flex items-center space-x-2 mb-4">
                            <Link href={route('admin.products.index')} className="text-gray-500 hover:text-gray-700">
                                🌱 Produk
                            </Link>
                            <span className="text-gray-400">/</span>
                            <Link href={route('admin.products.show', product.id)} className="text-gray-500 hover:text-gray-700">
                                {product.name}
                            </Link>
                            <span className="text-gray-400">/</span>
                            <span className="text-green-600 font-medium">Edit</span>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900">✏️ Edit Produk</h1>
                        <p className="text-gray-600 mt-2">Perbarui informasi produk "{product.name}"</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">📝 Informasi Dasar</h2>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nama Produk *
                                    </label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        placeholder="Contoh: Jamu Kunyit Asam"
                                        required
                                    />
                                    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Kategori *
                                    </label>
                                    <select
                                        value={data.category}
                                        onChange={(e) => setData('category', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        required
                                    >
                                        <option value="">Pilih Kategori</option>
                                        {categories.map((category) => (
                                            <option key={category} value={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.category && <p className="text-red-600 text-sm mt-1">{errors.category}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Harga (Rp) *
                                    </label>
                                    <input
                                        type="number"
                                        value={data.price}
                                        onChange={(e) => setData('price', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        placeholder="25000"
                                        min="0"
                                        step="1000"
                                        required
                                    />
                                    {errors.price && <p className="text-red-600 text-sm mt-1">{errors.price}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Stok *
                                    </label>
                                    <input
                                        type="number"
                                        value={data.stock}
                                        onChange={(e) => setData('stock', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        placeholder="50"
                                        min="0"
                                        required
                                    />
                                    {errors.stock && <p className="text-red-600 text-sm mt-1">{errors.stock}</p>}
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Deskripsi Produk *
                                </label>
                                <textarea
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    placeholder="Jelaskan produk herbal Anda secara detail..."
                                    required
                                />
                                {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description}</p>}
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">💊 Detail Produk</h2>
                            
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Manfaat & Khasiat
                                    </label>
                                    <textarea
                                        value={data.benefits}
                                        onChange={(e) => setData('benefits', e.target.value)}
                                        rows={3}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        placeholder="Jelaskan manfaat dan khasiat produk ini..."
                                    />
                                    {errors.benefits && <p className="text-red-600 text-sm mt-1">{errors.benefits}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Komposisi / Bahan
                                    </label>
                                    <textarea
                                        value={data.ingredients}
                                        onChange={(e) => setData('ingredients', e.target.value)}
                                        rows={3}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        placeholder="Kunyit, Asam Jawa, Gula Merah..."
                                    />
                                    {errors.ingredients && <p className="text-red-600 text-sm mt-1">{errors.ingredients}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Cara Penggunaan
                                    </label>
                                    <textarea
                                        value={data.usage_instructions}
                                        onChange={(e) => setData('usage_instructions', e.target.value)}
                                        rows={3}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        placeholder="Minum 2-3 kali sehari setelah makan..."
                                    />
                                    {errors.usage_instructions && <p className="text-red-600 text-sm mt-1">{errors.usage_instructions}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        URL Gambar (Opsional)
                                    </label>
                                    <input
                                        type="url"
                                        value={data.image_url}
                                        onChange={(e) => setData('image_url', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        placeholder="https://example.com/image.jpg"
                                    />
                                    {errors.image_url && <p className="text-red-600 text-sm mt-1">{errors.image_url}</p>}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">⚙️ Pengaturan</h2>
                            
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="is_active"
                                    checked={data.is_active}
                                    onChange={(e) => setData('is_active', e.target.checked)}
                                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                                />
                                <label htmlFor="is_active" className="ml-2 text-sm text-gray-700">
                                    Aktifkan produk (produk akan tampil di website)
                                </label>
                            </div>
                            {errors.is_active && <p className="text-red-600 text-sm mt-1">{errors.is_active}</p>}
                        </div>

                        <div className="flex justify-end space-x-4">
                            <Link 
                                href={route('admin.products.show', product.id)}
                                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
                            >
                                ❌ Batal
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 transition"
                            >
                                {processing ? '⏳ Menyimpan...' : '💾 Simpan Perubahan'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppShell>
    );
}