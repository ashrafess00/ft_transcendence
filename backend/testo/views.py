from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
from django.shortcuts import render


from .models import Book, Author, Genre
from django.views import generic

def index(request):
    num_books = Book.objects.all().count()
    num_authors = Author.objects.count()
    context = {
        'num_books': num_books,
        'num_authors': num_authors,
    }

    return render(request, 'index.html', context=context)


class BookListView(generic.ListView):
    model = Book
    context_object_name = 'book_list'