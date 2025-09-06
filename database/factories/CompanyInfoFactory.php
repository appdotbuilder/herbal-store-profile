<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CompanyInfo>
 */
class CompanyInfoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'about_us' => 'Toko Herbal Nusantara adalah toko obat herbal tradisional yang telah melayani masyarakat sejak 1985. Kami menghadirkan berbagai ramuan herbal berkualitas tinggi yang diolah secara tradisional dengan resep turun temurun. Komitmen kami adalah memberikan solusi kesehatan alami yang aman dan berkhasiat untuk keluarga Indonesia.',
            'phone' => '021-12345678',
            'email' => 'info@herbalnusantara.com',
            'address' => 'Jl. Raya Herbal No. 123, Jakarta Selatan, DKI Jakarta 12345',
            'whatsapp' => '081234567890',
            'instagram' => '@herbalnusantara',
            'facebook' => 'Toko Herbal Nusantara',
            'business_hours' => 'Senin - Sabtu: 08:00 - 20:00\nMinggu: 09:00 - 17:00',
        ];
    }
}