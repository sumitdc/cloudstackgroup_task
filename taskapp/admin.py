from django.contrib import admin
from .models import  RegistrationData


# Register your models here.
class RegAdmin(admin.ModelAdmin):
    list_display = ['firstname','lastname','emailid','confirmpass']
admin.site.register(RegistrationData,RegAdmin)