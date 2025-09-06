<?php

namespace Database\Seeders;

use App\Models\CompanyInfo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompanyInfoSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        CompanyInfo::factory()->create();
    }
}