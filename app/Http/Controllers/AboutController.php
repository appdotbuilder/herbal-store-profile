<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\CompanyInfo;
use Inertia\Inertia;

class AboutController extends Controller
{
    /**
     * Display the about page.
     */
    public function index()
    {
        $companyInfo = CompanyInfo::first();
        
        return Inertia::render('about', [
            'companyInfo' => $companyInfo
        ]);
    }
}