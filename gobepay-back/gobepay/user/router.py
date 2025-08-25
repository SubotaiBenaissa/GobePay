from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView
from user.views import RegisterView

urlpatterns = [
    path("auth/register", RegisterView.as_view()),
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain')
]