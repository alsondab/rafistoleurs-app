<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rafistoleur extends Model
{
    use HasFactory;

    // Assure-toi que ces champs sont remplissables
    protected $fillable = [
        'user_id',
        'tel',
        'localisation',
        'description',
    ];

    // Si tu as une relation avec User
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
