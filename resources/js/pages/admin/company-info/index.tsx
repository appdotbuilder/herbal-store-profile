import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';

interface CompanyInfo {
    id: number;
    about_us: string;
    phone: string;
    email: string;
    address: string;
    whatsapp?: string;
    instagram?: string;
    facebook?: string;
    business_hours?: string;
    created_at: string;
    updated_at: string;
}

interface Props {
    companyInfo?: CompanyInfo;
    [key: string]: unknown;
}

export default function CompanyInfoIndex({ companyInfo }: Props) {
    return (
        <AppShell>
            <Head title="Informasi Perusahaan - Admin Panel" />
            
            <div className="py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">🏪 Informasi Perusahaan</h1>
                            <p className="text-gray-600 mt-2">Kelola informasi tentang toko dan kontak</p>
                        </div>
                        <Link 
                            href={route('admin.company-info.edit')}
                            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                        >
                            ✏️ Edit Informasi
                        </Link>
                    </div>

                    {companyInfo ? (
                        <div className="space-y-6">
                            {/* About Us Section */}
                            <div className="bg-white rounded-lg shadow p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-semibold text-gray-900">📖 Tentang Kami</h2>
                                    <Link 
                                        href={route('about')}
                                        className="text-blue-600 hover:text-blue-700 text-sm"
                                        target="_blank"
                                    >
                                        👁️ Lihat di Website
                                    </Link>
                                </div>
                                <div className="prose prose-gray max-w-none">
                                    <p className="text-gray-700 leading-relaxed">{companyInfo.about_us}</p>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="bg-white rounded-lg shadow p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-semibold text-gray-900">📞 Informasi Kontak</h2>
                                    <Link 
                                        href={route('contact')}
                                        className="text-blue-600 hover:text-blue-700 text-sm"
                                        target="_blank"
                                    >
                                        👁️ Lihat di Website
                                    </Link>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-3">📍 Alamat</h3>
                                        <p className="text-gray-700">{companyInfo.address}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-3">☎️ Kontak</h3>
                                        <div className="space-y-2 text-gray-700">
                                            <p><strong>Telepon:</strong> {companyInfo.phone}</p>
                                            <p><strong>Email:</strong> {companyInfo.email}</p>
                                            {companyInfo.whatsapp && (
                                                <p><strong>WhatsApp:</strong> {companyInfo.whatsapp}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media & Business Hours */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Social Media */}
                                <div className="bg-white rounded-lg shadow p-6">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">🌐 Media Sosial</h2>
                                    {(companyInfo.instagram || companyInfo.facebook) ? (
                                        <div className="space-y-2 text-gray-700">
                                            {companyInfo.instagram && (
                                                <p><strong>📷 Instagram:</strong> {companyInfo.instagram}</p>
                                            )}
                                            {companyInfo.facebook && (
                                                <p><strong>📘 Facebook:</strong> {companyInfo.facebook}</p>
                                            )}
                                        </div>
                                    ) : (
                                        <p className="text-gray-500 italic">Belum ada informasi media sosial</p>
                                    )}
                                </div>

                                {/* Business Hours */}
                                <div className="bg-white rounded-lg shadow p-6">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">🕒 Jam Operasional</h2>
                                    {companyInfo.business_hours ? (
                                        <div className="text-gray-700 whitespace-pre-line">
                                            {companyInfo.business_hours}
                                        </div>
                                    ) : (
                                        <p className="text-gray-500 italic">Belum ada informasi jam operasional</p>
                                    )}
                                </div>
                            </div>

                            {/* Metadata */}
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">ℹ️ Informasi Sistem</h2>
                                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                                    <div>
                                        <strong>Dibuat:</strong> {new Date(companyInfo.created_at).toLocaleDateString('id-ID', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </div>
                                    <div>
                                        <strong>Diperbarui:</strong> {new Date(companyInfo.updated_at).toLocaleDateString('id-ID', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="bg-white rounded-lg shadow p-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">⚡ Tindakan Cepat</h2>
                                <div className="flex flex-wrap gap-4">
                                    <Link 
                                        href={route('admin.company-info.edit')}
                                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                                    >
                                        ✏️ Edit Informasi
                                    </Link>
                                    <Link 
                                        href={route('about')}
                                        className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
                                        target="_blank"
                                    >
                                        📖 Lihat Halaman Tentang Kami
                                    </Link>
                                    <Link 
                                        href={route('contact')}
                                        className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition"
                                        target="_blank"
                                    >
                                        📞 Lihat Halaman Kontak
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-lg shadow p-12 text-center">
                            <div className="text-6xl mb-4">🏪</div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Informasi Perusahaan Belum Diatur</h2>
                            <p className="text-gray-600 mb-8">
                                Tambahkan informasi tentang toko Anda, alamat, kontak, dan jam operasional 
                                untuk ditampilkan di website.
                            </p>
                            <Link 
                                href={route('admin.company-info.edit')}
                                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                            >
                                ➕ Tambah Informasi Perusahaan
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </AppShell>
    );
}