<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\ImageManagerStatic;

class Gallery extends Model
{
    use HasFactory;

    protected $fillable = ['image'];

    public function setImageAttribute($value)
    {
        $attribute_name = "image";
        $disk = 'public';
        // destination path relative to the disk above
        $destination_path = "/gallery/";

        // if the image was erased
        if ($value == null) {
            // delete the image from disk
            Storage::disk($disk)->delete($this->{$attribute_name});

            // set null in the database column
            $this->attributes[$attribute_name] = null;
        }

        // if a base64 was sent, store it in the db
        if (Str::startsWith($value, 'data:image')) {

            $image = ImageManagerStatic::make($value)->orientate();

            $image->encode('jpg', 30);
            $image->resize(350, null, function ($constraint) {
                $constraint->aspectRatio();
            });
            $image->interlace();

            $filename = md5($value . time()) . '.jpg';

            Storage::disk($disk)->put($destination_path . $filename, $image);

            Storage::disk($disk)->delete($filename);

            $this->attributes[$attribute_name] = $filename;
        }
    }

}
