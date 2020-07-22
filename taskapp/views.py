from django.shortcuts import render,redirect,HttpResponse
from .models import RegistrationData
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate,login
from django.contrib import messages

# Create your views here.
def Login_View(request):
    if request.method == "POST":
        email = request.POST.get('email')
        pwd = request.POST.get('pass')
        login = RegistrationData.objects.filter(emailid=email,confirmpass=pwd)
        if login.exists():
            # return HttpResponse('login success')
            return redirect('/home/')
        # user = authenticate(request,emailid=email,confirmpass=pwd)
        # if user is not None:
        #     login(request,user)
        #     return redirect('/home/')

        else:
            messages.info(request, 'Emailid OR Password is incorrect')
            # return HttpResponse('LOGIN FAIL')

    return render(request, 'MyApp/log.html')




def Register(request):
    if request.method=='POST':
        firstname=request.POST.get('firstname')
        lastname=request.POST.get('lastname')
        password=request.POST.get('pass1')
        confirmpass=request.POST.get('conpass')
        emailid=request.POST.get('emailid')
        # file =request.POST.get('file')
        data=RegistrationData(
            firstname=firstname,
            lastname=lastname,
            password=password,
            confirmpass=confirmpass,
            emailid=emailid,
            # file = file,
        )
        data.save()
        messages.success(request,'Account Created Successfully')
        return redirect('/')
        # return HttpResponse('data saved successfully')

    return render(request,'MyApp/reg.html')

@login_required
def Home_View(request):
    # data = RegistrationData.objects.filter(user=request.user)
    data = RegistrationData.objects.all()           #
    context = {'data': data}
    return render(request, 'MyApp\home.html', context)