<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('users/{username}', function ($username) {
    return $username;
})->where('username', '[A-Za-z]+[0-9]+');

Route::middleware(['throttle:uploads'])->group(function () {
    Route::get('/middleware', function () {
        return 'hello?';
    });
});
