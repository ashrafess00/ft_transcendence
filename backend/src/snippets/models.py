from django.db import models
# Create your models here.

LANGUAGES = [
    ('en', 'English'),
    ('ar', 'Arabic'),
    ('sp', 'Spanigsh')
]

class Snippet(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    code = models.TextField()
    language = models.CharField(max_length=100, choices=LANGUAGES, default='English')
    owner = models.ForeignKey('auth.User', related_name='snippets', on_delete=models.CASCADE, null=True)


    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['created']