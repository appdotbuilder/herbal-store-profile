<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateCompanyInfoRequest;
use App\Models\CompanyInfo;
use Inertia\Inertia;

class CompanyInfoController extends Controller
{
    /**
     * Display the company information.
     */
    public function index()
    {
        $companyInfo = CompanyInfo::first();
        
        return Inertia::render('admin/company-info/index', [
            'companyInfo' => $companyInfo
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {
        $companyInfo = CompanyInfo::first();
        
        return Inertia::render('admin/company-info/edit', [
            'companyInfo' => $companyInfo
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCompanyInfoRequest $request)
    {
        $companyInfo = CompanyInfo::first();
        
        if ($companyInfo) {
            $companyInfo->update($request->validated());
        } else {
            CompanyInfo::create($request->validated());
        }

        return redirect()->route('admin.company-info.index')
            ->with('success', 'Informasi perusahaan berhasil diperbarui.');
    }
}