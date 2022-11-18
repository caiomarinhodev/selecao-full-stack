from django.db import models


# Create your models here.
class Timestamp(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class CustomUser(Timestamp):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name='custom_user')
    cpf = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)

    def __str__(self):
        return self.user.username
