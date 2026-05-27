from django.db import models


class CarouselItem(models.Model):
    class Meta:
        db_table = "carousel"
    
    image = models.ImageField(upload_to="images/", null=True, blank=True)
