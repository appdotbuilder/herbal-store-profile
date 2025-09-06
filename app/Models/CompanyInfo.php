<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\CompanyInfo
 *
 * @property int $id
 * @property string $about_us
 * @property string $phone
 * @property string $email
 * @property string $address
 * @property string|null $whatsapp
 * @property string|null $instagram
 * @property string|null $facebook
 * @property string|null $business_hours
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo query()
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo whereAboutUs($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo whereWhatsapp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo whereInstagram($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo whereFacebook($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo whereBusinessHours($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo whereId($value)
 * @method static \Database\Factories\CompanyInfoFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class CompanyInfo extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'company_info';

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'about_us',
        'phone',
        'email',
        'address',
        'whatsapp',
        'instagram',
        'facebook',
        'business_hours',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}