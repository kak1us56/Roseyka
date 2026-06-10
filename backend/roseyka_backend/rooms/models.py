from django.db import models
from ckeditor.fields import RichTextField
from slugify import slugify


class Room(models.Model):
    class Meta:
        db_table: "rooms"
    
    slug = models.SlugField(max_length=255, unique=True, db_index=True, verbose_name="URL", null=True)
    title = models.CharField(max_length=255, null=False)

    subtitle_card = models.CharField(max_length=255)
    subtitle_page = models.CharField(max_length=255)

    description_card = models.TextField(null=True, blank=True)
    description_page = RichTextField(null=True, blank=True)

    price = models.PositiveIntegerField(null=False)
    main_image = models.ImageField(upload_to='images/', null=True, blank=True)

    conditioner = models.BooleanField(default=False)
    tv = models.BooleanField(default=False)
    furniture = models.BooleanField(default=False)
    shower = models.BooleanField(default=False)
    fridge = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.title)
            new_slug = base_slug

            counter = 1
            while Room.objects.filter(slug=new_slug).exists():
                new_slug = f"{base_slug}-{counter}"
                counter += 1
            
            self.slug = new_slug
        
        super().save(*args, **kwargs)
    
    def __str__(self):
        return f"{self.title}: {self.price}"


class RoomImage(models.Model):
    image = models.ImageField(upload_to='images/', null=True, blank=True)
    room = models.ForeignKey(Room, on_delete=models.CASCADE, related_name='images')

    def __str__(self):
        return f"Image for {self.room.title}"
    
