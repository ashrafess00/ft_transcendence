from django.db import models
from pygments.lexers import get_lexer_by_name
from pygments.formatters.html import HtmlFormatter
from pygments import highlight
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
    owner = models.ForeignKey('auth.User', related_name='snippets', on_delete=models.CASCADE)


    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['created']