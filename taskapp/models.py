from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save


# Create your models here.
class RegistrationData(models.Model):
    # user = models.OneToOneField(User,on_delete=models.CASCADE)
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    emailid = models.EmailField()
    password = models.CharField(max_length=100)
    confirmpass = models.CharField(max_length=100)
    # file = models.ImageField(upload_to='profile_img/', blank=True)

    def __str__(self):
        return self.firstname
        # return self.user.username

