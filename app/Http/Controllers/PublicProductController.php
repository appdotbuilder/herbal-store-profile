<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Inertia\Inertia;

class PublicProductController extends Controller
{
    /**
     * Display a listing of the products.
     */
    public function index()
    {
        $products = Product::active()->latest()->paginate(12);
        $categories = Product::active()->distinct()->pluck('category');
        
        return Inertia::render('products/index', [
            'products' => $products,
            'categories' => $categories
        ]);
    }

    /**
     * Display the specified product.
     */
    public function show(Product $product)
    {
        if (!$product->is_active) {
            abort(404);
        }
        
        $relatedProducts = Product::active()
            ->where('category', $product->category)
            ->where('id', '!=', $product->id)
            ->limit(4)
            ->get();
        
        return Inertia::render('products/show', [
            'product' => $product,
            'relatedProducts' => $relatedProducts
        ]);
    }
}