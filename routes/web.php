<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\CompanyInfoController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PublicProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Public routes
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/tentang-kami', [AboutController::class, 'index'])->name('about');
Route::get('/produk', [PublicProductController::class, 'index'])->name('products');
Route::get('/produk/{product}', [PublicProductController::class, 'show'])->name('product.show');
Route::get('/kontak', [ContactController::class, 'index'])->name('contact');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Admin routes
    Route::prefix('admin')->name('admin.')->group(function () {
        Route::resource('products', ProductController::class);
        Route::controller(CompanyInfoController::class)->group(function () {
            Route::get('/company-info', 'index')->name('company-info.index');
            Route::get('/company-info/edit', 'edit')->name('company-info.edit');
            Route::patch('/company-info', 'update')->name('company-info.update');
        });
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
