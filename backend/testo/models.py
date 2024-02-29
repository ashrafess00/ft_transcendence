from django.db import models

# Create your models here.

class Genre(models.Model):
    name = models.CharField(
        max_length=20,
        unique=True,
        help_text="enter book genre",
    )

    def __str__(self):
        return self.name

class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    def __str__(self):
        return f'{self.last_name}, {self.first_name}'
    

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey('Author', on_delete=models.RESTRICT, null=True)
    summary = models.TextField(max_length=1000, help_text="this is a summary")
    genre = models.ManyToManyField(Genre, help_text="book's genre")

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("book-detail", args=[str(self.id)])
    
       