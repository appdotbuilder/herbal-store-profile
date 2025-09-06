import { Head, Link } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';

export default function Dashboard() {
    return (
        <AppShell>
            <Head title="Admin Dashboard - Herbal Nusantara" />
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">🌿 Admin Dashboard</h1>
                        <p className="text-gray-600 mt-2">Selamat datang di panel admin Toko Herbal Nusantara</p>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <Link 
                            href={route('admin.products.index')}
                            className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 text-center border-l-4 border-green-500"
                        >
                            <div className="text-4xl mb-3">🌱</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Kelola Produk</h3>
                            <p className="text-gray-600 text-sm">Tambah, edit, atau hapus produk herbal</p>
                        </Link>

                        <Link 
                            href={route('admin.company-info.index')}
                            className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 text-center border-l-4 border-blue-500"
                        >
                            <div className="text-4xl mb-3">🏪</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Info Perusahaan</h3>
                            <p className="text-gray-600 text-sm">Update informasi tentang toko dan kontak</p>
                        </Link>

                        <Link 
                            href={route('home')}
                            target="_blank"
                            className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 text-center border-l-4 border-purple-500"
                        >
                            <div className="text-4xl mb-3">🌐</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Lihat Website</h3>
                            <p className="text-gray-600 text-sm">Buka website publik di tab baru</p>
                        </Link>
                    </div>

                    {/* Stats Overview */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">📊 Ringkasan</h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-3xl text-green-600 font-bold mb-2">--</div>
                                <p className="text-gray-600">Total Produk</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl text-blue-600 font-bold mb-2">--</div>
                                <p className="text-gray-600">Produk Aktif</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl text-orange-600 font-bold mb-2">--</div>
                                <p className="text-gray-600">Stok Rendah</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl text-purple-600 font-bold mb-2">--</div>
                                <p className="text-gray-600">Kategori</p>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <Link 
                                href={route('admin.products.index')}
                                className="text-green-600 hover:text-green-700 font-medium"
                            >
                                📊 Lihat Detail Statistik
                            </Link>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="mt-8 bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">📈 Aktivitas Terakhir</h2>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 text-sm text-gray-600">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>Sistem siap digunakan</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm text-gray-600">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span>Panel admin berhasil dimuat</span>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-gray-500 text-sm">
                                Mulai kelola produk dan informasi toko Anda dengan menu di atas
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}