<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\GalleryController;
use App\Http\Controllers\Api\ReservationController;
use App\Http\Controllers\Api\RoomController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::get('/gallery', [GalleryController::class, 'index']);
Route::get('/rooms', [RoomController::class, 'index']);
Route::post('/reservation', [ReservationController::class, 'store']);
Route::get('/rooms/{id}', [RoomController::class, 'show']);

Route::middleware(['auth:api'])->group(function() {
    Route::get('/users/{id}', [UserController::class, 'show']);
    Route::post('/users/{id}', [UserController::class, 'update']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::middleware(['role:admin'])->group(function() {
        Route::get('/dashboard', [DashboardController::class, 'getReservations']);

        Route::get('/reservations', [ReservationController::class, 'index']);
        Route::get('/reservations/{id}', [ReservationController::class, 'show']);
        Route::post('/reservations/{id}', [ReservationController::class, 'edit']);

        Route::post('/gallery', [GalleryController::class, 'store']);
        Route::delete('/gallery/{id}', [GalleryController::class, 'destroy']);

        Route::get('/users', [UserController::class, 'index']);

        Route::post('/rooms', [RoomController::class, 'store']);
        Route::delete('/rooms/{id}', [RoomController::class, 'destroy']);


        //
    });
});
