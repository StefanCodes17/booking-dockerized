<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Room extends Model
{
    use HasFactory;

    protected $fillable = ['image', 'name', 'price', 'description', 'number', 'people'];

    public function setImageAttribute($value)
    {
        $attribute_name = "image";
        $disk = 'public';
        $destination_path = "/rooms";

        // if the image was erased
        if ($value==null) {
            // delete the image from disk
            Storage::disk($disk)->delete($this->{$attribute_name});

            // set null in the database column
            $this->attributes[$attribute_name] = null;
        }

        // if a base64 was sent, store it in the db
        if (Str::startsWith($value, 'data:image'))
        {
            $filename = md5($value.time()).'.jpg';

//            Storage::disk($disk)->put($destination_path . '/' . $filename, 'test');
            Storage::disk($disk)->putFileAs($destination_path, $value, $filename);

            Storage::disk($disk)->delete($filename);

            $this->attributes[$attribute_name] = $filename;
        }
    }

}
