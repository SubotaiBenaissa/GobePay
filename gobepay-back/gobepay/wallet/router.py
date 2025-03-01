from django.urls import path
from wallet.views import RechargeView

urlpatterns = [
    path('wallet/recharge/', RechargeView.as_view())
]