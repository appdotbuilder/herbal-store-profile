<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@herbalnusantara.com',
        ]);

        $this->call([
            CompanyInfoSeeder::class,
        ]);

        // Create sample products
        \App\Models\Product::factory(15)->create();
    }
}
