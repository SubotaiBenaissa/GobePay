from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView
from user.views import RegisterView, UserMeView, UserPublicInfo

urlpatterns = [
    path("auth/register", RegisterView.as_view()),
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain'),
    path('user/me', UserMeView.as_view()),
    path('users/info', UserPublicInfo.as_view())
]