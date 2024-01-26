from django.contrib import messages
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.http import HttpResponse

def register(request):
    for key, value in request.headers.items():
        print(f'{key}: {value}')
    print("=====================================")

    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        print(username, email, password, confirm_password)

        if password != confirm_password:
            messages.error(request, 'Passwords do not match')
            print('Passwords do not match')
            return redirect('register')
        elif User.objects.filter(username=username).exists() or User.objects.filter(email=email).exists():
            messages.error(request, 'Username or Email already exists')
            print('Username or Email already exists')
            return redirect('register')
        else:
            user = User.objects.create_user(username=username, email=email, password=password)
            messages.success(request, f'User {username} registered successfully')
            user = authenticate(username=username, password=password)
            login(request, user)
            print('User registered successfully')
            return HttpResponse('User registered successfully')

    return render(request, 'register.html')
