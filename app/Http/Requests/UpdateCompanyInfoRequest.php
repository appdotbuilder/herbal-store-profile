<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCompanyInfoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'about_us' => 'required|string',
            'phone' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'address' => 'required|string',
            'whatsapp' => 'nullable|string|max:20',
            'instagram' => 'nullable|string|max:255',
            'facebook' => 'nullable|string|max:255',
            'business_hours' => 'nullable|string',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'about_us.required' => 'Informasi tentang kami wajib diisi.',
            'phone.required' => 'Nomor telepon wajib diisi.',
            'email.required' => 'Email wajib diisi.',
            'email.email' => 'Format email tidak valid.',
            'address.required' => 'Alamat wajib diisi.',
        ];
    }
}