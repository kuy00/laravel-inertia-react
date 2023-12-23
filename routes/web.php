<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home', [
        'message' => 'Inertia With React',
    ]);
});

Route::get('/login', function () {
    return Inertia::render('Login');
});

Route::post('/login', function (Request $request) {
    $id = $request->id;
    $password = $request->password;

    echo "id: {$id}<br>";
    echo "pw: {$password}<br>";

    return 'success';
});
