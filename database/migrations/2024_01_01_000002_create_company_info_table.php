<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('company_info', function (Blueprint $table) {
            $table->id();
            $table->text('about_us');
            $table->string('phone');
            $table->string('email');
            $table->text('address');
            $table->string('whatsapp')->nullable();
            $table->string('instagram')->nullable();
            $table->string('facebook')->nullable();
            $table->text('business_hours')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('company_info');
    }
};