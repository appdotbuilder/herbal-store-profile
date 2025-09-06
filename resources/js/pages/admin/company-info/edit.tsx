import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';

interface CompanyInfo {
    id?: number;
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

export default function CompanyInfoEdit({ companyInfo }: Props) {
    const { data, setData, patch, processing, errors } = useForm({
        about_us: companyInfo?.about_us || '',
        phone: companyInfo?.phone || '',
        email: companyInfo?.email || '',
        address: companyInfo?.address || '',
        whatsapp: companyInfo?.whatsapp || '',
        instagram: companyInfo?.instagram || '',
        facebook: companyInfo?.facebook || '',
        business_hours: companyInfo?.business_hours || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(route('admin.company-info.update'));
    };

    return (
        <AppShell>
            <Head title="Edit Informasi Perusahaan - Admin Panel" />
            
            <div className="py-6">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <div className="flex items-center space-x-2 mb-4">
                            <Link href={route('admin.company-info.index')} className="text-gray-500 hover:text-gray-700">
                                🏪 Informasi Perusahaan
                            </Link>
                            <span className="text-gray-400">/</span>
                            <span className="text-green-600 font-medium">Edit</span>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900">✏️ Edit Informasi Perusahaan</h1>
                        <p className="text-gray-600 mt-2">Perbarui informasi toko yang akan ditampilkan di website</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* About Us Section */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">📖 Tentang Kami</h2>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Cerita Tentang Toko Anda *
                                </label>
                                <textarea
                                    value={data.about_us}
                                    onChange={(e) => setData('about_us', e.target.value)}
                                    rows={6}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    placeholder="Ceritakan sejarah toko, visi misi, dan komitmen Anda dalam menyediakan produk herbal berkualitas..."
                                    required
                                />
                                <p className="text-sm text-gray-500 mt-1">
                                    Informasi ini akan ditampilkan di halaman "Tentang Kami"
                                </p>
                                {errors.about_us && <p className="text-red-600 text-sm mt-1">{errors.about_us}</p>}
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">📞 Informasi Kontak</h2>
                            
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Alamat Toko *
                                    </label>
                                    <textarea
                                        value={data.address}
                                        onChange={(e) => setData('address', e.target.value)}
                                        rows={3}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        placeholder="Jl. Raya Herbal No. 123, Kelurahan, Kecamatan, Kota, Provinsi, Kode Pos"
                                        required
                                    />
                                    {errors.address && <p className="text-red-600 text-sm mt-1">{errors.address}</p>}
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Nomor Telepon *
                                        </label>
                                        <input
                                            type="tel"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                            placeholder="021-12345678"
                                            required
                                        />
                                        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                            placeholder="info@herbalnusantara.com"
                                            required
                                        />
                                        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        WhatsApp (Opsional)
                                    </label>
                                    <input
                                        type="tel"
                                        value={data.whatsapp}
                                        onChange={(e) => setData('whatsapp', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        placeholder="081234567890"
                                    />
                                    <p className="text-sm text-gray-500 mt-1">
                                        Untuk kemudahan konsultasi pelanggan
                                    </p>
                                    {errors.whatsapp && <p className="text-red-600 text-sm mt-1">{errors.whatsapp}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">🌐 Media Sosial</h2>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Instagram (Opsional)
                                    </label>
                                    <input
                                        type="text"
                                        value={data.instagram}
                                        onChange={(e) => setData('instagram', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        placeholder="@herbalnusantara"
                                    />
                                    <p className="text-sm text-gray-500 mt-1">
                                        Username Instagram dengan atau tanpa @
                                    </p>
                                    {errors.instagram && <p className="text-red-600 text-sm mt-1">{errors.instagram}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Facebook (Opsional)
                                    </label>
                                    <input
                                        type="text"
                                        value={data.facebook}
                                        onChange={(e) => setData('facebook', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        placeholder="Toko Herbal Nusantara"
                                    />
                                    <p className="text-sm text-gray-500 mt-1">
                                        Nama halaman Facebook
                                    </p>
                                    {errors.facebook && <p className="text-red-600 text-sm mt-1">{errors.facebook}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">🕒 Jam Operasional</h2>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Jam Buka Toko (Opsional)
                                </label>
                                <textarea
                                    value={data.business_hours}
                                    onChange={(e) => setData('business_hours', e.target.value)}
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    placeholder="Senin - Sabtu: 08:00 - 20:00&#10;Minggu: 09:00 - 17:00&#10;&#10;Tutup pada hari libur nasional"
                                />
                                <p className="text-sm text-gray-500 mt-1">
                                    Informasi jam buka akan ditampilkan di halaman kontak
                                </p>
                                {errors.business_hours && <p className="text-red-600 text-sm mt-1">{errors.business_hours}</p>}
                            </div>
                        </div>

                        {/* Preview Notice */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <div className="flex items-start">
                                <div className="text-blue-600 mr-3">💡</div>
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Tips Pengisian</h3>
                                    <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
                                        <li>Ceritakan sejarah dan visi misi toko dengan menarik</li>
                                        <li>Pastikan informasi kontak selalu update dan mudah dihubungi</li>
                                        <li>Media sosial membantu membangun kepercayaan pelanggan</li>
                                        <li>Jam operasional yang jelas memudahkan pelanggan berkunjung</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end space-x-4">
                            <Link 
                                href={route('admin.company-info.index')}
                                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
                            >
                                ❌ Batal
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 transition"
                            >
                                {processing ? '⏳ Menyimpan...' : '💾 Simpan Informasi'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppShell>
    );
}