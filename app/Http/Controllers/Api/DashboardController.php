<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use App\Models\Reservation;
use App\Models\Room;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function getReservations()
    {
        $reservations = Reservation::select('created_at', 'total')
            ->orderBy('created_at')
            ->get()
            ->groupBy(function ($date) {
                return Carbon::parse($date->created_at)->format('m'); // grouping by months
            });

        $reservationsTotal = Reservation::select('created_at', 'total')
            ->orderBy('created_at')
            ->get()
            ->groupBy(function ($date) {
                return Carbon::parse($date->created_at)->format('m'); // grouping by months
            });

        $months = [];
        $monthReservations = [];

        foreach ($reservations as $key => $value) {
            $months[(int)$key] = count($value);
        }

        $m = [];
        $monthReservationsTotal = [];
        foreach ($reservationsTotal as $key => $value) {
            $sym = 0;
            foreach ($reservationsTotal[$key] as $item) {
                $sym += $item->total;
            }
            $m[(int)$key] = $sym;
        }

        for ($i = 1; $i <= 12; $i++) {
            if (!empty($months[$i])) {
                $monthReservations[] = $months[$i];
            } else {
                $monthReservations[] = 0;
            }
            if (!empty($m[$i])) {
                $monthReservationsTotal[] = $m[$i];
            } else {
                $monthReservationsTotal[] = 0;
            }
        }

        return response([
            'reservations' => $monthReservations,
            'totals' => $monthReservationsTotal,
            'rooms' => Room::all()->count(),
            'gallery' => Gallery::all()->count(),
            'users' => User::all()->count(),
        ]);
    }
}
