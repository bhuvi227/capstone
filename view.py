from django.shortcuts import render
from .models import GroundwaterData

def home(request):
    data = GroundwaterData.objects.all()
    return render(request, 'predictor/home.html', {'data': data})
