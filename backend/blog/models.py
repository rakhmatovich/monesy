from django.db import models
from django.contrib.auth.models import AbstractUser



class User(AbstractUser):
    
    email = models.EmailField(
        max_length=150,
        unique=True,
        error_messages={
            "unique": "The email must be unique"
        }
    )
    profile_image = models.ImageField(
        null=True,
        blank=True,
        upload_to="profile_images"
    )

    REQUIRED_FIELDS = ["email"]

    class Meta:
        db_table = 'blog_user'

    def __str__(self):
        return self.username
    
class Token(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    token = models.CharField(max_length=256)

    def __str__(self):
        return self.user
    

