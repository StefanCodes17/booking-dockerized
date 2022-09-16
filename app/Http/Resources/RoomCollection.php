<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class RoomCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'image' => Storage::url('rooms/' . $this->image),
            'name' => $this->name,
            'description' => $this->description,
            'price' => $this->price,
            'number' => $this->number,
            'people' => $this->people,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
