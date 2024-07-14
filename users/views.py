from django.shortcuts import render, redirect
from .models import *
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.hashers import make_password
from django.contrib.auth.decorators import user_passes_test
# Create your views here.

def loginuser(request):
    if not request.user.is_authenticated:
        if request.method == 'POST':
            action = request.POST.get('action')

            if action == 'login':
                loginemail = request.POST.get('loginemail')
                loginpassword = request.POST.get('loginpassword')
                # Check if a user with the provided email exists
                user_obj = CustomUser.objects.filter(email=loginemail).first()
                if user_obj is None:
                    messages.info(request, "Email is not registered")
                    return redirect("loginuser")  # Redirect to the same page for login/signup
            
                # Authenticate user
                user = authenticate(email=loginemail, password=loginpassword)
                if user is not None:
                    login(request, user)
                    return redirect('home')  # Replace 'home' with your desired redirect URL after login
                else:
                    messages.error(request, 'Incorrect password')
                    return redirect('loginuser')  # Redirect back to the login/signup page
            
            elif action == 'signup':
                signupname=request.POST.get("signupname")
                signupemail = request.POST.get('signupemail')
                signuppassword = request.POST.get('signuppassword')
                # Check if user with same email exists
                if CustomUser.objects.filter(email__iexact=signupemail).exists():
                    messages.info(request, 'Email is already registered')
                    return redirect('loginuser')  # Redirect to the same page for login/signup
                # Create new user
                new_user = CustomUser.objects.create_user(name=signupname, email=signupemail, password=signuppassword)
                new_user.save()
                login(request, new_user)
                messages.success(request, 'You have signed up and logged in successfully!')
                return redirect('home')  # Replace 'home' with your desired redirect URL after signup
        return render(request, 'userlogin.html')
    else:
        return redirect ("home")
    


def signout(request):
    logout(request)
    messages.success(request, "You are logged out successfully")
    return redirect('loginuser')



@user_passes_test(lambda u: u.is_staff)
def adminuser(request):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to perform this action.")
        return redirect("home")
    if request.method == "POST":
        action=request.POST.get("action")
        adminname=request.POST.get("adminname")
        adminemail=request.POST.get("adminemail")
        adminpassword=request.POST.get("adminpassword")
        if action=="adminsignup":
            if CustomUser.objects.filter(email__iexact=adminemail).first():
                messages.info(request,"Email Already Registered")
                return redirect("home")
            new_user=CustomUser.objects.create_user(name=adminname, email=adminemail, password=make_password(adminpassword),is_staff=True, is_superuser=True)
            new_user.save()
            messages.success(request,"Admin User Created Successfully")
            return redirect("home")
        return render(request,"adminsignup.html")





def changepassword(request):
    if request.method == "POST":
        resetemail = request.POST.get("resetemail")
        resetpassword = request.POST.get("resetpassword")

        user = CustomUser.objects.filter(email__iexact=resetemail).first()
        if user is not None:
            user.set_password(resetpassword)
            user.save()
            messages.success(request, "Password Changed Successfully")
            return redirect("loginuser")
        else:
            messages.info(request, "Email is not registered")
            return render(request, "password.html")

    return render(request, "password.html")