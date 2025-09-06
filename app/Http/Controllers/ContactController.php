<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\CompanyInfo;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display the contact page.
     */
    public function index()
    {
        $companyInfo = CompanyInfo::first();
        
        return Inertia::render('contact', [
            'companyInfo' => $companyInfo
        ]);
    }
}