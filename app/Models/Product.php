<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Product
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string $price
 * @property string $category
 * @property string|null $benefits
 * @property string|null $ingredients
 * @property string|null $usage_instructions
 * @property string|null $image_url
 * @property bool $is_active
 * @property int $stock
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Product newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Product newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Product query()
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereBenefits($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereIngredients($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereUsageInstructions($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereImageUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereStock($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product active()
 * @method static \Database\Factories\ProductFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'description',
        'price',
        'category',
        'benefits',
        'ingredients',
        'usage_instructions',
        'image_url',
        'is_active',
        'stock',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'price' => 'decimal:2',
        'is_active' => 'boolean',
        'stock' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include active products.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Get the formatted price.
     *
     * @return string
     */
    public function getFormattedPriceAttribute()
    {
        return 'Rp ' . number_format((float)$this->price, 0, ',', '.');
    }
}