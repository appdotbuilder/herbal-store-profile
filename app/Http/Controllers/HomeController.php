<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\CompanyInfo;
use App\Models\Product;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the home page.
     */
    public function index()
    {
        $companyInfo = CompanyInfo::first();
        $featuredProducts = Product::active()->latest()->limit(6)->get();
        
        return Inertia::render('welcome', [
            'companyInfo' => $companyInfo,
            'featuredProducts' => $featuredProducts
        ]);
    }
}