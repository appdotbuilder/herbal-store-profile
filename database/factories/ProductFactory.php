<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = ['Jamu Tradisional', 'Herbal Kapsul', 'Minyak Herbal', 'Teh Herbal', 'Ramuan Khusus'];
        $herbalProducts = [
            'Jamu Kunyit Asam',
            'Ekstrak Daun Sirih',
            'Minyak Kayu Putih',
            'Teh Daun Sirsak',
            'Kapsul Temulawak',
            'Ramuan Beras Kencur',
            'Madu Herbal',
            'Jamu Galian Singset',
        ];

        return [
            'name' => fake()->randomElement($herbalProducts),
            'description' => fake()->paragraph(3),
            'price' => fake()->randomFloat(2, 15000, 250000),
            'category' => fake()->randomElement($categories),
            'benefits' => fake()->paragraph(2),
            'ingredients' => fake()->words(5, true),
            'usage_instructions' => fake()->paragraph(1),
            'is_active' => fake()->boolean(90),
            'stock' => fake()->numberBetween(0, 100),
        ];
    }

    /**
     * Indicate that the product is out of stock.
     */
    public function outOfStock(): static
    {
        return $this->state(fn (array $attributes) => [
            'stock' => 0,
        ]);
    }

    /**
     * Indicate that the product is premium.
     */
    public function premium(): static
    {
        return $this->state(fn (array $attributes) => [
            'price' => fake()->randomFloat(2, 200000, 500000),
            'category' => 'Ramuan Khusus',
        ]);
    }
}