"""react_django_app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from django.views.decorators.cache import never_cache
from django.views.decorators.gzip import gzip_page
from django.views.generic import TemplateView
from django.views.static import serve

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^static/(?P<path>.*)$', gzip_page(serve), kwargs=dict(document_root=settings.FRONTEND_STATIC_ROOT)),
    url(r'^$', never_cache(gzip_page(TemplateView.as_view(template_name='index.html'))), name='main'),
]
